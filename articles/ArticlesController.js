const express = require('express');
const router = express.Router();

// → Main route to articles
router.get('/articles', (req, res) => {
    res.render('articles')
});

// → Route to create an article
router.get('/admin/articles/new', (req, res) => {
    res.render('newArticle')
});

module.exports = router;