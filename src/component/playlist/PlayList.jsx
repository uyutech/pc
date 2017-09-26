/**
 * Created by army on 2017/7/1.
 */

class PlayList extends migi.Component {
  constructor(...data) {
    super(...data);
  }
  setData(data) {
    let self = this;
    let s = '';
    (data || []).forEach(function(item) {
      s += self.genItem(item);
    });
    $(self.ref.list.element).html(s);
  }
  setData2(data) {
    let self = this;
    let s = '';
    (data || []).forEach(function(item) {
      s += self.genItem(item);
    });
    $(self.ref.list2.element).html(s);
  }
  appendData(data) {
    let self = this;
    let s = '';
    (data || []).forEach(function(item) {
      s += self.genItem(item);
    });
    $(self.ref.list.element).append(s);
  }
  genItem(item) {
    return <li>
      <a href={ `/works/${item.WorksID}` } class="pic">
        <img src={ util.img100_100(item.cover_Pic) || '//zhuanquan.xin/img/blank.png' }/>
      </a>
      <div class="txt" worksId={ item.WorksID || item.WorkID }>
        <a href={ `/works/${item.WorksID}` } class="name">{ item.Title }</a>
        <p class="intro">{ item.sub_Title }</p>
      </div>
    </li>;
      //{
        // item.type.map(function(item2) {
        //   return <b class={ item2 }/>;
        // })
      //}
  }
  click(e, vd, tvd) {
    let id = tvd.props.worksId;
    util.goto(`/works/${id}`);
  }
  render() {
    return <div class="cp-playlist fn-clear">
      <div class="hot">
        <h4>最热</h4>
        <ul class="list" ref="list"/>
      </div>
      <div class="new">
        <h4>最新</h4>
        <ul class="list2" ref="list2"/>
      </div>
    </div>;
  }
}

export default PlayList;
