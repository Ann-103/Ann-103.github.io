var posts=["post/1783592341.html","post/1774397340.html","post/569744534.html","post/3295482393.html","post/1249121796.html","post/671154427.html","post/4082728149.html","post/4078386088.html","post/3025950195.html","post/2591061011.html","post/3233100709.html","post/3643155828.html","post/2735458860.html","post/127297243.html","post/1452602431.html","post/2122796003.html","post/1470706805.html","post/2597350601.html","post/2635928686.html","post/4227902866.html","post/2635928688.html","post/2635928687.html"];function toRandomPost(){pjax.loadUrl("/"+posts[Math.floor(Math.random()*posts.length)])}