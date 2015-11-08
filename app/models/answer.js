var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');

autoIncrement.initialize(mongoose.connection);

var answerSchema = new Schema({
	_creator: { type: Number, ref: 'User'},
	_question: { type: String, ref: 'Question'},
	upvotes: Number,
  	content: String,
  	created_at: { type: Date, default: Date.now },
  	updated_at: { type: Date, default: Date.now }
});

answerSchema.plugin(autoIncrement.plugin, 'Answer');
var Answer = mongoose.model('Answer', answerSchema);

module.exports = Answer;