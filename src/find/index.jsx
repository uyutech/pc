/**
 * Created by army8735 on 2017/9/21.
 */

import './find.html';
import './index.less';

import Find from './Find.jsx';
import BotNav from '../component/botnav/BotNav.jsx';

let find = migi.render(
  <Find/>,
  '#page'
);
find.load();

migi.render(
  <BotNav/>,
  document.body
);
