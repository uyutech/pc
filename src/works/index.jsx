/**
 * Created by army8735 on 2017/9/21.
 */

import './works.html';
import './index.less';

import Works from './Works.jsx';
import BotNav from '../component/botnav/BotNav.jsx';

let works = migi.render(
  <Works/>,
  '#page'
);
works.setID(window.$CONFIG.worksID);
works.load();

migi.render(
  <BotNav/>,
  document.body
);
