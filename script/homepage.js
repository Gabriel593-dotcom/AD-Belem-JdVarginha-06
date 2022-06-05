function addSeeMore() {
    let subTitles = document.querySelectorAll(".news-subtitle p");
    for (let subTitle of subTitles) {
        let subTitleLenght = subTitle.innerHTML.length;
        if (isMobile()) {
            if (subTitleLenght > 90) {
                subTitle.innerHTML = subTitle.innerHTML.toString().substring(0, 85);
            }
        } else if (subTitleLenght > 210) {
            subTitle.innerHTML = subTitle.innerHTML.toString().substring(0, 209);
        }
    }
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
    addSeeMore();
}

main();