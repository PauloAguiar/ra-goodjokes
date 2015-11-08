var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');

autoIncrement.initialize(mongoose.connection);

var tagSchema = new Schema({
	name: String,
  	created_at: { type: Date, default: Date.now },
  	updated_at: { type: Date, default: Date.now }
});

tagSchema.plugin(autoIncrement.plugin, 'Tag');
var Tag = mongoose.model('Tag', tagSchema);

module.exports = Tag;