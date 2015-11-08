var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');

autoIncrement.initialize(mongoose.connection);

var vestibularSchema = new Schema({
	name: { type: String, unique: true},
  	created_at: { type: Date, default: Date.now },
  	updated_at: { type: Date, default: Date.now }
});

vestibularSchema.statics = {
  load: function (options, cb) {
    options.select = options.select || 'name username';
    this.findOne(options.criteria)
      .select(options.select)
      .exec(cb);
  }
};

vestibularSchema.plugin(autoIncrement.plugin, 'Vestibular');
var Vestibular = mongoose.model('Vestibular', vestibularSchema);

module.exports = Vestibular;