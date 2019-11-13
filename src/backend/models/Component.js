const mongoose = require('mongoose');

const ComponentSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  description: { type: String, required: false },
  provider: { type: String, required: false },
  techno: { type: String, required: false },
  subtitle: { type: String, required: false },
  componentImport: { type: String, required: false },
  isDefault: { type: Boolean, required: false },
  isActive: { type: Boolean, required: false },
  isPublic: { type: Boolean, required: false },
  componentProps: { type: Array, required: false },
  children: { type: Array, required: false },
  userid: { type: String, required: true }
});

module.exports = mongoose.model('Component', ComponentSchema);
