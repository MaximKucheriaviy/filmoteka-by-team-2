function t(t,e,n,s){Object.defineProperty(t,e,{get:n,set:s,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},s={},a=e.parcelRequired7c6;null==a&&((a=function(t){if(t in n)return n[t].exports;if(t in s){var e=s[t];delete s[t];var a={id:t,exports:{}};return n[t]=a,e.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){s[t]=e},e.parcelRequired7c6=a),a.register("hbpud",(function(e,n){t(e.exports,"default",(function(){return l}));var s=a("dRsZD"),i=a("agGqY"),o=a("c5szI");const r=new Event("modalButtonClick");function l(){const t={galleryEl:document.querySelector("[data-gallery]"),openModal:document.querySelector(".gallery-button"),closeModal:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};t.galleryEl.addEventListener("click",(function(e){const n=e.target.closest("[data-click]");if(!n)return;t.modal.style.display="block";!function({base_url_post:t="https://image.tmdb.org/t/p/w500/",genre_ids:e=[],poster_path:n,vote_count:s,vote_average:a,original_title:r,name:l,overview:g,random_text:h="lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus rem repudiandae quasi fugit ipsam tenetur enim, beatae, sequi distinctio cupiditate rerum. Tempora error accusamus eligendi assumenda nostrum asperiores ullam accusantium.",popularity:p,id:b}){const y=document.querySelector(".film-container"),_=document.querySelector("#addWatchedButton"),x=document.querySelector("#addWatchedButton"),v=document.querySelector("#removeWatchedButton"),k=document.querySelector("#removeQueueedButton");_&&_.remove("click",d);x&&x.remove("click",c);v&&_.remove("click",u);k&&x.remove("click",m);const S=`\n  <div class="image-film-container">\n      <img class = "film-image" src=${(0,o.CaptchaPosterPath)(t,n)} alt="POSTER">\n  </div>\n  <div class="film-about-container">\n      <h2 class="film-title">${r||l}</h2>\n\n      <table class="film-about-table">\n        <tr class="film-about-textrow">\n          <td>vote / votes</td>\n\n          <td class="textrow-id"><span class="inbox-id">${a}</span><span class= "inbox-slash"> /</span><span class = "inbox-span">${s}</span></td>\n\n        </tr>\n        <tr class="film-about-textrow">\n          <td>popularity</td>\n          <td class="textrow-id">${p.toFixed(2)}</td>\n        </tr>\n        <tr class="film-about-textrow">\n          <td>original title</td>\n          <td class="textrow-id" id="">${r||l}</td></span>\n        </tr>\n        <tr class="film-about-textrow">\n          <td>genre</td>\n          <td class="textrow-genres">${e.map((t=>(0,i.default)(t))).join(" ")}</td>\n        </tr>\n      </table>\n      <h3 class="title-about">About</h3>\n      <div class="film-about-text-container"><p id="" class="film-about-text">${g||h}</p> </div>\n      <ul class="film-btn-list">\n\n          <li class="film-btn-item addWatchedButton">\n              <button id="addWatchedButton" data-id = ${b} class="film-add-button">Add to\n              watched</button>\n          </li>\n          <li class="film-btn-item removeWatchedButton">\n          <button id="removeWatchedButton" data-id = ${b} class="film-add-button">Remove from\n          watched</button>\n          </li>\n          <li class="film-btn-item addQueueButton">\n              <button id="addQueueButton" data-id = ${b} class="film-add-button">Add to\n\n              queue</button>\n          </li>\n          <li class="film-btn-item removeQueueButton">\n          <button id="removeQueueButton" data-id = ${b} class="film-add-button">Remove from\n\n          queue</button>\n      </li>\n      </ul>`;y.innerHTML=S,document.querySelector("#addWatchedButton").addEventListener("click",d),document.querySelector("#addQueueButton").addEventListener("click",c),document.querySelector("#removeWatchedButton").addEventListener("click",u),document.querySelector("#removeQueueButton").addEventListener("click",m),f(b)}((s=Number.parseInt(n.dataset.id),JSON.parse(localStorage.getItem("reneredCards")).find((t=>t.id===s))));var s})),t.closeModal.addEventListener("click",(function(){t.modal.style.display="none"})),window.addEventListener("click",(function(e){e.target===t.modal&&(t.modal.style.display="none")})),document.addEventListener("keydown",(function(e){"Escape"===e.key&&(t.modal.style.display="none")}))}function c(t){const e=Number.parseInt(t.target.dataset.id);(0,s.setFilmToQueue)(e),f(e),window.dispatchEvent(r)}function d(t){const e=Number.parseInt(t.target.dataset.id);(0,s.setFilmToWeched)(e),f(e),window.dispatchEvent(r)}function u(t){const e=Number.parseInt(t.target.dataset.id);(0,s.removeFilmToWeched)(e),f(e),window.dispatchEvent(r)}function m(t){const e=Number.parseInt(t.target.dataset.id);(0,s.removeFilmToQueue)(e),f(e),window.dispatchEvent(r)}function f(t){console.log(t);const e=document.querySelector(".addWatchedButton"),n=document.querySelector(".removeWatchedButton"),s=document.querySelector(".addQueueButton"),a=document.querySelector(".removeQueueButton"),i=JSON.parse(localStorage.getItem("wachedFilms")),o=JSON.parse(localStorage.getItem("queueFilms"));i&&0!==i.length&&i.some((e=>e.id===t))?(e.style.display="none",n.style.display="block"):(n.style.display="none",e.style.display="block"),o&&0!==o.length&&o.some((e=>e.id===t))?(s.style.display="none",a.style.display="block"):(a.style.display="none",s.style.display="block")}})),a.register("dRsZD",(function(e,n){let s;function a(t){let e=localStorage.getItem("wachedFilms");if(e=e?JSON.parse(e):[],e.some((e=>e.id===t)))return;const n=l(t);e.push(n||s),e=JSON.stringify(e),localStorage.setItem("wachedFilms",e)}function i(t){let e=localStorage.getItem("queueFilms");if(e=e?JSON.parse(e):[],e.some((e=>e.id===t)))return;const n=l(t);e.push(n||s),e=JSON.stringify(e),localStorage.setItem("queueFilms",e)}function o(t){let e=JSON.parse(localStorage.getItem("wachedFilms"));e.every((e=>e.id!==t))||(s=e.splice(e.findIndex((e=>e.id===t)),1)[0],e=JSON.stringify(e),localStorage.setItem("wachedFilms",e))}function r(t){let e=JSON.parse(localStorage.getItem("queueFilms"));e.every((e=>e.id!==t))||(s=e.splice(e.findIndex((e=>e.id===t)),1)[0],e=JSON.stringify(e),localStorage.setItem("queueFilms",e))}function l(t){return JSON.parse(localStorage.getItem("reneredCards")).find((e=>e.id===t))}t(e.exports,"setFilmToWeched",(function(){return a})),t(e.exports,"setFilmToQueue",(function(){return i})),t(e.exports,"removeFilmToWeched",(function(){return o})),t(e.exports,"removeFilmToQueue",(function(){return r}))})),a.register("agGqY",(function(e,n){function s(t){let e=null;switch(t){case 10759:e="Action & Adventure";break;case 16:case 16:e="Animation";break;case 35:e="Comedy";break;case 80:e="Crime";break;case 99:e="Documentary";break;case 18:e="Drama";break;case 10751:e="Family";break;case 10762:e="Kids";break;case 9648:e="Mystery";break;case 10763:case 10763:e="News";break;case 10764:e="Reality";break;case 10765:e="Sci-Fi & Fantasy";break;case 10766:e="Soap";break;case 10767:e="Talk";break;case 28:e="Action";break;case 10768:e="War & Politics";break;case 37:e="Western";break;case 12:e="Adventure";break;case 14:e="Fantasy";break;case 36:e="History";break;case 27:e="Horror";break;case 10402:e="Music";break;case 10749:e="Romance";break;case 878:e="Science Fiction";break;case 10770:e="TV Movie";break;case 53:e="Thriller";break;case 10752:e="War";break;default:e="Other"}return e}t(e.exports,"default",(function(){return s}))})),a.register("c5szI",(function(e,n){t(e.exports,"createMarcupGallery",(function(){return i})),t(e.exports,"createMarcupGalleryAlt",(function(){return o})),t(e.exports,"CaptchaPosterPath",(function(){return l}));var s=a("agGqY");const i=(t,e)=>(localStorage.setItem("reneredCards",JSON.stringify(t)),e?t.reduce(((t,{poster_path:e,title:n,genre_ids:s,id:a,release_date:i,vote_average:o,name:l,first_air_date:c})=>t+`<li class="gallery__item">\n      <button type="button" data-id="${a}" data-click class ="gallery__button">\n          <img src="https://image.tmdb.org/t/p/w500/${e}"  alt="${n||l}" class ="gallery__img"  loading="lazy">\n           <h3 class =" gallery__title">${n||l}</h3>\n             <p class="gallery__text">${r(s)} | ${(i||c||"2010").slice(0,4)}\n        </p>\n        <span class = "gallery__text-range">${o}</span> \n             </button>\n        </li>`),""):t.reduce(((t,{poster_path:e,title:n,genre_ids:s,id:a,release_date:i,name:o,first_air_date:l})=>t+`  <li class="gallery__item">\n      <button type="button" data-id="${a}" data-click class ="gallery__button">\n          <img src="https://image.tmdb.org/t/p/w500/${e}"  alt="${n||o}" class ="gallery__img"  loading="lazy">\n           <h3 class ="gallery__title">${n||o}</h3>\n             <p class="gallery__text">${r(s)} | ${(i||l||"2010").slice(0,4)}\n      </p>\n             </button>\n        </li>`),"")),o=(t,e)=>(localStorage.setItem("reneredCards",JSON.stringify(t)),t.map((({base_url_post:t="https://image.tmdb.org/t/p/w500/",poster_path:n,title:s,genre_ids:a,id:i,name:o,release_date:c,first_air_date:d,vote_average:u})=>{const m=document.createElement("li"),f=document.createElement("button"),g=document.createElement("img"),h=document.createElement("h3"),p=document.createElement("p");if(g.src=`${l(t,n)}`,g.alt=`${s||o}`,p.textContent=`${r(a)} | ${(c||d||"2010").slice(0,4)}`,h.textContent=`${s||o}`,g.setAttribute("loading","lazy"),f.dataset.id=`${i}`,f.dataset.click="",m.classList.add("gallery__item"),f.classList.add("gallery__button"),g.classList.add("gallery__img"),h.classList.add("gallery__title"),p.classList.add("gallery__text"),f.append(g),f.append(h),f.append(p),e){const t=document.createElement("span");t.textContent=`${u.toFixed(1)}`,t.classList.add("gallery__text-range"),p.append(t)}return m.append(f),m})));function r(t=[]){if(!t.length)return"Other";const e=[];return t.forEach(((t,n)=>{n<=1?e.push((0,s.default)(t)):2===n&&e.push((0,s.default)("Other"))})),e}function l(t,e){return e&&"/mNSqObjKszcxr55buQafQF9ARiC.jpg"!==e?t+e:"https://www.themoviedb.org/assets/2/apple-touch-icon-cfba7699efe7a742de25c28e08c38525f19381d31087c69e89d6bcb8e3c0ddfa.png"}})),a.register("hdEMf",(function(e,n){t(e.exports,"default",(function(){return s}));var s=class{setTotalItems(t){this.countOfPages=Math.ceil(t/20),console.log(),this.renderButtons()}setTotalPages(t){this.countOfPages=t,this.renderButtons()}setPage(t){this.page=t,this.renderButtons()}renderButtons(){if(this.hideSystem(),this.countOfPages>1){const t=Object.values(this.refs);window.innerWidth>=1280?this.renderOnDesctop(t):this.renderOnMobile(t),t.find((t=>Number.parseInt(t.textContent)===this.page)).classList.add("pagination-button__checked")}}hideSystem(){Object.values(this.refs).forEach((t=>{t.style.display="none",t.classList.contains("pagination-button__clicable")||t.classList.add("pagination-button__clicable"),t.classList.contains("pagination-button__checked")&&t.classList.remove("pagination-button__checked")}))}clickHendler(t){const e=new Event("pagination-system-clicked"),n=t.target;n.classList.contains("pagination-button__clicable")&&!n.classList.contains("pagination-button__arrow")?this.setPage(Number.parseInt(n.textContent)):n.classList.contains("pagination-button__clicable")&&n.classList.contains("pagination-button__arrow")&&(n.classList.contains("pagination-button__arrow__reversed")?1!==this.page&&this.setPage(this.page-1):this.page!==this.countOfPages&&this.setPage(this.page+1)),n.classList.contains("pagination-button__clicable")&&(this.mainList.dispatchEvent(e),window.scroll(0,0))}renderOnDesctop(t){if(this.refs.arrowLeft.style.display="inline-block",this.refs.arrowRight.style.display="inline-block",this.countOfPages<10)for(let e=1;e<=this.countOfPages;e++)t[e].textContent=e,t[e].style.display="inline-block";else if(this.page<7){for(let e=1;e<=t.length-2;e++)t[e].style.display="inline-block";this.refs.btn1.textContent="1",this.refs.btn2.textContent="2",this.refs.btn3.textContent="3",this.refs.btn4.textContent="4",this.refs.btn5.textContent="5",this.refs.btn6.textContent="6",this.refs.btn7.textContent="7",this.refs.btn8.textContent="...",this.refs.btn8.classList.remove("pagination-button__clicable"),this.refs.btn9.textContent=this.countOfPages}else if(this.page>=7&&this.page<=this.countOfPages-6){for(let e=1;e<=t.length-1;e++)t[e].style.display="inline-block";this.refs.btn1.textContent="1",this.refs.btn2.textContent="...",this.refs.btn2.classList.remove("pagination-button__clicable"),this.refs.btn3.textContent=this.page-2,this.refs.btn4.textContent=this.page-1,this.refs.btn5.textContent=this.page,this.refs.btn6.textContent=this.page+1,this.refs.btn7.textContent=this.page+2,this.refs.btn8.textContent="...",this.refs.btn8.classList.remove("pagination-button__clicable"),this.refs.btn9.textContent=this.countOfPages}else if(this.page>this.countOfPages-6){for(let e=1;e<=t.length-1;e++)t[e].style.display="inline-block";this.refs.btn1.textContent="1",this.refs.btn2.textContent="...",this.refs.btn2.classList.remove("pagination-button__clicable"),this.refs.btn3.textContent=this.countOfPages-6,this.refs.btn4.textContent=this.countOfPages-5,this.refs.btn5.textContent=this.countOfPages-4,this.refs.btn6.textContent=this.countOfPages-3,this.refs.btn7.textContent=this.countOfPages-2,this.refs.btn8.textContent=this.countOfPages-1,this.refs.btn9.textContent=this.countOfPages}}renderOnMobile(t){if(this.refs.arrowLeft.style.display="inline-block",this.refs.arrowRight.style.display="inline-block",this.countOfPages<5)for(let e=1;e<=this.countOfPages-1;e++)t[e].textContent=e,t[e].style.display="inline-block";else if(this.page<5){for(let e=1;e<=5;e++)t[e].style.display="inline-block";this.refs.btn1.textContent="1",this.refs.btn2.textContent="2",this.refs.btn3.textContent="3",this.refs.btn4.textContent="4",this.refs.btn5.textContent="5"}else if(this.page>=5&&this.page<=this.countOfPages-4){for(let e=1;e<=5;e++)t[e].style.display="inline-block";this.refs.btn1.textContent=this.page-2,this.refs.btn2.textContent=this.page-1,this.refs.btn3.textContent=this.page,this.refs.btn4.textContent=this.page+1,this.refs.btn5.textContent=this.page+2}else if(this.page>this.countOfPages-4){for(let e=1;e<=5;e++)t[e].style.display="inline-block";this.refs.btn1.textContent=this.countOfPages-4,this.refs.btn2.textContent=this.countOfPages-3,this.refs.btn3.textContent=this.countOfPages-2,this.refs.btn4.textContent=this.countOfPages-1,this.refs.btn5.textContent=this.countOfPages}}constructor(){this.page=1,this.countOfPages=0,this.refs={arrowLeft:document.querySelector('[data-pag-system="arow-left"]'),btn1:document.querySelector('[data-pag-system="1"]'),btn2:document.querySelector('[data-pag-system="2"]'),btn3:document.querySelector('[data-pag-system="3"]'),btn4:document.querySelector('[data-pag-system="4"]'),btn5:document.querySelector('[data-pag-system="5"]'),btn6:document.querySelector('[data-pag-system="6"]'),btn7:document.querySelector('[data-pag-system="7"]'),btn8:document.querySelector('[data-pag-system="8"]'),btn9:document.querySelector('[data-pag-system="9"]'),arrowRight:document.querySelector('[data-pag-system="arow-right"]')},this.mainList=document.querySelector("[data-pagination-list]"),this.mainList.addEventListener("click",this.clickHendler.bind(this)),this.renderButtons()}}}));
//# sourceMappingURL=index.d31e1a52.js.map
