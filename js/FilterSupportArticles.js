(function () {
    var truesearch = document.querySelector('.true-search');
    truesearch.onkeyup = function () {
        var value = truesearch.value.trim().toLowerCase();
        var articles = document.querySelectorAll('.true-article');
        articles.forEach(article => {
            if(article.innerText.toLowerCase().indexOf(value) > -1) {
                article.style.display = '';
            } else {
                article.style.display = 'none';
            }
        });
    };
})()
