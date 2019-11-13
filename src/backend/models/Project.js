const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  forms: { type: Object, required: true },
});

module.exports = mongoose.model('Project', ProjectSchema);
