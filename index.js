import{S as f,i}from"./assets/vendor-5ObWk2rO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const m="57531008-2334facde6406989be55fb975",p="https://pixabay.com/api/";function h(n){const o=new URLSearchParams({key:m,q:n,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${p}?${o}`).then(e=>{if(!e.ok)throw new Error("Request failed");return e.json()}).then(e=>e.hits)}const u=document.querySelector(".gallery");function y(n){const o=n.map(e=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${e.largeImageURL}">
            <img
              class="gallery-image"
              src="${e.webformatURL}"
              alt="${e.tags}"
            />
          </a>

          <div class="image-info">
            <p><b>Likes</b>${e.likes}</p>
            <p><b>Views</b>${e.views}</p>
            <p><b>Comments</b>${e.comments}</p>
            <p><b>Downloads</b>${e.downloads}</p>
          </div>
        </li>
      `).join("");u.insertAdjacentHTML("beforeend",o)}function g(){u.innerHTML=""}const a=document.querySelector(".search-form"),b=document.querySelector('input[name="search-text"]'),d=document.querySelector(".loader"),l=a.querySelector("button"),L=new f(".gallery a",{captionsData:"alt",captionDelay:250});a.addEventListener("submit",n=>{n.preventDefault();const o=b.value.trim();if(o===""){i.warning({title:"Warning",message:"Please enter a search term.",position:"topRight"});return}g(),w(),l.disabled=!0,h(o).then(e=>{if(e.length===0){i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}y(e),L.refresh()}).catch(()=>{i.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}).finally(()=>{S(),l.disabled=!1}),a.reset()});function w(){d.classList.remove("is-hidden")}function S(){d.classList.add("is-hidden")}
//# sourceMappingURL=index.js.map
