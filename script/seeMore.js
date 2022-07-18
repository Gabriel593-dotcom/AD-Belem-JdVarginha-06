import {isMobile} from "./Utils.js";

let subTitleElementTexts = [];
let subTitleElements = "";
let homeIframe = parent.document.getElementById("homepage-iframe");

export function fillArray() {
    subTitleElements = document.querySelectorAll(".news-subtitle p");
    let iterable = 0;
    subTitleElements.forEach(element => {
        subTitleElementTexts[iterable] = element.innerText;
        iterable++;
    });
}

export function setSeeMoreOnLoadingPage() {
    let iterator = 0;
    subTitleElements.forEach(subTitle => {
        if ((isMobile() && subTitleElementTexts[iterator].length > 85) || subTitleElementTexts[iterator].length > 210) {
            subTitle.innerText = cutText(iterator);
            subTitle.append(addSeeMoreElement(iterator, subTitle));
        }
        iterator++;
    });
}

function cutText(index) {
    let text = subTitleElementTexts[index].substring(0, 210);
    if (isMobile()) {
        text = subTitleElementTexts[index].substring(0, 85);
    }
    return text;
}

function addSeeLessElement(index, element) {
    let seeLess = document.createElement("button");
    seeLess.innerText = "ver menos";
    seeLess.setAttribute("class", "news-subtitle-button");
    seeLess.addEventListener("click", () => {
        let elementExtendedHeight = element.scrollHeight;
        element.innerText = cutText(index);
        element.append(addSeeMoreElement(index, element));
        let height = element.scrollHeight;
        height += homeIframe.scrollHeight - elementExtendedHeight;
        homeIframe.height = height;
    });
    return seeLess;
}

function addSeeMoreElement(index, element) {
    let seeMore = document.createElement("button");
    seeMore.innerText = "...ver mais";
    seeMore.setAttribute("class", "news-subtitle-button");
    seeMore.addEventListener("click", () => {
        let elementReducedHeight = element.scrollHeight;
        element.innerText = subTitleElementTexts[index];
        element.append(addSeeLessElement(index, element));
        let height = element.scrollHeight - elementReducedHeight;
        height += homeIframe.scrollHeight;
        homeIframe.height = height;
    });
    return seeMore;
}
