let express = require('express')
let server = express()
let bp = require('body-parser')
let port = 3000

require('./server-assets/db/mlab-config')

server.use(bp.json())
server.use(bp.urlencoded({
  extended: true
}))

let carRoutes = require('./server-assets/routes/car-routes')

server.use('api/car', carRoutes)

server.listen(port, () => {
  console.log('Running on Port:', port)
})