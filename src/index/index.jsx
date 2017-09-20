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

let pathname = location.path;
if(pathname === '/' || !pathname) {
  pathname = '/home';
}

let cIframe = migi.render(
  <CIframe/>,
  document.body
);
cIframe.element.contentWindow.location.href = pathname;
