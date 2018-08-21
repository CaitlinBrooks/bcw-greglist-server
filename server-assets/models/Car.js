let mongoose = require('mongoose')
let Schema = mongoose.Schema

let schema = new Schema({
  name: {
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

// What if I wanted to include a required image of the car?
// image: Url,
// required: true



module.exports = mongoose.model('Car', schema)