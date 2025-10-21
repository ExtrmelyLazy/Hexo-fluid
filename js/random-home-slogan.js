// source/js/random-home-slogan.js
document.addEventListener('DOMContentLoaded', function() {
  // 严格判断是否为首页
  const path = window.location.pathname;
  const isHomePage = path === '/' || 
                     path === '/index.html' || 
                     path === '/index' ||
                     document.body.classList.contains('home');
  
  if (isHomePage) {
    const slogans = [
      "欢迎来到我的技术博客",
      "记录与分享学习历程",
      "探索技术的无限可能", 
      "代码改变世界，思维创造未来",
      "保持好奇，持续学习",
      "在技术的海洋中航行",
      "用代码书写人生篇章"
    ];
    
    const sloganElement = document.querySelector('.banner-subtitle');
    if (sloganElement) {
      const randomIndex = Math.floor(Math.random() * slogans.length);
      sloganElement.textContent = slogans[randomIndex];
      
      // 如果需要打字机效果，可以在这里触发
      console.log('首页随机标语已设置:', slogans[randomIndex]);
    }
  }
});
