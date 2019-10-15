const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const composerSchema = new Schema({
  firstName: String,
  lastName: String
}, {collection: 'composers'});

let Composer = mongoose.model('Composer', composerSchema);

module.exports = Composer;
