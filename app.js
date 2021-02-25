const express = require('express'),
mongoose = require('mongoose')
app = express(),
port = 1900


//mongoose
mongoose.connect('mongodb://localhost:27017/monblog')

//route
const {getHomePage} = require('./routes/index')




//index
app.get('/', getHomePage)

app.listen(port, () => console.log(`server connect to port : ${port}`))