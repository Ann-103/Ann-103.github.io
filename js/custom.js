function catalogActive(){const e=document.getElementById("catalog-list");if(!e)return;e.addEventListener("wheel",(t=>{e.scrollLeft+=t.deltaY/2,t.preventDefault()}),!1);const t=decodeURIComponent(window.location.pathname).replace(/page\/[0-9]+\//g,""),n=document.getElementById(t);if(n){n.classList.add("selected");const t=n.offsetLeft-e.offsetLeft,l=(e.offsetWidth-n.offsetWidth)/2;e.scrollLeft=t-l}}catalogActive();var percentFlag=!1;function essayScroll(){const e=(document.documentElement.scrollTop||window.pageYOffset)%document.documentElement.clientHeight;result<=99||(result=99),!percentFlag&&e+100>=document.documentElement.clientHeight&&document.querySelector("#waterfall")?setTimeout((()=>{waterfall("#waterfall")}),500):setTimeout((()=>{document.querySelector("#waterfall")&&waterfall("#waterfall")}),500);const t=window.scrollY+document.documentElement.clientHeight;let n=document.getElementById("post-comment")||document.getElementById("footer");(n.offsetTop+n.offsetHeight/2<t||90<result)&&(percentFlag=!0)}function replaceAll(e,t,n){return e.split(t).join(n)}var temp={diffDate:function(e,t=!1){const n=new Date,l=new Date(e),a=n.getTime()-l.getTime(),o=36e5,c=24*o;let r;if(t){const e=a/c,t=a/o,n=a/6e4;r=a/(30*c)>=1?l.toLocaleDateString().replace(/\//g,"-"):e>=1?parseInt(e)+" "+GLOBAL_CONFIG.dateSuffix.day:t>=1?parseInt(t)+" "+GLOBAL_CONFIG.dateSuffix.hour:n>=1?parseInt(n)+" "+GLOBAL_CONFIG.dateSuffix.min:GLOBAL_CONFIG.dateSuffix.just}else r=parseInt(a/c);return r},changeTimeInEssay:function(){document.querySelector("#bber")&&document.querySelectorAll("#bber time").forEach((function(e){var t=e,n=t.getAttribute("datetime");t.innerText=temp.diffDate(n,!0),t.style.display="inline"}))},reflashEssayWaterFall:function(){document.querySelector("#waterfall")&&setTimeout((function(){waterfall("#waterfall"),document.getElementById("waterfall").classList.add("show")}),500)},commentText:function(e){"undefined"!=e&&"null"!=e||(e="好棒！");var t=document.getElementsByClassName("el-textarea__inner")[0],n=document.createEvent("HTMLEvents");if(t){n.initEvent("input",!0,!0);var l=replaceAll(e,"\n","\n> ");t.value="> "+l+"\n\n",t.dispatchEvent(n);var a=document.querySelector("#post-comment").offsetTop;window.scrollTo(0,a-80),t.focus(),t.setSelectionRange(-1,-1),document.getElementById("comment-tips")&&document.getElementById("comment-tips").classList.add("show")}}};function PublicSacrificeDay(){var e=new Array("0707","0918","1213"),t=new Date,n="",l=t.getMonth()+1;return t.getMonth()>9?n+=l:n+="0"+l,t.getDate()>9?n+=t.getDate():n+="0"+t.getDate(),e.indexOf(n)>-1?1:0}temp.changeTimeInEssay(),temp.reflashEssayWaterFall(),PublicSacrificeDay()&&document.getElementsByTagName("html")[0].setAttribute("style","filter:gray !important;filter:grayscale(100%);-webkit-filter:grayscale(100%);-moz-filter:grayscale(100%);-ms-filter:grayscale(100%);-o-filter:grayscale(100%);");