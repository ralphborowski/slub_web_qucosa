"use strict";(self.webpackChunkqsa=self.webpackChunkqsa||[]).push([[369],{842:function(e,t,r){function o(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}r.r(t);var c=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.init()}var t,r;return t=e,(r=[{key:"init",value:function(){$(".carousel").carousel({interval:!1,touch:!0}),this.switchFocus()}},{key:"switchFocus",value:function(){var e=this,t=document.querySelectorAll(".carousel-control-prev"),r=document.querySelectorAll(".carousel-control-next");t.forEach((function(t){e.focusFirstCarouselEl(t)})),r.forEach((function(t){e.focusFirstCarouselEl(t)}))}},{key:"focusFirstCarouselEl",value:function(e){e.addEventListener("click",(function(){e.closest(".carousel").querySelector(".active .qsa_carousel-item_wrapper").querySelectorAll("figure")[0].querySelector(".qsa_carousel-item_el-link").focus()}))}}])&&o(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();t.default=new c}}]);