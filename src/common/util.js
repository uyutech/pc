/**
 * Created by army on 2017/5/20.
 */

import env from 'ENV';
import sort from './sort';

let util = {
  isIPhone: function(){
    return navigator.appVersion.match(/iphone/gi);
  },
  getJSON: function(url, data, success, error) {
    if (typeof data === 'function') {
      error = success;
      success = data;
      data = {};
    }
    error = error || function() {};
    return env.ajax(url, data, success, error, 'get');
  },
  postJSON: function(url, data, success, error) {
    if (typeof data === 'function') {
      error = success;
      success = data;
      data = {};
    }
    error = error || function() {};
    return env.ajax(url, data, success, error, 'post');
  },
  goto: function(url) {
    location.href = url;
  },
  img192_192: function(url) {
    return url ? url + '-192_192' : url;
  },
  img144_144: function(url) {
    return url ? url + '-144_144' : url;
  },
  img100_100: function(url) {
    return url ? url + '-100_100' : url;
  },
  sort,
  ERROR_MESSAGE: '人气大爆发，请稍后再试。'
};

export default util;
