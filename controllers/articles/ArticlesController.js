const express = require('express')
const router = express.Router();
const Category = require('../categories/Categories')

// → Main route to articles page
router.get('/articles', (req, res) => {
    res.render('articles')
});

// → Route to create a new article
router.get('/admin/articles/newArticle', (req, res) => {
   Category.findAll().then(categories => {
    res.render('../views/admin/articles/newArticle', {
        categories: categories
    })
   })
});

// → Exports the articles router
module.exports = router; 