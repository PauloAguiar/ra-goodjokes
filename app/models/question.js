var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');

autoIncrement.initialize(mongoose.connection);

var questionSchema = new Schema({
	_creator: { type: Schema.Types.ObjectId, ref: 'User'},
	_answers: [{ type: Schema.Types.ObjectId, ref: 'Answer' }],
	_tags: [{ type: Schema.Types.ObjectId, ref: 'Tag' }],
	_vestibular: { type: Schema.Types.ObjectId, ref: 'Vestibular' },
  	title: String,
  	content: String,
  	votes: Number,
  	created_at: { type: Date, default: Date.now },
  	updated_at: { type: Date, default: Date.now }
});

questionSchema.plugin(autoIncrement.plugin, 'Question');
var Question = mongoose.model('Question', questionSchema);

module.exports = Question;