const express = require('express')
    , mongoose = require('mongoose')
    , app = express()
    , port = 3050
    , verifyToken = require('./routes/verifyToken')
    , mysql = require('mysql')


app.set('view engine', 'ejs');


// MySQL
var db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'bunthear',
    database : 'team'
  });
   
db.connect((err) => {
    if (err) { throw err;}
    console.log('Connecté à la base MySQL');
});
global.db = db;


// Middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))


// Route
const { getHomePage } = require('./routes/index')
const authRoute = require('./routes/auth')
const usersRoute = require('./routes/users')
const articlesRoute = require('./routes/articles')
const categoriesRoute = require('./routes/categories')


// API
app.use('/api/users', usersRoute)
app.use('/api/articles', articlesRoute)
app.use('/api/categories', categoriesRoute)
app.use('/api/auth', authRoute)
app.get('/', verifyToken, getHomePage)

app.listen(port, () => console.log(`Le serveur tourne sur le port : ${port}`))