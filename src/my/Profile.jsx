/**
 * Created by army8735 on 2017/9/22.
 */

class Profile extends migi.Component {
  constructor(...data) {
    super(...data);
  }
  click(e) {
    e.preventDefault();
    let name = window.prompt('请输入想要修改的昵称', window.$CONFIG.userName).trim();
    if(name !== window.$CONFIG.userName) {
      alert(name);
    }
  }
  render() {
    return <div class="profile fn-clear">
      <div class="pic">
        <img src={ window.$CONFIG.userPic || '//zhuanquan.xyz/img/blank.png' }/>
      </div>
      <div class="txt">
        <strong>{ window.$CONFIG.userName }</strong>
        <a href="#" class="edit" onClick={ this.click }>编辑</a>
      </div>
    </div>;
  }
}

export default Profile;
