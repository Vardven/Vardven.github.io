var posts=["2024/07/08/安装主题后发表的第一篇测试文章/","2024/07/04/欢迎来到我的博客！/","2024/07/04/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };