'use strict'

const formEditCategory = document.querySelector('#formEditCategory');
const categoryName = document.querySelector("#categoryName");
const regCategoryName = /^[A-Za-zÀ-ÿ\s.]+$/;

formEditCategory.addEventListener('submit', (event) => {
    if (!regCategoryName.test(categoryName.value)) {
        event.preventDefault();
        alert("❌ This field can only contain letters (A-Z, a-z). Please enter a valid input.")
        categoryName.focus();
    } else {
        alert(`✅ Category updated to: '${categoryName.value}'! `)
        formEditCategory.submit();
    }
});
