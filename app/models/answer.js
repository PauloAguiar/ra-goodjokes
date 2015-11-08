var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var answerSchema = new Schema({
	_creator: {type:  Number, ref: 'User'},
	upvotes: Number,
  	content: String,
  	created_at: Date,
  	updated_at: Date
});

var Answer = mongoose.model('Answer', answerSchema);

module.exports = Answer;