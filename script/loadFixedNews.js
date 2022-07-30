import { openModal } from "./loadFixedNewsModal.js";

let fixedNewsBackgroundColors = ["#1abc9c", "#34495e", "#2c3e50", "#c0392b", "#e74c3c", "#2980b9", "#3498db"];

export function createFixedNewsElements(parentElement, fixedNews) {
    chooseColor();
    fixedNews.forEach(fixedNewsEl => {    
        let fixedNewsComponent = document.createElement("div");
        fixedNewsComponent.setAttribute("class", "fixed-news");
        fixedNewsComponent.setAttribute("style", "background-color: " + fixedNewsBackgroundColors[chooseColor()]);
        let fixedNewsComponentText = document.createElement("p");
        fixedNewsComponentText.setAttribute("class", "fixed-news-min-title");
        fixedNewsComponentText.innerText = fixedNewsEl.minTitle;
        fixedNewsComponent.append(fixedNewsComponentText);
        openModalEvent(fixedNewsComponent, fixedNewsEl);
        parentElement.append(fixedNewsComponent);
    });
}

function openModalEvent(fixedNewsComponent, fixedNewsEl){
    fixedNewsComponent.addEventListener("click", () => {
        openModal(fixedNewsEl);
    });
}

function chooseColor() {
    return Math.floor(Math.random() * fixedNewsBackgroundColors.length);
}