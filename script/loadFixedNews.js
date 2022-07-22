import { openModal } from "./loadFixedNewsModal.js";

export function createFixedNewsElements(parentElement, fixedNews) {
    fixedNews.forEach(fixedNewsEl => {    
        let fixedNewsComponent = document.createElement("div");
        fixedNewsComponent.setAttribute("class", "fixed-news");
        openModalEvent(fixedNewsComponent, fixedNewsEl);
        parentElement.append(fixedNewsComponent);
    });
}

function openModalEvent(fixedNewsComponent, fixedNewsEl){
    fixedNewsComponent.addEventListener("click", () => {
        openModal(fixedNewsEl);
    });
}