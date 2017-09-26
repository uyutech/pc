/**
 * Created by army8735 on 2017/9/21.
 */

import './search.html';
import './index.less';

import Search from './Search.jsx';
import BotNav from '../component/botnav/BotNav.jsx';

let search = migi.render(
  <Search/>,
  '#page'
);
if(window.$CONFIG.kw && window.$CONFIG.kw.length) {
  search.load(window.$CONFIG.kw);
}

migi.render(
  <BotNav/>,
  document.body
);
