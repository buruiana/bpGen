const mongoose = require('mongoose');

const PropTypeSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  description: { type: String, required: false },
  subtitle: { type: String, required: false },
  isActive: { type: Boolean, required: false },
  isPublic: { type: Boolean, required: false },
  propTypeProps: { type: Array, required: false },
  children: { type: Array, required: false },
  userid: { type: String, required: true }
});

module.exports = mongoose.model('PropType', PropTypeSchema);
