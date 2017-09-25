/**
 * Created by army8735 on 2017/8/8.
 */

import AuthorType from '../author/AuthorType.jsx';

class HotWork extends migi.Component {
  constructor(...data) {
    super(...data);
  }
  @bind dataList = []
  click(e, vd, tvd) {
    let worksID = tvd.props.worksID;
    if(worksID) {
      util.goto('/works/' + worksID);
    }
  }
  clickPrev(e) {
    e.preventDefault();
  }
  clickNext(e) {
    e.preventDefault();
  }
  render() {
    let authorId = this.props.authorId;
    return <div class="cp-hotwork">
      <h3>{ this.props.title }</h3>
      <b class="line"/>
      <div class="fn fn-clear">
        <a href="#" class="prev" onClick={ this.clickPrev }>查看上页</a>
        <a href="#" class="next" onClick={ this.clickNext }>查看下页</a>
      </div>
      {
        this.dataList && this.dataList.length
          ? <ul class="list fn-clear">
              {
                this.dataList.map(function(item) {
                  return <li worksID={ item.WorksID }>
                    <a href={ `/works/${item.WorksID}` } class="pic">
                      <img src={ util.img192_192(item.cover_Pic) || '//zhuanquan.xyz/img/blank.png' }/>
                      <div class="num"><b class="audio"/>{ item.Popular }</div>
                      <div class="ath">{ '' }</div>
                    </a>
                    <a href={ `/works/${item.WorksID}` } class="txt">{ item.Title }</a>
                  </li>;
                })
              }
            </ul>
          : <div class="empty"/>
      }
    </div>;
  }
}

export default HotWork;
