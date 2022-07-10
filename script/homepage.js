import { createNewsElements } from "./loadNews.js";
import { news } from "../javascript_files/news.js";
import { fillArray } from "./seeMore.js";
import { setSeeMoreOnLoadingPage } from "./seeMore.js";
import { openModal } from "./fixedNewsModal.js";

let container = document.getElementById("container");


function main() {
    openModal();
    createNewsElements(container, news);
    fillArray();
    setSeeMoreOnLoadingPage();
}

main();