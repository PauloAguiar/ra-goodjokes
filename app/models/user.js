var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
	_id: Number
	name: String,
	username: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	school: String,
	professor: Boolean,
	created_at: Date,
	updated_at: Date
});

var User = mongoose.model('User', userSchema);

module.exports = User;