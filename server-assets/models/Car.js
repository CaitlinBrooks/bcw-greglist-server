let mongoose = require('mongoose')
let Schema = mongoose.Schema

let schema = new Schema({
  make: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: "No description included"
  },
  price: {
    type: Number,
    required: true
  }
})

// image: Url,
// required: true



module.exports = mongoose.model('Car', schema)