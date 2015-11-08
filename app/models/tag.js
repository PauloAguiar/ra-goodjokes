var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tagSchema = new Schema({
	name: String,
  	content: String,
  	created_at: Date,
  	updated_at: Date
});

var Tag = mongoose.model('Tag', tagSchema);

module.exports = Tag;