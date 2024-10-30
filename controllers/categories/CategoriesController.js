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
            slug: slugify(categoryName).toLowerCase().replace(".", "-")
        }).then(() => {
            console.log(`\n✅ Category '${categoryName}' registered sucessfully!\n`)
            res.redirect('/admin/categories')
        }).catch((error) => {
            console.log(`\n❌ Failed to register new Category: ${error}\n`)
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

router.post('/categories/delete', (req, res) => {
    const idCategory = req.body.idCategory;
    const categoryName = req.body.categoryName;

    if (idCategory != undefined || !isNaN(idCategory)) {
        Category.destroy({
            where: {
                id: idCategory
            }
        }).then(() => {
            console.log(`\n✅ Category '${categoryName}' successfully deleted!`)
            res.redirect('/admin/categories')
        }).catch((error) => {
            console.log(`\n❌ Failed to delete category: ${error}`)
            res.redirect('/admin/categories')
        })
    }
});

router.get('/admin/categories/edit/:id', (req, res) => {
    const id = req.params.id;

    if (isNaN(id)) {
        res.redirect('/admin/categories')
    }

    Category.findByPk(id).then(category => {
        if (category != undefined) {
            res.render('../views/admin/categories/editCategory', {
                category: category
            })
        } else {
            res.redirect('/admin/categories')
        }
    }).catch(error => {
        console.log(error)
    })
});



// → Exports the router
module.exports = router;