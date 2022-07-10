let fixedNews = document.querySelectorAll(".fixed-news");
let modalContainer = document.querySelector(".modal-container");
let modal = document.getElementById("modal");

export function openModal() {
    fixedNews.forEach(element => {
        element.addEventListener("click", () => {
            flagModalWithActive();
            let modalScrollYPosition = modal.getBoundingClientRect().top + modal.scrollHeight;
            parent.window.scrollTo(0, modalScrollYPosition);
            parent.document.documentElement.style.overflow = 'hidden';
        });
    });
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