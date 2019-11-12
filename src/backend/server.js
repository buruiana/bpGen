const express = require("express");
const http = require("http");
const socketIO = require("socket.io");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const shell = require("shelljs");
const prettier = require("prettier");
const fs = require("fs");
const cors = require("cors");
const jwt = require('jsonwebtoken');
const User = require('./models/User');
const withAuth = require('./middleware');
const { getModel, getMod } = require('./utils');
const Techno = require('./models/Techno');
const app = express();
app.use(cors());



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const server = http.createServer(app);
const io = socketIO(server);
io.setMaxListeners(0);

const mongo_uri = 'mongodb://localhost/bpGen';
const secret = 'mysecretsshhh';
mongoose.connect(mongo_uri, function (err) {
  if (err) {
    throw err;
  } else {
    console.log(`Successfully connected to ${mongo_uri}`);
  }
});


io.on("connection", socket => {
  console.log("New client connected");

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

function copyFiles(src, dest) {
  shell.exec(`cp -r ${src} ${dest}`);
}

const opt = {
  useTabs: false,
  printWidth: 60,
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  bracketSpacing: false,
  jsxBracketSameLine: true,
  parser: `babel`,
  trailingComma: "all",
  arrowParens: "avoid",
  proseWrap: "preserve"
};

app.get('/api/secret', withAuth, function (req, res) {
  res.send('The password is potato');
});

app.get('/checkToken', withAuth, function (req, res) {
  res.sendStatus(200);
});

app.post('/api/create', function (req, res) {
  const model = getModel(req.body.data.dataType, req.body.data.data);

  model.save(function (err) {
    if (err) {
      res.status(500)
        .send(err);
    } else {
      res.json(model);
    }
  });
});

app.post('/api/update', function (req, res) {
  const model = getMod(req.body.data.dataType, req.body.data.data);

  model.findByIdAndUpdate(req.body.data.data._id, req.body.data.data, (err) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

app.delete('/api/delete', function (req, res) {
  const model = getMod(req.body.dataType, req.body.data);
  var myquery = { _id: req.body.data };
  model.deleteOne(myquery, function (error, obj) {
    if (error) {
      res.status(500)
        .send(error);
    }
    res.json("delete success");
  });
});


app.post('/api/getCollection', async (req, res) => {
  const model = getMod(req.body.data);

  model.find({}, (error, collection) => {
    if (error) {
      res.status(500)
        .send(error);
    } else {
      res.status(200).json(collection)
    }
  })
});


app.post('/api/register', function (req, res) {
  const { email, password } = req.body.data;
  const user = new User({ email, password });
  user.save(function (error) {
    if (error) {
      return res.status(500)
        .send({
          error});
    } else {
      return res.status(200)
        .send({
        error: false,
        user
      })
    }
  });
});

app.post("/api/prettify", (req, res) => {
  let newCode = [];
  req.body.code.code.map(e => {
    let theCode = "";
    if (e.code) theCode = e.code;
    newCode.push({ id: e.id, code: prettier.format(theCode, opt) });
  });

  res.json(newCode);
});

app.post('/api/authenticate', function (req, res) {
  const { email, password } = req.body.data;

  User.findOne({ email }, function (err, user) {
    if (err) {
      console.error(err);
      res.status(500)
        .json({
          error: 'Internal error please try again'
        });
    } else if (!user) {
      res.status(401)
        .json({
          error: 'Incorrect email or password'
        });
    } else {
      user.isCorrectPassword(password, function (err, same) {
        if (err) {
          res.status(500)
            .json({
              error: 'Internal error please try again'
            });
        } else if (!same) {
          res.status(401)
            .json({
              error: 'Incorrect email or password'
            });
        } else {
          // Issue token
          const payload = { email };
          const token = jwt.sign(payload, secret, {
            expiresIn: '1h'
          });
          res.cookie('token', token, { httpOnly: true })
            .json(user);

          //res.json(user);
        }
      });
    }
  });
});

function execWrapper(command, options) {
  return new Promise((resolve, reject) => {
    shell.exec(command, options, (error, out, err) => {
      if (error) return reject(error);
      resolve({ out: out, err: err });
    });
  });
}

app.post("/api/exportModules", (req, res) => {
  fs.writeFileSync('./src/utils/importModules.js',  prettier.format(req.body.data, opt));
  res.json("done");
});

app.post("/api/exportFiles", (req, res) => {
  const name = req.body.name;
  const techno = req.body.techno;
  const dest = req.body.destination + `/${name}`;
  shell.mkdir(dest);

  if (req.body.projectType === "Service") {
    if (req.body.reducer || req.body.exportAll) {
      fs.writeFileSync(`${dest}/reducer.js`, req.body.reducer, "utf8");
    }

    if (req.body.saga || req.body.exportAll) {
      fs.writeFileSync(`${dest}/index.js`, req.body.saga, "utf8");
    }

    if (req.body.actions || req.body.exportAll) {
      fs.writeFileSync(`${dest}/actions.js`, req.body.actions, "utf8");
    }

    if (req.body.actionTypes || req.body.exportAll) {
      fs.writeFileSync(`${dest}/actionTypes.js`, req.body.actionTypes, "utf8");
    }
  } else {
    if (req.body.hoc || req.body.exportAll) {
      fs.writeFileSync(`${dest}/index.js`, req.body.hoc, "utf8");
    }

    if (req.body.component || req.body.exportAll) {
      fs.writeFileSync(
        `${dest}/${name}.js`,
        req.body.component.replace(/__/g, "."),
        "utf8"
      );
    }

    if (req.body.styles || req.body.exportAll) {
      const ext = req.body.techno === "React" ? "css" : "js";
      fs.writeFileSync(`${dest}/styles.${ext}`, req.body.styles, "utf8");
    }
  }

  res.json("done");
});

app.post("/api/generateApp", (req, res) => {
  const settings = req.body.appSettings;
  const src = "/Users/bienvenue/Documents/Projects/generator1/templates/";
  const projectName = settings.shift();
  const dest = settings.shift() + "/" + projectName;

  shell.mkdir(dest);
  shell.cd(dest);
  myAsyncFunction(settings, src, dest);
  // const child = shell.exec('npm init -y', { async: true });
  // io.sockets.emit('npm_log', 'Generating package.json...\n');
  // child.stdout.on('data', function (data) {
  //   io.sockets.emit('npm_log', data);
  //   io.sockets.emit('npm_log', 'Installing dependencies...\n');
  //   res.end();
  //   myAsyncFunction(settings, src, dest);
  // });
});

const package = `
{
  "name": "name",
  "version": "1.0.0",
  "description": "",
  "main": "src/web/index.js",
  "scripts": {
    "test": "",
    "start": "parcel src/web/index.html"
  },
  "browserslist": [
    "last 1 Chrome version"
  ],
  "keywords": [],
  "author": "M",
  "license": "ISC",
  "dependencies": {
    replaceDependencies
  },
}
`;

function generatePackageJson(dependencies) {
  return package.replace("replaceDependencies", dependencies);
}

async function myAsyncFunction(settings, src, dest) {
  const promises = settings.map(type =>
    execWrapper(`npm show ${type} dist-tags`)
  );
  io.sockets.emit("npm_log", "Getting dependencies...");
  let del_arr = Promise.all(promises);
  const res = await del_arr;
  let arr = [];
  let i = 0;

  res.map(e => {
    const parsed = e.out.match(/latest: '(.*?)'/i);
    const str = `"${settings[i]}": "^${parsed[1]}"`;
    arr.push("\n" + str);
    i++;
  });

  io.sockets.emit("npm_log", arr);
  io.sockets.emit("npm_log", "Generating package.json");
  const opt = {
    parser: "json"
  };
  const package = prettier.format(generatePackageJson(arr), opt);
  fs.writeFileSync(`${dest}/package.json`, package, "utf8");
  io.sockets.emit("npm_log", package);
  io.sockets.emit("npm_log", "Copying files...\n");
  copyFiles(src, dest);
  io.sockets.emit("npm_log", "Done!");
  io.sockets.emit("npm_done");
}

const port = process.env.PORT || 5000;
server.listen(port);

console.log("App is listening on port " + port);
