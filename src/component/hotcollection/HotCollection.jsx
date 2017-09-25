/**
 * Created by army8735 on 2017/9/18.
 */

class HotCollection extends migi.Component {
  constructor(...data) {
    super(...data);
  }
  @bind dataList = []
  clickPrev(e) {
    e.preventDefault();
  }
  clickNext(e) {
    e.preventDefault();
  }
  render() {
    return <div class="cp-hotcollection">
      <h3>{ this.props.title }</h3>
      <b class="line"/>
      <div class="fn fn-clear">
        <a href="#" class="prev" onClick={ this.clickPrev }>查看上页</a>
        <a href="#" class="next" onClick={ this.clickNext }>查看下页</a>
      </div>
      <div class="empty"/>
    </div>;
  }
}

export default HotCollection;
