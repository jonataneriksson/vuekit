import Vue from 'vue';
import marked from 'marked';
//import yaml from 'yaml-js/lib/yaml.js';

import GlobalEvents from 'vue-global-events';
Vue.component('GlobalEvents', GlobalEvents);

//import vueVimeoPlayer from 'vue-vimeo-player'
//Vue.use(vueVimeoPlayer)

export default {
  computed: {
    kirby () {
      return this.$store.state.kirby
    }
  },
  methods: {
    urltopath (url) {
      let output = new URL(url);
      return output.pathname;
    },
    md (input) {
      return marked(input);
    },
    //yaml (input) {
    //  return yaml.load(input);
    //},
    pageFromURI(uri) {
      let pages = this.kirby.pages;
      if (pages && uri) {
        var paths = uri.split('/');
        var page = false;
        var children = pages;
        while (paths.length) {
          var id = paths.shift();
          //console.log(id);
          page = children[id];
          if(page) children = typeof page.children === 'object' ? page.children : [];
        }
        if(page) {
          return page;
        } else {
          //console.error('No page!', uri, pages);
        }
      } else {
        //console.error('No pages! Add a page element with function', uri, pages);
      }
    }
  }
}
