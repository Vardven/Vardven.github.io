var posts=["undefined/ROS和ROS2的区别/","undefined/word常用快捷键/","undefined/电焊分类/","undefined/美化Hexo博客，主题安装配置/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };