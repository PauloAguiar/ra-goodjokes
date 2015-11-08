var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var vestibularSchema = new Schema({
	name: String,
  	created_at: Date,
  	updated_at: Date
});

var Vestibular = mongoose.model('Vestibular', vestibularSchema);

module.exports = Vestibular;