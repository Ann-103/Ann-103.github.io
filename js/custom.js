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