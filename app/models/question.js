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

questionSchema.statics = {
	
  getUserNamesById: function (questionList, callback) {
  	for (index = 0; index < questionList.length; ++index) {
  		questionList[index].populate('_creator', 'name').exec(function (err, question) {
	  		if (err) return handleError(err);
	  		question.user = { "user": question._creator, "id": question._creator.id };
	  });
  	}
  	callback(questionList);
  }
};

questionSchema.plugin(autoIncrement.plugin, 'Question');

questionSchema.statics = {
  load: function (options, cb) {
    this.findOne(options.criteria)
      .exec(cb);
  }
};

var Question = mongoose.model('Question', questionSchema);

module.exports = Question;