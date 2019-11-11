const mongoose = require('mongoose');

const TemplateSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  templateDescription: { type: String, required: false },
  templateName: { type: String, required: false },
  templateTechnos: { type: String, required: false },
  templateIsActive: { type: Boolean, required: false },
  templateIsComponent: { type: Boolean, required: false },
  templateIsPublic: { type: Boolean, required: false },
  templateFiles: { type: Array, required: false },
  userid: { type: String, required: true }
});

module.exports = mongoose.model('Template', TemplateSchema);

