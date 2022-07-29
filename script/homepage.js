import { createFixedNewsElements } from "./loadFixedNews.js";
import { createNewsElements } from "./loadNews.js";
import { fixedNews } from "../javascript_files/fixed-news.js";
import { news } from "../javascript_files/news.js";
import { fillArray, setSeeMoreOnLoadingPage } from "./seeMore.js";
import { goBefore, goAfter } from "./modalButtonActions.js";


let fixedNewsContainer = document.getElementById("fixed-news-container");
let newsContainer = document.getElementById("news-container");
let btnModalBefore = document.getElementById("btn-before");
let btnModalAfter = document.getElementById("btn-after");


function main() {
    createFixedNewsElements(fixedNewsContainer, fixedNews);
    createNewsElements(newsContainer, news);
    let subTitleElements = document.querySelectorAll(".news-subtitle p")
    fillArray(subTitleElements);
    setSeeMoreOnLoadingPage(subTitleElements);

    btnModalBefore.addEventListener("click", ()=> {
        let modalId = document.getElementById("modal-id").innerText;
        goBefore(modalId); 
    });
    
    btnModalAfter.addEventListener("click", ()=> {
        let modalId = document.getElementById("modal-id").innerText;
        goAfter(modalId); 
    });
    
}

main();