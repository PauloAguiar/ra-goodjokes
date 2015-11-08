var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');

autoIncrement.initialize(mongoose.connection);

var questionSchema = new Schema({
	_creator: { type: Number, ref: 'User'},
	_answers: [{ type: Number, ref: 'Answer' }],
	_tags: [{ type: Number, ref: 'Tag' }],
	_vestibular: { type: Number, ref: 'Vestibular' },
  	title: String,
  	content: String,
  	votes: Number,
  	created_at: { type: Date, default: Date.now },
  	updated_at: { type: Date, default: Date.now }
});

questionSchema.plugin(autoIncrement.plugin, 'Question');
var Question = mongoose.model('Question', questionSchema);

module.exports = Question;