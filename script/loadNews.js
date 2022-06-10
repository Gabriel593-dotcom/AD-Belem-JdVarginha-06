function main() {}

export function createNewsElements(parentElement, news) {
    news.forEach(newsEl => {
        let newsElement = document.createElement("div");
        newsElement.setAttribute("class", "news");
        let newsTitle = document.createElement("div");
        newsTitle.setAttribute("class", "news-title");
        let h2 = document.createElement("h2");
        h2.innerText = newsEl.title;
        newsTitle.append(h2);
        let newsImage = document.createElement("div");
        newsImage.setAttribute("class", "news-image");
        let img = document.createElement("img");
        img.setAttribute("src", newsEl.imgUrl);
        newsImage.append(img);
        let newsSubTitle = document.createElement("div");
        newsSubTitle.setAttribute("class", "news-subtitle");
        let p = document.createElement("p");
        p.innerText = newsEl.subTitle;
        newsSubTitle.append(p);
        let hr = document.createElement("hr");

        newsElement.append(newsTitle);
        newsElement.append(hr);
        newsElement.append(newsImage);
        newsElement.append(newsSubTitle);

        parentElement.append(newsElement);
    });
}

main();