document.addEventListener("DOMContentLoaded", function() {
    const resetButton = document.querySelector(".button.reset");
    const resultSection = document.getElementById("result");
    const resultArticles = document.querySelectorAll(".result-article");
    const generalInformations = document.querySelectorAll(".general-information");
    const footer = document.getElementById("footer");

    resetButton.addEventListener("click", function() {
        resultSection.style.display = "none";
        footer.style.display = "none";
        resultArticles.forEach(article => article.style.display = "none");
        generalInformations.forEach(info => info.style.display = "none");
    });
});
