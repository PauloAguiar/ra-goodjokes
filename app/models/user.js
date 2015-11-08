var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');

autoIncrement.initialize(mongoose.connection);

var userSchema = new Schema({
	name: { type: String, required: true, unique: true },
	username: { type: String, required: true, unique: true },
	school: { type: String, default: '' },
	rating: { type: Number, default: 0 },
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
};

userSchema.plugin(autoIncrement.plugin, 'User');
var User = mongoose.model('User', userSchema);

module.exports = User;