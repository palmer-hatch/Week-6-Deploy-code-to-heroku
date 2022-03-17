const express = require('express')
const cors = require('cors')
const path = require('path')

// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '4070a11f0c9f40329ebb49da4c5ce872',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')

const app = express()
app.use(cors())
app.use(express.json())

//Middleware(below you only need to serve it up once)
app.use(express.static(path.join(__dirname, "../public")))

// research how to serve another static folder

//endpoints
// app.get("/",function(req,res) {
//     res.sendFile(path.join(__dirname, "../public/index.html"));
// })

// app.get("/styles", function(req,res){
//     res.sendFile(path.join(__dirname,"../public/index.css"))
// })

// /// heroku will supply its on env number
// const port = process.env.PORT || 4005;

app.listen(port, ()=>{
    console.log(`wee vibin on port ${port}`)
});