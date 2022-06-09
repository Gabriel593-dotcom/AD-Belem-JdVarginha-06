let subTitleElementTexts = [];
let subTitleElements = document.querySelectorAll(".news-subtitle p");
let homeIframe = parent.document.getElementById("homepage-iframe");

function fillArray() {
    let iterable = 0;
    subTitleElements.forEach(element => {
        subTitleElementTexts[iterable] = element.innerText;
        iterable++;
    });
}

function setSeeMoreOnLoadingPage() {
    let iterator = 0;
    subTitleElements.forEach(subTitle => {
        subTitle.innerText = cutText(iterator);
        subTitle.append(addSeeMoreElement(iterator, subTitle));
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

function isMobile() {
    let result = true;
    let displayWidth = window.screen.width;
    let displayHeight = window.screen.height;

    if (!(displayHeight < 900 && displayWidth < 600)) {
        result = false;
    }

    return result;
}

function main() {
    fillArray();
    setSeeMoreOnLoadingPage();
}

main();