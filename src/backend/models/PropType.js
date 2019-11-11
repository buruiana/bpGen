const mongoose = require('mongoose');

const PropTypeSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  userid: { type: String, required: true }
});

module.exports = mongoose.model('PropType', PropTypeSchema);