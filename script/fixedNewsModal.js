let fixedNews = document.querySelectorAll(".fixed-news");
let modalContainer = document.querySelector(".modal-container");
let modal = document.getElementById("modal");
let closeBtn = document.getElementById("close-modal");

function openModal() {
    flagModalWithActive();
    parent.window.scrollTo(0, 0);
    modalContainer.style.display = "flex";
}

function closeModal() {
    modalContainer.style.display = "none";
    removeActiveFromModal();
}

function mountModal() {
    //let modal = document.createElement("div");
}

function flagModalWithActive() {
    modalContainer.classList.add("active");
}

function removeActiveFromModal() {
    if (isActive()) {
        modalContainer.classList.remove("active");
    }
}

function isActive() {
    return modalContainer.getAttribute("class").toString().includes("active") ? true : false;
}

function main() {
    fixedNews.forEach(element => {
        element.addEventListener("click", () => {
            openModal();
        });
    });


    closeBtn.addEventListener("click", () => {
        closeModal();
    });

}

main();