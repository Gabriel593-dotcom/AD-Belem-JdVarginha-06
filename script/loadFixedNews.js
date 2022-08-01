import { openModal } from "./loadFixedNewsModal.js";

let fixedNewsBackgroundColors = ["#34495e", "#2c3e50", "#2980b9", "#3498db"];

export function createFixedNewsElements(parentElement, fixedNews) {
    let iterator = 0;
    fixedNews.forEach(fixedNewsEl => {    
        let fixedNewsComponent = document.createElement("div");
        fixedNewsComponent.setAttribute("class", "fixed-news");
        fixedNewsComponent.setAttribute("style", "background-color: " + fixedNewsBackgroundColors[chooseColor()]);
        let fixedNewsComponentText = document.createElement("p");
        fixedNewsComponentText.setAttribute("class", "fixed-news-min-title");
        fixedNewsComponentText.innerText = fixedNewsEl.minTitle;
        fixedNewsComponent.append(fixedNewsComponentText);
        openModalEvent(iterator, fixedNewsComponent, fixedNewsEl);
        parentElement.append(fixedNewsComponent);
        iterator++;
    });
}

function openModalEvent(index, fixedNewsComponent, fixedNewsEl){
    fixedNewsComponent.addEventListener("click", () => {
        openModal(index, fixedNewsEl);
    });
}

function chooseColor() {
    return Math.floor(Math.random() * fixedNewsBackgroundColors.length);
}