import { createNewsElements } from "./loadNews.js";
import { news } from "../javascript_files/news.js";
import { fillArray } from "./seeMore.js";
import { setSeeMoreOnLoadingPage } from "./seeMore.js";

let container = document.getElementById("news-container");


function main() {
    createNewsElements(container, news);
    fillArray();
    setSeeMoreOnLoadingPage();
}

main();