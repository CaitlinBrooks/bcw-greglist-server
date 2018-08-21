let mongoose = require('mongoose')
const connectionString = 'mongodb://student:student1@ds018538.mlab.com:18538/gregslist'
let connection = mongoose.connection


mongoose.connect(connectionString, {
  useNewUrlParser: true
})

connection.on('error', err => {
  console.log("Database Error: ", err)
})

connection.once('open', () => {
  console.log("Connected to Database")
})