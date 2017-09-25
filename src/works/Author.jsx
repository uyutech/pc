/**
 * Created by army8735 on 2017/9/21.
 */

import authorTemplate from '../component/author/authorTemplate';

class Author extends migi.Component {
  constructor(...data) {
    super(...data);
  }
  @bind list = []
  setAuthor(data) {
    let list = [];
    // let temp = [];
    data.forEach(function(item) {
      let temp = [];
      let last = -1;
      let lastTips = '';
      item.forEach(function(item) {
        // console.log(item);
        if(item.WorksAuthorType !== last || item.Tips !== lastTips) {
          let type = authorTemplate.code2Data[item.WorksAuthorType];
          let label = item.Tips || type.display;
          temp.push(<li class="label">{ label }</li>);
        }
        last = item.WorksAuthorType;
        lastTips = item.Tips;
        temp.push(<li class="item" id={ item.ID }><a href={ `/author/${item.ID}` }>{ item.AuthName }</a></li>);
      });
      list.push(temp);
    //   item.forEach(function(item2) {
    //     let type = authorTemplate.code2Data[item2.type];
    //     let label = item2.type === '141' ? item2.list[0].Tips : type.display;
    //     temp.push(<li class="label">{ label }</li>);
    //     item2.list.forEach(function(item3) {
    //       temp.push(<li class="item" id={ item3.ID }><a href={ `/author/${item3.ID}` }>{ item3.AuthName }</a></li>);
    //     });
    //   });
    });
    this.list = list;
    // let $c = $(this.ref.c.element);
    // let $ul = $c.find('ul');
    // $c.css('width', $ul.width() + 1);
  }
  clickPrev(e) {
    e.preventDefault();
  }
  clickNext(e) {
    e.preventDefault();
  }
  clickAuthor(e) {}
  render() {
    return <div class="author">
      <h3>参与作者</h3>
      <b class="line"/>
      <div class="fn fn-clear fn-hide">
        <a class="prev" href="#" onClick={ this.clickPrev }>查看上页</a>
        <a class="next" href="#" onClick={ this.clickNext }>查看下页</a>
      </div>
      <div class="c" ref="c">
        {
          this.list.map(function(item) {
            return <ul>{ item }</ul>;
          })
        }
      </div>
    </div>;
  }
}

export default Author;
