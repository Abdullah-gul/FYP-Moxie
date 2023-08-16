const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
app.use(express.json())
dotenv.config()

const question = require('./routes/Question')

const signupRouter = require('./routes/signup')
const loginRouter = require('./routes/login')
const clientRouter =require('./routes/ClientRoute')
const notification =require('./routes/notification')
const service =require('./routes/serviceProviderRoute')
const userRouter =require('./routes/userRoute')
var bodyParser = require("body-parser");


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log('db connection is sucessful')
  })
  .catch((err) => {
    console.log(err)
  })


app.use(loginRouter)
app.use(signupRouter)
app.use(question);
app.use(clientRouter)
app.use(notification);
app.use(service)
app.use(userRouter)


app.listen(process.env.PORT, () => {
  console.log('server is runing ...')
})
