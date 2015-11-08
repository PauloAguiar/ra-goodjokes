var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tagSchema = new Schema({
	name: String,
  	created_at: { type: Date, default: Date.now },
  	updated_at: { type: Date, default: Date.now }
});

var Tag = mongoose.model('Tag', tagSchema);

module.exports = Tag;