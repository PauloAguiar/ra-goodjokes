var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var vestibularSchema = new Schema({
	name: String,
  	created_at: { type: Date, default: Date.now },
  	updated_at: { type: Date, default: Date.now }
});

var Vestibular = mongoose.model('Vestibular', vestibularSchema);

module.exports = Vestibular;