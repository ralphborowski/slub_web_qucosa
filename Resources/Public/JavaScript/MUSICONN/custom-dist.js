$(".trigger").click((function(){$(this).toggleClass("open"),$("#mainnav").animate({height:"toggle"}),$(".logo").toggleClass("open")})),$(window).scroll((function(){$(this).scrollTop()>100?$("#totop").fadeIn():$("#totop").fadeOut()})),$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click((function(e){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var t=$(this.hash);(t=t.length?t:$("[name="+this.hash.slice(1)+"]")).length&&(e.preventDefault(),$("html, body").animate({scrollTop:t.offset().top},1e3,(function(){var e=$(t);if(e.focus(),e.is(":focus"))return!1;e.attr("tabindex","-1"),e.focus()})))}})),function(){for(var e,t,i=3,n=document.createElement("div"),o=n.getElementsByTagName("i");n.innerHTML="\x3c!--[if gt IE "+ ++i+"]><i></i><![endif]--\x3e",o[0];);if(i=i>4?i:document.documentMode){e=" ie";for(var a=5;a<12;a++)i<a?e+=" lte-ie"+a:i>a?e+=" gte-ie"+a:i==a&&(e+=" ie"+a);t={version:i}}else e=" not-ie",t=!1;document.documentElement.className+=e,window.ie=t}(),$((function(){$(".datetimepicker").datepicker({dateFormat:"dd.mm.yy",monthNames:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"]})})),$(".accordion").accordion({active:!1,collapsible:!0,heightStyle:"content"}),$((function(){$('div.form-group input[type="text"], div.form-group textarea, div.form-group select').each((function(){""!==$(this).val()&&$(this).parents("div.form-group").addClass("got-input")})).on("change",(function(){$(this).parents("div.form-group").toggleClass("got-input",""!==$(this).val())})),$("div.search-results")[0]&&($(".banner h1").append('<span class="search-info-toggle"/>'),$('main div[id^="c"] .content').addClass("search-infos search-infos-minimized")),$(".search-info-toggle").click((()=>{$('main div[id^="c"] .content').toggleClass("search-infos-minimized")})),$(".searchForm, .searchExtForm")[0]&&$("body").addClass("searchpage"),$("ul.f3-widget-paginator").each((function(){$(this).find(">li").length>9&&($(this).addClass("trimmed"),$(this).find("li.current").prevAll(":not(.previous)").slice(3).addClass("hidden"),$(this).find("li.current").nextAll(":not(.next)").slice(3).addClass("hidden"))}))}));