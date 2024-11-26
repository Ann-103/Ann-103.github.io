fetch('https://wb.bore.vip/api').then(data=>data.json()).then(data=>{
    let html = '<style>.hot-new.hot-hot.hot-jyzy.hot-recommend.hot-adrecommend.hot-friend.hot-boom.hot-topic.hot-topic-ad.hot-boil#hot-container{overflow-y:auto;-ms-overflow-style:none;scrollbar-width:none}#hot-container::-webkit-scrollbar{display:none}.hot-list-item{display:flex;flex-direction:row;justify-content:space-between;flex-wrap:nowrap}.hot-title{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-right:auto}.hot-num{float:right}.hot-hotness{display:inline-block;padding:0 6px;transform:scale(.8) translateX(-3px);color:#fff;border-radius:8px}</style>'
    html += '<div class="hot-list">'
    let hotness = {
        '爆': 'hot-boom',
        '热': 'hot-hot',
        '沸': 'hot-boil',
        '新': 'hot-new',
        '荐': 'hot-recommend',
        '音': 'hot-jyzy',
        '影': 'hot-jyzy',
        '剧': 'hot-jyzy',
        '综': 'hot-jyzy'
    }
    for (let item of data) {
        html += '<div class="hot-list-item"><div class="hot-hotness ' + hotness[(item.hot || '荐')] + '">' + (item.hot || '荐') + '</div>' + '<span class="hot-title"><a title="' + item.title + '"href="' + item.url + '" target="_blank" rel="external nofollow noreferrer">' + item.title + '</a></span>' + '<div class="hot-num"><span>' + item.num + '</span></div></div>'
    }
    html += '</div>'
    document.getElementById('hot-container').innerHTML = html
}
).catch(function(error) {
    console.log(error);
});