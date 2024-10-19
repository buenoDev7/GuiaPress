const express = require('express')
const router = express.Router();
const Category = require('./Categories');
const slugify = require('slugify');

// → Route to create a new Category
router.get('/admin/categories/new', (req, res) => {
    res.render('../views/admin/categories/newCategory')
});

router.post('/sendNewCategory', (req, res) => {
    const categoryName = req.body.categoryName;
    if (categoryName != undefined) {
        Category.create({
            categoryName: categoryName,
            slug: slugify(categoryName).toLowerCase()
        }).then(() => {
            console.log(`\n✅ Category '${categoryName}' registered sucessfully!`)
            res.redirect('/admin/categories')
        }).catch((error) => {
            console.log(`\n❌ Failed to register new Category: ${error}`)
        })
    } else {
        alert("You must to insert a valid category name!")
    }
});

router.get('/admin/categories', (req, res) => {
    Category.findAll().then(categories => {
        res.render("../views/admin/categories/categoriesList", {
            categories: categories
        })
    })
})

// → Exports the router
module.exports = router;