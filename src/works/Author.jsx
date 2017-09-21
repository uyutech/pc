/**
 * Created by army8735 on 2017/9/21.
 */

import authorTemplate from './authorTemplate';

class Author extends migi.Component {
  constructor(...data) {
    super(...data);
  }
  @bind list = []
  setAuthor(data) {
    let temp = [];
    data.forEach(function(item) {
      item.forEach(function(item2) {
        temp.push(<li class="label">{ authorTemplate(item2.type).name }</li>);
        item2.list.forEach(function(item3) {
          temp.push(<li class="item" id={ item3.ID }><a href={ `/author/${item3.ID}` }>{ item3.AuthName }</a></li>);
        });
      });
    });
    this.list = temp;
    let $c = $(this.ref.c.element);
    let $ul = $c.find('ul');
    $c.css('width', $ul.width() + 1);
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
      <div class="fn fn-clear">
        <a class="prev" href="#" onClick={ this.clickPrev }>查看上页</a>
        <a class="next" href="#" onClick={ this.clickNext }>查看下页</a>
      </div>
      <div class="c" ref="c" onClick={ { '.item': this.clickAuthor } }>
        <ul>
          {
            this.list
          }
        </ul>
      </div>
    </div>;
  }
}

export default Author;
