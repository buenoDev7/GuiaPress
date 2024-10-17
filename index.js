// Express 
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

// Database
const connection = require('./database/connection');
connection.authenticate()
    .then(() => {
        console.log("\n🚀 Database sucessfully connected")
    }).catch((error) => {
        console.log(`\n❌ The database connection failed: ${error}`)
    });

// → Routers
const ArticlesController = require('./controllers/articles/ArticlesController')
const CategoriesController = require('./controllers/categories/CategoriesController')

// → Route to articles page
app.use('/', ArticlesController)

// → Route to Categories page
app.use('/', CategoriesController)

// bodyParser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

// View Engine
app.set('view engine', 'ejs');
app.use(express.static('public'));


// → Homepage
app.get('/', (req, res) => {
    res.render('homepage');
})

app.listen(PORT, ()=> {
    console.log(`\n🚀 Server running on port ${PORT}`)
});