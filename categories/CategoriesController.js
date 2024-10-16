const express = require('express')
const router = express.Router();

// → Main route to Categories page
router.get('/categories', (req, res) => {
    res.render('categories')
});

// → Route to create a new Category
router.get('/categories/admin/new', (req, res) => {
    res.render('newCategory')
});

// → Exports the router
module.exports = router;