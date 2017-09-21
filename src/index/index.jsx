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

let cIframe = migi.render(
  <CIframe/>,
  document.body
);

window.setTop = function(top) {
  topNav.setTop(top);
};
window.setHash = function(hash) {
  location.hash = hash;
};

function goto(hash) {
  hash = hash || '';
  hash = hash.replace(/^#/, '');
  if(!hash || hash === '/') {
    hash = '/find';
  }
  cIframe.element.contentWindow.location.href = hash;
}

window.addEventListener('hashchange', function() {
  goto(location.hash);
});

goto(location.hash);
