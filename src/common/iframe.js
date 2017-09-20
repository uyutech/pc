/**
 * Created by army8735 on 2017/9/20.
 */

let parent = window.parent;
if(parent !== window) {
  let hostname = parent.location.hostname;
  if(hostname.indexOf('circling.cc') === -1) {
    location.href = '//baidu.com';
  }
}
else {
  let pathname = location.pathname;
  if(pathname === '/' || !pathname) {
    pathname = '/#/home';
  }
  else {
    pathname = '/#' + pathname;
  }
  location.href = pathname;
}
