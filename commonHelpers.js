import{a as v,i as S,S as E}from"./assets/vendor-a57f9cde.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(e){if(e.ep)return;e.ep=!0;const n=o(e);fetch(e.href,n)}})();const P="https://pixabay.com/api/",p="36804673-b7c86e83fae38f10ed9b56d3d",d={key:p,q:"",image_type:"photo",orientation:"horizontal",safesearch:!0};function R(t){return P+"?"+t}function M(t,r){return r.q=t,new URLSearchParams(r)}async function q(t,r={key:p}){try{const o=M(t,r);return await v.get(R(o))}catch(o){throw console.error("Error fetching data:",o.message),new Error("An error occurred while fetching data.")}}function y(t,r=20,o=1){return d.per_page=r,d.page=o,q(t,d)}const s={searchForm:document.querySelector(".search-form"),searchButton:document.querySelector('button[type="submit"]'),gallery:document.querySelector(".gallery"),guard:document.querySelector(".js-guard")},u=40;let c=0,l=1,f="",b;const A={root:null,rootMargin:"250px",threshold:1},h=new IntersectionObserver($,A);function I(){b=new E(".gallery a",{captionsData:"alt",captionDelay:250})}function $(t){t.forEach(r=>{r.isIntersecting&&H()})}function H(){l+=1,y(f,u,l).then(r=>{w(r.data),u*l>=c&&(h.unobserve(s.guard),m("We're sorry, but you've reached the end of search results."))}).catch(r=>g(r.message))}function O(t){return t.map(({webformatURL:r,largeImageURL:o,tags:a,likes:e,views:n,comments:i,downloads:L})=>`
      <div class="photo-card">
        <a href="${o}">
          <img class="image" src="${r}" alt="${a}" loading="lazy" />
        </a>
    <div class="info">
        <p class="info-item">
            <b>Likes</b> ${e}
        </p>
            <p class="info-item">
        <b>Views</b> ${n}
        </p>
        <p class="info-item">
            <b>Comments</b> ${i}
        </p>
        <p class="info-item">
            <b>Downloads</b> ${L}
        </p>
    </div>
</div>
      </div>
    `).join("")}function w(t){s.gallery.insertAdjacentHTML("beforeend",O(t.hits)),b.refresh(),window.scrollBy({top:0,behavior:"smooth"})}function m(t,r="green",o=3e3){S.show({message:t,messageColor:"white",backgroundColor:r,timeout:o,position:"topRight"})}function g(t){m(t,"tomato",3e3)}function D(){s.gallery.innerHTML="",c=0,l=1,f=""}function k(t){t.preventDefault();const o=new FormData(s.searchForm).get("searchQuery").trim().toLowerCase();if(!o){g("Hey! Enter something!");return}h.unobserve(s.guard),D(),f=o,y(f,u).then(e=>{if(e.data.hits.length===0)throw new Error("Sorry, there are no images matching your search query. Please try again.");c=e.data.totalHits,m(`Hooray! We found ${c} images.`),w(e.data),u*l<c&&h.observe(s.guard)}).catch(e=>g(e.message))}function x(){I(),s.searchButton.addEventListener("click",k)}x();
//# sourceMappingURL=commonHelpers.js.map
