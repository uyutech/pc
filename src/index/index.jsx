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

let cIframe;

window.setTop = function(top) {
  topNav.setTop(top);
};
window.setHash = function(hash) {
  location.hash = hash;
};

function goto(hash) {console.log(1,hash);
  hash = hash || '';
  hash = hash.replace(/^#/, '');
  if(!hash || hash === '/') {
    hash = '/find';
  }
  if(cIframe) {
    cIframe.clean();
  }console.log(2,hash);
  cIframe = migi.render(
    <CIframe/>,
    document.body
  );
  cIframe.element.contentWindow.location.href = hash;
}

window.addEventListener('hashchange', function() {
  goto(location.hash);
});

goto(location.hash);
