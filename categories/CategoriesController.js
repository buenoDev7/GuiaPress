const express = require('express');
const router = express.Router();

// → Main route to categories
router.get('/categories', (req, res) => {
    res.render('categories')
});

// → Route to create a new category
router.get('/admin/categories/new', (req, res) => {
    res.render('newCategory')
});

module.exports = router;