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
  load() {
    let self = this;
    util.postJSON('api/users/GetLikeAuthorList', function(res) {
      if(res.success) {
        let data = res.data;
        self.ref.follow.list = data;
      }
    });
    util.postJSON('api/users/GetLikeWorksList', function(res) {
      if(res.success) {
        let data = res.data;
        self.ref.favor.list = data;
      }
    });
  }
  clickOut(e) {
    e.preventDefault();
    util.postJSON('api/users/Cancellation', function(res) {
      location.reload(true);
    });
  }
  render() {
    return <div class="my">
      <Profile/>
      <Follow ref="follow"/>
      <Favor ref="favor"/>
      <a href="#" class="loginout" onClick={ this.clickOut }>退出登录</a>
    </div>;
  }
}

export default My;
