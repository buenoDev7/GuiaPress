'use strict'

const formNewCategory = document.querySelector('#formNewCategory');
const categoryName = document.querySelector("#categoryName");
const regCategoryName = /^[a-zA-Z]+$/

formNewCategory.addEventListener('submit', (event) => {
    if (!regCategoryName.test(categoryName.value)) {
        event.preventDefault();
        alert("❌ This field can only contain letters (A-Z, a-z). Please enter a valid input.")
        categoryName.focus();
    } else {
        alert(`✅ New category '${categoryName.value}' registered! `)
        formNewCategory.submit();
    }
});
