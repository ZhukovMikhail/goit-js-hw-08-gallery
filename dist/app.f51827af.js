parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"vZyd":[function(require,module,exports) {
var e=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",description:"Container Haulage Freight"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",description:"Aerial Beach View"},{preview:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",original:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",description:"Flower Blooms"},{preview:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",original:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",description:"Alpine Mountains"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",description:"Mountain Lake Sailing"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",description:"Alpine Spring Meadows"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",description:"Nature Landscape"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",description:"Lighthouse Coast Sea"}],o=document.querySelector(".js-gallery"),t=e.map(function(e){var o=e.preview,t=e.original,i=e.description;return'<li class="gallery__item"><a class="gallery__link" href = "'.concat(t,'"><img class="gallery__image" src="').concat(o,'" alt="').concat(i,'"></li></a>')}).join("");o.insertAdjacentHTML("beforeend",t),o.addEventListener("click",c);var i=document.querySelector(".js-lightbox"),n=document.querySelector('[data-action="close-lightbox"]'),a=document.querySelector(".lightbox__image"),p=e.map(function(e){return e.original});function c(e){e.preventDefault(),"IMG"===e.target.nodeName&&(i.classList.add("is-open"),a.src=e.target.parentNode.href,a.alt=e.target.alt,n.addEventListener("click",r),window.addEventListener("click",s),window.addEventListener("keydown",l),window.addEventListener("keydown",h),window.addEventListener("keydown",d))}function r(){i.classList.remove("is-open"),a.src="",a.alt="",n.removeEventListener("click",r),window.removeEventListener("click",s),window.removeEventListener("keydown",l),window.removeEventListener("keydown",h),window.removeEventListener("keydown",d)}function s(e){"IMG"!==e.target.nodeName&&r()}function d(e){"Escape"===e.code&&r()}function l(e){var o=p.indexOf(a.src);if(i.classList.contains("is-open")&&"ArrowLeft"===e.code)return 0===o?a.src=p[p.length-1]:void(a.src=p[o-1])}function h(e){var o=p.indexOf(a.src);if(i.classList.contains("is-open")&&"ArrowRight"===e.code)return o===p.length-1?a.src=p[0]:void(a.src=p[o+1])}
},{}]},{},["vZyd"], null)
//# sourceMappingURL=/app.f51827af.js.map