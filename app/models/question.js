var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var questionSchema = new Schema({
	_creator: {type:  Number, ref: 'User'},
  	title: String,
  	content: String,
  	upvotes: Number,
  	created_at: Date,
  	updated_at: Date
});


var Question = mongoose.model('Question', questionSchema);

module.exports = Question;