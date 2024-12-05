var posts=["undefined/ROS和ROS2的区别/","undefined/hello-world/","undefined/美化Hexo博客，主题安装配置/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };