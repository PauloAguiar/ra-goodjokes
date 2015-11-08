var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');

var userSchema = new Schema({
	name: { type: String, required: true, unique: true },
	username: { type: String, required: true, unique: true },
	school: { type: String, default: '' },
	professor: { type: Boolean, default: true },
	created_at: { type: Date, default: Date.now },
	updated_at: { type: Date, default: Date.now }
});


userSchema.statics = {
  load: function (options, cb) {
    options.select = options.select || 'name username';
    this.findOne(options.criteria)
      .select(options.select)
      .exec(cb);
  }
}



var User = mongoose.model('User', userSchema);

module.exports = User;