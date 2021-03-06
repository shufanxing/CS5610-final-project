var mongoose = require('mongoose');

var WidgetSchema = mongoose.Schema({
  rid: {type: mongoose.Schema.Types.ObjectId, ref: 'RestaurantModel'},
  widgetType:{
    type: String,
    enum : ['HEADING', 'IMAGE', 'YOUTUBE', 'HTML', 'TEXT'],
  },
  name: String,
  text: String,
  placeholder: String,
  description: String,
  url: String,
  width: String,
  height: String,
  rows: Number,
  size: Number,
  class: String,
  icon: String,
  deletable: Boolean,
  formatted: Boolean,
  dateCreated:{
    type:Date,
    default:Date.now()
  }
},{collection: 'widget'});

module.exports = WidgetSchema;
