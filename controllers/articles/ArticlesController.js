const express = require('express')
const router = express.Router();

// → Main route to articles page
router.get('/articles', (req, res) => {
    res.render('articles')
});

// → Route to create a new article
router.get('/admin/articles/newArticle', (req, res) => {
    res.render('../views/admin/articles/newArticle')
});

// → Exports the articles router
module.exports = router; 