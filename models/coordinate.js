const mongoose = require("mongoose");

let coordinateSchema = new mongoose.Schema({
  _id:{
    type: String
  },
  lat: {
    type: Number
  },
  lng: {
    type: Number
  },
  user: {
    type: String
  },
  date: {
    type: String
  },
  category: {
    type: String
  },
  comments: {
    type: Array
  },
  status: {
    type: String
  }
}, { collection: 'marcadores' });

module.exports = mongoose.model('MarkersSchema',coordinateSchema);
