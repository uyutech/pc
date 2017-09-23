/**
 * Created by army8735 on 2017/9/22.
 */

import Profile from './Profile.jsx';
import Follow from './Follow.jsx';
import Favor from './Favor.jsx';

class My extends migi.Component {
  constructor(...data) {
    super(...data);
  }
  render() {
    return <div class="my">
      <Profile/>
      <Follow/>
      <Favor/>
      <a href="#" class="loginout">退出登录</a>
    </div>;
  }
}

export default My;
