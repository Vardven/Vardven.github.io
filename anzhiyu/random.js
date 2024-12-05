var posts=["2024/07/08/ROS和ROS2的区别/","2024/07/08/美化Hexo博客，主题安装配置/","2024/12/05/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };