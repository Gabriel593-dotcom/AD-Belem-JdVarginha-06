let modalContainer = document.querySelector(".modal-container");

export function openModal(fixedNewsEl) {
    flagModalWithActive();
    parent.window.scrollTo(0, 0);
    modalContainer.style.display = "flex";
    mountModal(fixedNewsEl);
}


function mountModal(fixedNewsEl) {
    let modal = document.createElement("div");
    modal.setAttribute("id", "modal");
    
    let closeModal = document.createElement("div");
    closeModal.setAttribute("id", "close-modal");
    
    let closeModalButton = document.createElement("p");
    closeModalButton.innerText = "X";

    closeModalButton.addEventListener("click", () => {
        modalContainer.style.display = "none";
        removeActiveFromModal();
        modal.parentNode.removeChild(modal);
    });

    closeModal.append(closeModalButton);
    modal.append(closeModal);

    let title = document.createElement("h2");
    title.setAttribute("class", "modal-title");
    title.innerText = fixedNewsEl.title;

    let img = document.createElement("img");
    img.setAttribute("class", "modal-img");
    img.setAttribute("src", fixedNewsEl.imageUrl);

    let subTitle = document.createElement("p");
    subTitle.setAttribute("class", "modal-subtitle");
    subTitle.innerText = fixedNewsEl.subTitle;

    modal.append(title); 
    modal.append(img);
    modal.append(subTitle);

    modalContainer.append(modal);
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
