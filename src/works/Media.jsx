/**
 * Created by army8735 on 2017/9/21.
 */

import Author from './Author.jsx';
import Audio from './Audio.jsx';
import Video from './Video.jsx';
import itemTemplate from './itemTemplate';

let WIDTH = 1270;
let currentTime = 0;
let duration = 0;

let isStart;
let offsetX;

let audio;
let video;
let last;

class Media extends migi.Component {
  constructor(...data) {
    super(...data);
    let self = this;
    self.on(migi.Event.DOM, function () {
      // WIDTH = $(this.element).width();
      // let width = $(this.element).width();
      // self.ref.c.element.style.height = Math.round(width / 16 * 9) + 'px';

      let $play = $(this.ref.play.element);
      audio = self.ref.audio;
      video = self.ref.video;
      audio.on('timeupdate', function (data) {
        currentTime = data;
        let percent = currentTime / duration;
        self.setBarPercent(percent);
        self.emit('timeupdate', Math.floor(currentTime * 1000));
      });
      audio.on('loadedmetadata', function (data) {
        duration = data.duration;
        if(last === audio) {
          self.canControl = true;
        }
      });
      audio.on('playing', function(data) {
        duration = data.duration;
      });
      audio.on('play', function() {
        $play.addClass('pause');
      });
      audio.on('pause', function() {
        $play.removeClass('pause');
      });
      video.on('timeupdate', function (data) {
        currentTime = data;
        let percent = currentTime / duration;
        self.setBarPercent(percent);
        self.emit('timeupdate', Math.floor(currentTime * 1000));
      });
      video.on('loadedmetadata', function (data) {
        duration = data.duration;
        if(last === video) {
          self.canControl = true;
        }
      });
      video.on('playing', function(data) {
        duration = data.duration;
      });
      video.on('play', function() {
        $play.addClass('pause');
      });
      video.on('pause', function() {
        $play.removeClass('pause');
      });

      $(document).on('mousemove', this.move2.bind(this));
      $(document).on('mouseup', this.up.bind(this));
    });
  }
  @bind popular = 0
  @bind canControl
  setCover(url) {
    if(url) {
      $(this.element).css('background-image', `url(${url})`);
    }
    else {
      $(this.element).removeAttr('style');
    }
  }
  setWorks(workList) {
    let self = this;
    let hasAudio = false;
    let hasVideo = false;
    workList.forEach(function(item) {
      if(item.bigType === 'audio') {
        audio.setData(item.value);
        hasAudio = true;
        // $(self.ref.type.element).find('.audio').removeClass('fn-hide');
      }
      else if(item.bigType === 'video') {
        video.setData(item.value);
        hasVideo = true;
        // $(self.ref.type.element).find('.video').removeClass('fn-hide');
      }
    });
    if(hasAudio) {
      last = audio;
      // $(self.ref.type.element).find('.audio').addClass('cur');
    }
    else if(hasVideo) {
      last = video;
      // $(self.ref.type.element).find('.video').addClass('cur');
    }
    if(last) {
      last.show();
      this.emit('switchSubWork', last.data);
    }
  }
  clickTag(e, vd, tvd) {
    let $ul = $(vd.element);
    let $li = $(tvd.element);
    if(!$li.hasClass('cur')) {
      $ul.find('.cur').removeClass('cur');
      $li.addClass('cur');
      this.emit('tagChange', tvd.props.rel);
    }
  }
  clickPlay(e, vd) {
    if(this.canControl) {
      let $play = $(vd.element);
      if($play.hasClass('pause')) {
        last.pause();
      }
      else {
        last.play();
      }
      $play.toggleClass('pause');
    }
  }
  clickProgress(e) {
    if(this.canControl && e.target.className !== 'point') {
      offsetX = $(this.ref.progress.element).offset().left;
      let x = e.pageX - offsetX;
      let percent = x / WIDTH;
      let currentTime = Math.floor(duration * percent);
      last.currentTime(currentTime);
    }
  }
  down(e) {
    e.preventDefault();
    if(this.canControl) {
      isStart = true;
      offsetX = $(this.ref.progress.element).offset().left;
    }
  }
  move2(e) {
    if(isStart) {
      e.preventDefault();
      let x = e.pageX;
      let diff = x - offsetX;
      diff = Math.max(0, diff);
      diff = Math.min(WIDTH, diff);
      let percent = diff / WIDTH;
      this.setBarPercent(percent);
      currentTime = Math.floor(duration * percent);
    }
  }
  up() {
    isStart = false;
  }
  setBarPercent(percent) {
    percent *= 100;
    $(this.ref.has.element).css('width', percent + '%');
    $(this.ref.pgb.element).css('-webkit-transform', `translate3d(${percent}%,0,0)`);
    $(this.ref.pgb.element).css('transform', `translate3d(${percent}%,0,0)`);
  }
  switchType(type) {
    if(type === 'audio') {
      video.pause().hide();
      last = audio.show().currentTime(0);
    }
    else if(type === 'video') {
      audio.pause().hide();
      last = video.show().currentTime(0);
    }
    this.canControl = last.hasLoaded;
    duration = last.duration;
    $(this.ref.play.element).removeClass('pause');
    this.emit('switchSubWork', last.data);
  }
  render() {
    return <div class="media">
      <div class="c" ref="c">
        <Audio ref="audio"/>
        <Video ref="video"/>
      </div>
      <div class={ 'progress' + (this.canControl ? '' : ' dis') } onClick={ this.clickProgress } ref="progress">
        <div class="has" ref="has"/>
        <div class="pbg" ref="pgb">
          <div class="point" ref="point" onMouseDown={ this.down }/>
        </div>
      </div>
      <div class={ 'bar' + (this.canControl ? '' : ' dis') }>
        <div class="prev dis"/>
        <div class="play" ref="play" onClick={ this.clickPlay }/>
        <div class="next dis"/>
      </div>
    </div>;
  }
}

export default Media;
