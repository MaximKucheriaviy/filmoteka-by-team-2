import {checkLSQueue, checkLSWached, getPageItems} from "./js/generateObjectsFormLS"
import PaginationSystem from "./js/paginationSyste"
import { createMarcupGallery, createMarcupGalleryAlt} from "./js/createMarcupGallery"
import infoFilm from './js/film-info-modal';

infoFilm();

let pageStatus = "wached";
const paginationSystem = new PaginationSystem();
const refs = {
    wachedBtn: document.querySelector('.btn-watched'),
    queueBtn: document.querySelector('.btn-queue'),
    cardList: document.querySelector('[data-gallery]')
}

refs.wachedBtn.addEventListener('click', wachedOnClick);
refs.queueBtn.addEventListener('click', queueOnClick);

renderPage();

function renderPage(paginationRework = true, page = 1){
    let perPage
    if(window.innerWidth >= 1280){
        perPage = 9
    }
    else if(window.innerWidth >= 768){
        perPage = 8
    }
    else if(window.innerWidth >= 0){
        perPage = 4
    }
    let wochedObj
    if(pageStatus === "wached"){
        wochedObj = checkLSWached();
    }
    else if(pageStatus === "queue"){
        wochedObj = checkLSQueue();
    }
    if(!wochedObj.data){
        console.log("woched data missing");
        return;
    }
    refs.cardList.innerHTML = "";
    refs.cardList.append(...createMarcupGalleryAlt(getPageItems(paginationSystem.page, perPage, wochedObj.data), true))
    if(paginationRework){
        if(window.innerWidth >= 1280){
            console.log(wochedObj.totalPagesForDesctop);
            paginationSystem.setTotalPages(wochedObj.totalPagesForDesctop)
        }
        else if(window.innerWidth >= 768){
            paginationSystem.setTotalPages(wochedObj.totalPagesForTablet)
        }
        else if(window.innerWidth >= 0){
            paginationSystem.setTotalPages(wochedObj.totalPagesForMobile)
        }
        paginationSystem.setPage(page);
    }
}

function wachedOnClick(){
    pageStatus = "wached";
    renderPage();
}

function queueOnClick(){
    pageStatus = "queue";
    renderPage();
}