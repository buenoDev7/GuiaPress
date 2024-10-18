const express = require('express')
const router = express.Router();

// → Route to create a new Category
router.get('/admin/categories/new', (req, res) => {
    res.render('../views/admin/categories/newCategory')
});

// → Exports the router
module.exports = router;