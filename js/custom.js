function catalogActive() {
  const CATALOG_LIST_ID = 'catalog-list';
  const SCROLL_SPEED = 2; // 调整滚动速度的因子

  const $list = document.getElementById(CATALOG_LIST_ID);
  
  if (!$list) return; // 如果找不到元素，则直接返回

  // 滚动事件处理函数
  const handleScroll = (e) => {
      $list.scrollLeft += e.deltaY / SCROLL_SPEED; // 使用 deltaY 进行水平滚动
      e.preventDefault(); // 阻止浏览器默认滚动行为
  };

  // 添加鼠标滚轮事件监听
  $list.addEventListener('wheel', handleScroll, false);

  // 高亮当前页面对应的分类或标签
  const path = decodeURIComponent(window.location.pathname).replace(/page\/[0-9]+\//g, '');
  const $catalog = document.getElementById(path);
  
  if ($catalog) {
      $catalog.classList.add('selected'); // 高亮选中的分类或标签

      // 滚动当前页面对应的分类或标签到中部
      const catalogOffset = $catalog.offsetLeft - $list.offsetLeft;
      const offsetAdjustment = ($list.offsetWidth - $catalog.offsetWidth) / 2;
      $list.scrollLeft = catalogOffset - offsetAdjustment;
  }
}

// 调用函数
catalogActive();

//即刻短文
var percentFlag = false; // 节流阀
function essayScroll() {
  let a = document.documentElement.scrollTop || window.pageYOffset; // 卷去高度
  const waterfallResult = a % document.documentElement.clientHeight; // 卷去一个视口
  result <= 99 || (result = 99);

  if (
    !percentFlag &&
    waterfallResult + 100 >= document.documentElement.clientHeight &&
    document.querySelector("#waterfall")
  ) {
    // console.info(waterfallResult, document.documentElement.clientHeight);
    setTimeout(() => {
      waterfall("#waterfall");
    }, 500);
  } else {
    setTimeout(() => {
      document.querySelector("#waterfall") && waterfall("#waterfall");
    }, 500);
  }

  const r = window.scrollY + document.documentElement.clientHeight;

  let p = document.getElementById("post-comment") || document.getElementById("footer");

  (p.offsetTop + p.offsetHeight / 2 < r || 90 < result) && (percentFlag = true);
}
function replaceAll(e, n, t) {
  return e.split(n).join(t);
}
var temp = {
  diffDate: function (d, more = false) {
    const dateNow = new Date();
    const datePost = new Date(d);
    const dateDiff = dateNow.getTime() - datePost.getTime();
    const minute = 1000 * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const month = day * 30;

    let result;
    if (more) {
      const monthCount = dateDiff / month;
      const dayCount = dateDiff / day;
      const hourCount = dateDiff / hour;
      const minuteCount = dateDiff / minute;

      if (monthCount >= 1) {
        result = datePost.toLocaleDateString().replace(/\//g, "-");
      } else if (dayCount >= 1) {
        result = parseInt(dayCount) + " " + GLOBAL_CONFIG.dateSuffix.day;
      } else if (hourCount >= 1) {
        result = parseInt(hourCount) + " " + GLOBAL_CONFIG.dateSuffix.hour;
      } else if (minuteCount >= 1) {
        result = parseInt(minuteCount) + " " + GLOBAL_CONFIG.dateSuffix.min;
      } else {
        result = GLOBAL_CONFIG.dateSuffix.just;
      }
    } else {
      result = parseInt(dateDiff / day);
    }
    return result;
  },
  changeTimeInEssay: function () {
    document.querySelector("#bber") &&
      document.querySelectorAll("#bber time").forEach(function (e) {
        var t = e,
          datetime = t.getAttribute("datetime");
        (t.innerText = temp.diffDate(datetime, true)), (t.style.display = "inline");
      });
  },
  reflashEssayWaterFall: function () {
    document.querySelector("#waterfall") &&
      setTimeout(function () {
        waterfall("#waterfall");
        document.getElementById("waterfall").classList.add("show");
      }, 500);
  },
  commentText: function (e) {
    if (e == "undefined" || e == "null") e = "好棒！";
    var n = document.getElementsByClassName("el-textarea__inner")[0],
      t = document.createEvent("HTMLEvents");
    if (!n) return;
    t.initEvent("input", !0, !0);
    var o = replaceAll(e, "\n", "\n> ");
    (n.value = "> " + o + "\n\n"), n.dispatchEvent(t);
    var i = document.querySelector("#post-comment").offsetTop;
    window.scrollTo(0, i - 80),
      n.focus(),
      n.setSelectionRange(-1, -1),
      document.getElementById("comment-tips") && document.getElementById("comment-tips").classList.add("show");
  },
};

temp.changeTimeInEssay();
temp.reflashEssayWaterFall();


//祭奠日变灰
if(PublicSacrificeDay()){
  document.getElementsByTagName("html")[0].setAttribute("style","filter:gray !important;filter:grayscale(100%);-webkit-filter:grayscale(100%);-moz-filter:grayscale(100%);-ms-filter:grayscale(100%);-o-filter:grayscale(100%);");
}

function PublicSacrificeDay(){
    var PSFarr=new Array("0707","0918","1213");
    var currentdate = new Date();
    var str = "";
    var mm = currentdate.getMonth()+1;
    if(currentdate.getMonth()>9){
      str += mm;
    }else{
      str += "0" + mm;
    }
    if(currentdate.getDate()>9){
      str += currentdate.getDate();
    }else{
      str += "0" + currentdate.getDate();
    }
    if(PSFarr.indexOf(str)>-1){
        return 1;
    }else{
        return 0;
    }
}

// 自动网站变灰
// 0707 - 七七事变
// 0918 - 九一八事变
// 1213 - 南京公祭日