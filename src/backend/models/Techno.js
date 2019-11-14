const mongoose = require('mongoose');

const TechnoSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  technoUrl: { type: String, required: false },
  userid: { type: String, required: true }
});

module.exports = mongoose.model('Techno', TechnoSchema);