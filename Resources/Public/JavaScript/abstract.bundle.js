"use strict";(self.webpackChunkqsa=self.webpackChunkqsa||[]).push([[626],{74:function(e,t,n){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n.r(t);var a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.init()}var t,n;return t=e,(n=[{key:"init",value:function(){this.showMore()}},{key:"showMore",value:function(){var e=document.querySelector(".qsa_abstract"),t=document.querySelector(".qsa_abstract__text"),n=t.querySelectorAll("p"),r=0,a=document.querySelector(".qsa_abstract__text--shadow"),o=document.querySelector(".btn-show__more-text");n.forEach((function(e){return r+=e.textContent.length})),this.checkCharacterAmount(1500,r,1650)||o.remove(),o.addEventListener("click",(function(){e.parentElement.style.maxHeight="unset",a.classList.add("more"),t.classList.add("active"),this.remove()}))}},{key:"checkCharacterAmount",value:function(e,t,n){return t!==n&&t>e}}])&&r(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();t.default=new a}}]);