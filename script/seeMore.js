import { isMobile } from "./Utils.js";
import { news } from "../javascript_files/news.js";
import { fixedNews } from "../javascript_files/fixed-news.js";

let homeIframe = parent.document.getElementById("homepage-iframe");

export function setSeeMore(index, type, element) {
    switch (type) {
        case "fixedNews":
            if (verifySetSeeMore(index, fixedNews)) {
                element.innerText = cutText(index, fixedNews);
                element.append(addSeeMoreElement(index, type, element, fixedNews));
            }
            break;
        case "news":
            if (verifySetSeeMore(index, news)) {
                element.innerText = cutText(index, news);
                element.append(addSeeMoreElement(index, type, element, news));
            }
            break;
    }
}

function verifySetSeeMore(index, listText) {
    return (isMobile() && listText[index].subTitle.length > 85 || listText[index].subTitle.length > 210);
}

function cutText(index, listText) {
    let text = listText[index].subTitle.substring(0, 210);
    if (isMobile()) {
        text = listText[index].subTitle.substring(0, 85);
    }
    return text;
}

function addSeeLessElement(index, type, element, listText) {
    let seeLess = document.createElement("button");
    seeLess.innerText = "ver menos";
    seeLess.setAttribute("class", "news-subtitle-button");
    seeLess.addEventListener("click", () => {
        let elementExtendedHeight = element.scrollHeight;
        element.innerText = cutText(index, listText);
        element.append(addSeeMoreElement(index, type, element, listText));
        let height = element.scrollHeight;
        height += homeIframe.scrollHeight - elementExtendedHeight;
        if (type == "news") {
            homeIframe.height = height;
        }
    });
    return seeLess;
}

function addSeeMoreElement(index, type, element, listText) {
    let seeMore = document.createElement("button");
    seeMore.innerText = "...ver mais";
    seeMore.setAttribute("class", "news-subtitle-button");
    seeMore.addEventListener("click", () => {
        let elementReducedHeight = element.scrollHeight;
        element.innerText = listText[index].subTitle;
        element.append(addSeeLessElement(index, type, element, listText));
        let height = element.scrollHeight - elementReducedHeight;
        height += homeIframe.scrollHeight;
        if (type == "news") {
            homeIframe.height = height;
        }
    });
    return seeMore;
}
