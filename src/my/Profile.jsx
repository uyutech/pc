/**
 * Created by army8735 on 2017/9/22.
 */

class Profile extends migi.Component {
  constructor(...data) {
    super(...data);
  }
  @bind userName = window.$CONFIG.userName
  click(e) {
    e.preventDefault();
    let self = this;
    let name = window.prompt('请输入想要修改的昵称', window.$CONFIG.userName).trim();
    if(name !== window.$CONFIG.userName) {
      util.postJSON('api/users/UpdateNickName', { NickName: name }, function(res) {
        if(res.success) {
          self.userName = name;
        }
        else {
          alert(res.message || util.ERROR_MESSAGE);
        }
      });
    }
  }
  render() {
    return <div class="profile fn-clear">
      <div class="pic">
        <img src={ window.$CONFIG.userPic || '//zhuanquan.xyz/img/blank.png' }/>
      </div>
      <div class="txt">
        <strong>{ this.userName }</strong>
        <a href="#" class="edit" onClick={ this.click }>编辑</a>
      </div>
    </div>;
  }
}

export default Profile;
