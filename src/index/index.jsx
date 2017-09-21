/**
 * Created by army8735 on 2017/9/20.
 */

import './index.html';
import './index.less';

import TopNav from '../component/topnav/TopNav.jsx';
import CIframe from '../component/ciframe/CIframe.jsx';

let topNav = migi.render(
  <TopNav/>,
  document.body
);

let hash = location.hash;
if(hash.length) {
  hash = hash.slice(1);
  if(!hash.length || hash.charAt(0) !== '/') {
    hash = '/home';
  }
}
else {
  hash = '/home';
}

let cIframe = migi.render(
  <CIframe/>,
  document.body
);
cIframe.element.contentWindow.location.href = hash;

window.setTop = function(top) {
  topNav.setTop(top);
};
