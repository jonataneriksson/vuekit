import Vue from 'vue';
import marked from 'marked';
import axios from 'axios';
//import yaml from 'yaml-js/lib/yaml.js';
///Compatibility: js, picture, object-fit
//import 'picturefill';
//import 'picturefill/dist/plugins/mutation/pf.mutation.min';
//import 'core-js/modules/es.promise';
//import 'core-js/modules/es.array.iterator';

import GlobalEvents from 'vue-global-events';
Vue.component('GlobalEvents', GlobalEvents);

export default {
  data: function(){
    return {
      loading: false,
    }
  },
  computed: {
    kirby () {
      return this.$store.state.kirby
    },
    submissionID () {
      return this.$store.state.submissionID
    },
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
