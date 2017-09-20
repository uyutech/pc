/**
 * Created by army8735 on 2017/9/20.
 */

class TopNav extends migi.Component {
  constructor(...data) {
    super(...data);
  }
  render() {
    return <div class="cp-topnav gwrap">
      <a href="#/">每天转转圈 玩转每个圈</a>
      <form class="search">
        <input type="text" maxlength="16" placeholder="搜索"/>
      </form>
      <div class="user">
        <span>用户名</span>
        <img src={ '//zhuanquan.xyz/img/blank.png' }/>
      </div>
    </div>;
  }
}

export default TopNav;
