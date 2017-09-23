/**
 * Created by army8735 on 2017/9/22.
 */

class Profile extends migi.Component {
  constructor(...data) {
    super(...data);
  }
  render() {
    return <div class="profile fn-clear">
      <div class="pic">
        <img src={ window.$CONFIG.userPic || '//zhuanquan.xyz/img/blank.png' }/>
      </div>
      <div class="txt">
        <strong>{ window.$CONFIG.userName }</strong>
        <a href="#" class="edit">编辑</a>
      </div>
    </div>;
  }
}

export default Profile;
