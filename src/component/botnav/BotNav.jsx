/**
 * Created by army8735 on 2017/9/26.
 */

class BotNav extends migi.Component {
  constructor(...data) {
    super(...data);
  }
  render() {
    return <div class="cp-botnav">
      <div class="c">
        <p>Copyright © 2017 Uyutech. All Rights Reserved.<br/>呦悠科技 版权所有 浙ICP备17029501号-2</p>
        <ul class="link fn-clear">
          <li class="weibo"><a href="http://weibo.com/u/6259241863" target="_blank">新浪微博</a></li>
        </ul>
      </div>
    </div>;
  }
}

export default BotNav;
