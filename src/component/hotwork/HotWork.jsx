/**
 * Created by army8735 on 2017/9/20.
 */

class HotWork extends migi.Component {
  constructor(...data) {
    super(...data);
  }
  render() {
    return <div class="cp-hotwork gwrap">
      <div class="ti">
        <h4>热门作品</h4>
        <a href="#">查看上页</a>
        <a href="#">查看下页</a>
      </div>
    </div>;
  }
}

export default HotWork;
