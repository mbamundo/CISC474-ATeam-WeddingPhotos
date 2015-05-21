var mongoose = require('mongoose');

var PicSchema = new mongoose.Schema({
  name: String,
  pic: String
});

mongoose.model('Pic', PicSchema);