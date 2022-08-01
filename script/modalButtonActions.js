import { openModal } from "./loadFixedNewsModal.js";
import { fixedNews } from "../javascript_files/fixed-news.js";


export function goBefore(id) { 
    let modal = document.getElementById("modal");
    if(fixedNews[id-1].id - 1 > 0) {;
        openModal(fixedNews[id-2].id-1, fixedNews[id-2]);
    }else {
        openModal(fixedNews[id-1].id-1, fixedNews[id-1]);
    }

    killModal(modal);
}

export function goAfter(id) {
    let modal = document.getElementById("modal");
    if(!(fixedNews[id-1].id + 1 > fixedNews.length)) {
        openModal(fixedNews[id].id-1, fixedNews[id]);
    }else {
        openModal(fixedNews[id-1].id-1, fixedNews[id-1]);
    }

    killModal(modal);
}

function killModal(modal){
    if(modal != null || modal != 'undefined') {
        modal.parentNode.removeChild(modal)
    }
}