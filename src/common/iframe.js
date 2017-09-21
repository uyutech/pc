/**
 * Created by army8735 on 2017/9/20.
 */

let parent = window.parent;
if(parent !== window) {
  let hostname = parent.location.hostname;
  if(hostname.indexOf('circling.cc') === -1) {
    location.href = '//404.html';
  }
  else {
    window.addEventListener('scroll', function() {
      let top = document.body.scrollTop || document.documentElement.scrollTop;
      parent.setTop && parent.setTop(top);
    });
    let top = document.body.scrollTop || document.documentElement.scrollTop;
    parent.setTop && parent.setTop(top);
    document.body.addEventListener('click', function(e) {
      if(e.target.nodeName === 'A') {
        let href = e.target.href || '';
        href = href.replace(/https?:\/\/[^/]+/, '');
        if(href.charAt(0) === '/') {
          e.preventDefault();
          parent.setHash && parent.setHash(href);
        }
      }
    });
  }
}
else if(location.pathname !== '/') {
  location.href = '/#' + location.pathname;
}
