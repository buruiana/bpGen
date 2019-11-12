const DATA_TYPES = require('./constants');
const Techno = require('./models/Techno');
const Component = require('./models/Component');
const PropType = require('./models/PropType');
const Provider = require('./models/Provider');
const Project = require('./models/Project');
const Template = require('./models/Template');
const User = require('./models/User');

const getModel = (dataType, data) => {
  switch (dataType) {
    case 'technos':
      return new Techno(data);
      break;
    case 'components':
      return new Component(data);
      break;
    case 'propTypes':
      return new PropType(data);
      break;
    case 'providers':
      return new Provider(data);
      break;
    case 'projects':
      return new Project(data);
      break;
    case 'templates':
      return new Template(data);
      break;
    case 'users':
      return new User(data);
      break;
    default:
      break;
  }
};

const getMod = dataType => {
  switch (dataType) {
    case 'technos':
      return Techno;
      break;
    case 'components':
      return Component;
      break;
    case 'propTypes':
      return PropType;
      break;
    case 'providers':
      return Provider;
      break;
    case 'projects':
      return Project;
      break;
    case 'templates':
      return Template;
      break;
    case 'users':
      return User;
      break;
    default:
      break;
  }
};

module.exports.getModel = getModel;
module.exports.getMod = getMod;