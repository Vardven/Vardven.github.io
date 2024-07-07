var posts=["2024/07/04/hello-world/","2024/07/04/欢迎来到我的博客！/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };