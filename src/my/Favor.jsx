/**
 * Created by army8735 on 2017/9/22.
 */

class Favor extends migi.Component {
  constructor(...data) {
    super(...data);
  }
  @bind list = []
  render() {
    return <div class="favor">
      <h3>我的收藏</h3>
      <b class="line"/>
      <div class="fn fn-clear">
        <a href="#" class="prev">查看上页</a>
        <a href="#" class="next">查看下页</a>
      </div>
      <ul class="list fn-clear">
        {
          this.list.map(function(item) {
            return <li></li>;
          })
        }
        <li>
          <a href="#" class="pic">
            <img src="//tva4.sinaimg.cn/crop.7.1.129.129.180/64319a89gw1f62p9lp7hyj203w03wq2x.jpg"/>
            <div class="num">123</div>
            <div class="ath">aaa bbb</div>
          </a>
          <a href="#" class="txt">{ 123 }</a>
        </li>
      </ul>
    </div>;
  }
}

export default Favor;
