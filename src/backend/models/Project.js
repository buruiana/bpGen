const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  forms: { type: Object, required: true },
  userid: { type: String, required: true },
  title: { type: String, required: true },
  techno: { type: String, required: false },
});

module.exports = mongoose.model('Project', ProjectSchema);
