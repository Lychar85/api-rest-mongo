const express = require('express'),
mongoose = require('mongoose')
app = express(),
port = 1900


//mongoose
mongoose.connect('mongodb://localhost:27017/monblog',{useNewUrlParser: true,useUnifiedTopology: true})
console.log("status mongo:",mongoose.connection.readyState);


//middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))


//route
const {getHomePage} = require('./routes/index')
const authRoute = require('./routes/auth')


app.use('/api/auth', authRoute)
app.get('/', getHomePage)

app.listen(port, () => console.log(`server connect to port : ${port}`))