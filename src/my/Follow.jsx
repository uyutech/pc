/**
 * Created by army8735 on 2017/9/22.
 */

class Follow extends migi.Component {
  constructor(...data) {
    super(...data);
  }
  @bind list = []
  render() {
    return <div class="follow">
      <h3>我的关注</h3>
      <b class="line"/>
      <div class="fn fn-clear">
        <a href="#" class="prev">查看上页</a>
        <a href="#" class="next">查看下页</a>
      </div>
      <ul class="list fn-clear">
        {
          this.list.map(function(item) {
            return <li>
              <a href="#" class="pic">
                <img src="//tva4.sinaimg.cn/crop.7.1.129.129.180/64319a89gw1f62p9lp7hyj203w03wq2x.jpg"/>
                <b class={ `cp-author_type` }/>
                <b class={ `cp-author_type` }/>
              </a>
              <a href="#" class="txt">{ 123 }</a>
              <div class="info">合作1次</div>
            </li>;
          })
        }
        <li>
          <a href="#" class="pic">
            <img src="//tva4.sinaimg.cn/crop.7.1.129.129.180/64319a89gw1f62p9lp7hyj203w03wq2x.jpg"/>
            <b class={ `cp-author_type` }/>
            <b class={ `cp-author_type` }/>
          </a>
          <a href="#" class="txt">{ 123 }</a>
          <div class="info">合作1次</div>
        </li>
      </ul>
    </div>;
  }
}

export default Follow;
