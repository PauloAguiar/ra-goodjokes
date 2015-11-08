var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');

autoIncrement.initialize(mongoose.connection);

var vestibularSchema = new Schema({
	name: String,
  	created_at: { type: Date, default: Date.now },
  	updated_at: { type: Date, default: Date.now }
});

vestibularSchema.plugin(autoIncrement.plugin, 'Vestibular');
var Vestibular = mongoose.model('Vestibular', vestibularSchema);

module.exports = Vestibular;