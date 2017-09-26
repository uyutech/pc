/**
 * Created by army8735 on 2017/9/20.
 */

class TopNav extends migi.Component {
  constructor(...data) {
    super(...data);
  }
  setTop(top) {
    top = Math.min(top, 72);
    $(this.element).css('-webkit-transform', `translateY(${-top}px)`);
    $(this.element).css('transform', `translateY(${-top}px)`);
  }
  submit(e) {
    e.preventDefault();
    let v = this.ref.input.element.value.trim();
    if(v) {
      this.emit('search', v);
    }
  }
  render() {
    return <div class="cp-topnav">
      <a class="logo" href="#/">每天转转圈 玩转每个圈</a>
      <form class="search" onSubmit={ this.submit }>
        <input type="text" ref="input" maxlength="16" placeholder="搜索"/>
      </form>
      <a href="#/my" class="user">
        <span>{ window.$CONFIG.userName || '' }</span>
        <img src={ window.$CONFIG.userPic || '//zhuanquan.xin/img/f59284bd66f39bcfc70ef62eee10e186.png' }/>
      </a>
    </div>;
  }
}

export default TopNav;
