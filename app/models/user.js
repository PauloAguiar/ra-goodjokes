var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
	_id: { type: Number, unique: true, default: 2},
	name: { type: String, default: 'bssdasdala'}
	// username: { type: String, required: true, unique: true },
	// password: { type: String, required: true },
	// school: String, default: ''},
	// professor: Boolean, default: true},
	// created_at: Date, default: Date.now()},
	// updated_at: Date default: Date.now()},
});

var User = mongoose.model('User', userSchema);

module.exports = User;