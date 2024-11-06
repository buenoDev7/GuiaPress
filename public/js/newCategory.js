'use strict'

const formNewCategory = document.querySelector('#formNewCategory');
const categoryName = document.querySelector("#categoryName");
const regCategoryName = /^[A-Za-zÀ-ÿ\s.]+$/;

formNewCategory.addEventListener('submit', (event) => {
    if (!regCategoryName.test(categoryName.value)) {
        event.preventDefault();
        alert("❌ This field can only contain letters (A-Z, a-z). Please enter a valid input.")
        categoryName.style.border = '1px solid red'
        categoryName.focus();
        setTimeout(() => {
            categoryName.style.border = ""
        }, 2000)
    } else {
        alert(`✅ New category '${categoryName.value}' registered! `)
        formNewCategory.submit();
    }
});
