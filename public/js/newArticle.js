'use strict'

const formNewArticle = document.querySelector('#formNewArticle');
const articleTitle = document.querySelector("#articleTitle");
const regArticleTitle = /^[A-Za-zÀ-ÿ\s.]+$/;

formNewArticle.addEventListener('submit', (event) => {
    if (!regArticleTitle.test(articleTitle.value)) {
        event.preventDefault();
        alert("❌ This field can only contain letters (A-Z, a-z). Please enter a valid input.")
        articleTitle.style.border = "1px solid red"
        articleTitle.focus();
        setTimeout(() => {
            articleTitle.style.border = ""
        }, 2000)
    } else {
        alert(`✅ New article '${articleTitle.value}' registered! `)
        formNewArticle.submit();
    }
});
