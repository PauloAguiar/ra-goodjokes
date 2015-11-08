var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');

autoIncrement.initialize(mongoose.connection);

var tagSchema = new Schema({
	name: { type: String, unique: true},
  	created_at: { type: Date, default: Date.now },
  	updated_at: { type: Date, default: Date.now }
});

tagSchema.statics = {
  load: function (options, cb) {
    options.select = options.select || 'name username';
    this.findOne(options.criteria)
      .select(options.select)
      .exec(cb);
  }
};

tagSchema.plugin(autoIncrement.plugin, 'Tag');
var Tag = mongoose.model('Tag', tagSchema);

module.exports = Tag;