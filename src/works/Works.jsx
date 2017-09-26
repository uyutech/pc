/**
 * Created by army8735 on 2017/9/21.
 */

import Title from './Title.jsx';
import Author from './Author.jsx';
import Media from './Media.jsx';
import itemTemplate from './itemTemplate';
import Intro from './Intro.jsx';
import WorkComment from './WorkComment.jsx';

class Works extends migi.Component {
  constructor(...data) {
    super(...data);
    let self = this;
    self.on(migi.Event.DOM, function() {
      let media = self.ref.media;
      let workComment = self.ref.workComment;
      media.on('switchSubWork', function(data) {
        self.subWorkID = data[0].ItemID;
        workComment.subWorkID = self.subWorkID;
        workComment.barrageTime = 0;
      });
      media.on('timeupdate', function(data) {
        workComment.barrageTime = data;
      });
    })
  }
  @bind worksID
  @bind subWorkID
  setID(worksID) {
    this.worksID = worksID;
    this.ref.workComment.worksID = worksID;
  }
  load() {
    let self = this;
    let title = self.ref.title;
    let media = self.ref.media;
    let workComment = self.ref.workComment;
    workComment.load();
    util.postJSON('api/works/GetWorkDetails', { WorksID: self.worksID }, function(res) {
      if(res.success) {
        let data = res.data;
        title.title = data.Title;
        title.subTitle = data.sub_Title;
        media.setCover(data.cover_Pic);

        let works = data.Works_Items;
        let workHash = {};
        let workList = [];
        let authorList = [];
        let authorHash = {};
        works.forEach(function(item) {
          // 先按每个小作品类型排序其作者
          util.sort(item.Works_Item_Author, itemTemplate(item.ItemType).authorSort || function() {});
          // 将每个小作品根据小类型映射到大类型上，再归类
          let bigType = itemTemplate(item.ItemType).bigType;
          workHash[bigType] = workHash[bigType] || [];
          workHash[bigType].push(item);
          item.Works_Item_Author.forEach(function(item) {
            authorHash[item.WorksAuthorType] = authorHash[item.WorksAuthorType] || {};
            if(!authorHash[item.WorksAuthorType][item.ID]) {
              authorHash[item.WorksAuthorType][item.ID] = true;
              authorList.push(item);
            }
          });
        });
        Object.keys(workHash).forEach(function(k) {
          workList.push({
            bigType: k,
            value: workHash[k],
          });
        });
        util.sort(workList, function(a, b) {
          return a.bigType > b.bigType;
        });
        // workList.forEach(function(works) {
        //   let authors = [];
        //   works.value.forEach(function(work) {
        //     authors = authors.concat(work.Works_Item_Author);
        //   });
        //   // 去重
        //   let hash = {};
        //   for(let i = 0; i < authors.length; i++) {
        //     let author = authors[i];
        //     let key = author.ID + ',' + author.WorksAuthorType;
        //     if(hash[key]) {
        //       authors.splice(i--, 1);
        //       continue;
        //     }
        //     else {
        //       hash[key] = true;
        //     }
        //   }
        //   // 合并
        //   hash = {};
        //   let nAuthors = [];
        //   authors.forEach(function(author) {
        //     if(hash.hasOwnProperty(author.WorksAuthorType)) {
        //       nAuthors[hash[author.WorksAuthorType]].list.push(author);
        //     }
        //     else {
        //       hash[author.WorksAuthorType] = nAuthors.length;
        //       nAuthors.push({
        //         type: author.WorksAuthorType,
        //         list: [author]
        //       });
        //     }
        //   });
        //   authorList.push(nAuthors);
        // });
        // self.ref.author.setAuthor(authorList);
        authorHash = {};
        let tempHash = {
          901: 1,
          111: 1,
          112: 1,
          121: 2,
          122: 2,
          411: 2,
          421: 2,
          131: 2,
          134: 2,
          141: 2,
          211: 3,
          312: 3,
          311: 3,
          313: 3,
          351: 3,
          331: 3,
          332: 3,
        };
        authorList.forEach(function(item) {
          let type = tempHash[item.WorksAuthorType] || 3;
          authorHash[type] = authorHash[type] || [];
          authorHash[type].push(item);
        });
        authorList = [];
        if(authorHash[1]) {
          let seq = [901, 111, 112];
          util.sort(authorHash[1], function(a, b) {
            return seq.indexOf(a.WorksAuthorType) > seq.indexOf(b.WorksAuthorType);
          });
          authorList.push(authorHash[1]);
        }
        if(authorHash[2]) {
          let seq = [121, 122, 411, 421, 131, 134, 141];
          util.sort(authorHash[2], function(a, b) {
            return seq.indexOf(a.WorksAuthorType) > seq.indexOf(b.WorksAuthorType);
          });
          authorList.push(authorHash[2]);
        }
        if(authorHash[3]) {
          let seq = [211, 312, 311, 313, 351, 331, 332];
          util.sort(authorHash[3], function(a, b) {
            return seq.indexOf(a.WorksAuthorType) > seq.indexOf(b.WorksAuthorType);
          });
          authorList.push(authorHash[3]);
        }
        self.ref.author.setAuthor(authorList);

        media.setWorks(workList);

        let hasAudio = false;
        let hasVideo = false;
        workList.forEach(function(item) {
          if(item.bigType === 'audio') {
            hasAudio = true;
            $(self.ref.type.element).find('.audio').removeClass('fn-hide');
          }
          else if(item.bigType === 'video') {
            hasVideo = true;
            $(self.ref.type.element).find('.video').removeClass('fn-hide');
          }
        });
        if(hasAudio) {
          $(self.ref.type.element).find('.audio').addClass('cur');
        }
        else if(hasVideo) {
          $(self.ref.type.element).find('.video').addClass('cur');
        }
        // media.popular = data.Popular;
        // intro.tags = data.ReturnTagData || [];
        // $(self.ref.form.element).removeClass('fn-hide');
      }
      else {
        alert(res.message);
      }
    });
  }
  clickType(e, vd, tvd) {
    let $li = $(tvd.element);
    if(!$li.hasClass('cur')) {
      $(vd.element).find('.cur').removeClass('cur');
      $li.addClass('cur');
      let type = tvd.props.rel;
      this.ref.media.switchType(type);
    }
  }
  render() {
    return <div class="works fn-clear">
      <Title ref="title"/>
      <div class="temp fn-clear">
        <ul class="type" ref="type" onClick={ { li: this.clickType } }>
          <li class="audio fn-hide" rel="audio">音频</li>
          <li class="video fn-hide" rel="video">视频</li>
        </ul>
        <Author ref="author"/>
        <Media ref="media"/>
      </div>
      <WorkComment ref="workComment"/>
    </div>;
  }
}

export default Works;
