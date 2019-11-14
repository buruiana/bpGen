const mongoose = require('mongoose');

const ProviderSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  path: { type: String, required: false },
  providerUrl: { type: String, required: false },
  providersTechno: { type: String, required: false },
  userid: { type: String, required: true }
});

module.exports = mongoose.model('Provider', ProviderSchema);
