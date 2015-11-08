var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var answerSchema = new Schema({
	_creator: { type: Number, ref: 'User'},
	_question: { type: String, ref: 'Question'},
	upvotes: Number,
  	content: String,
  	created_at: { type: Date, default: Date.now },
  	updated_at: { type: Date, default: Date.now }
});

var Answer = mongoose.model('Answer', answerSchema);

module.exports = Answer;