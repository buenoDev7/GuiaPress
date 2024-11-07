const express = require('express')
const router = express.Router();
const Category = require('../categories/Categories')
const Article = require('./Article')
const slugify = require('slugify')

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

router.post('/articles/sendNewArticle', (req, res) => {
    const title = req.body.title
    const body = req.body.body
    const category = req.body.category

    Article.create({
        title: title,
        slug: slugify(title).toLowerCase().replace('.', '-'),
        body: body,
        category: category,
        idCategory: category
    }).then(() => {
        res.redirect('/admin/categories')
    })
})

// → Exports the articles router
module.exports = router; 