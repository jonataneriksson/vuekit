import Vue from 'vue';
//import marked from 'marked';
import axios from 'axios';
import dateFormat, { masks } from 'dateformat';
import yaml from 'yaml-js/lib/yaml.js';
///Compatibility: js, picture, object-fit
//import 'picturefill';
//import 'picturefill/dist/plugins/mutation/pf.mutation.min';
//import 'core-js/modules/es.promise';
//import 'core-js/modules/es.array.iterator';
//import GlobalEvents from 'vue-global-events';
//Vue.component('GlobalEvents', GlobalEvents);

export default {
  data: function(){
    return {
      loading: false,
      size: 'default'
    }
  },
  computed: {
    kirby () {
      return this.$store.state.kirby
    },
    previousPath () {
      return this.$store.state.previousPath
    }
  },
  created() {
    window.addEventListener('resize', this.resizeHandler);
    this.size = window.getComputedStyle(document.querySelector('body'), ':before').getPropertyValue('content').replace(/"/g, '')
  },
  destroyed() {
    window.removeEventListener('resize', this.resizeHandler);
  },
  watch: {
    'kirby.page': {
      immediate: true,
      handler: function() {
        document.title = this.kirby.page.strings&&this.kirby.site ? this.kirby.site.strings.title +' | '+this.kirby.page.strings.title : '';
      }
    },
    '$route': {
      immediate: true,
      handler: function(to, from) {
        if(from && this.previousPath !== from.path){
          this.$store.commit('changePreviousPath', from.path);
        }
      }
    }
  },
  methods: {
    resizeHandler: function(event) {
      this.size = window.getComputedStyle(document.querySelector('body'), ':before').getPropertyValue('content').replace(/"/g, '')
    },
    firstOfArrayOrString: function(value){
      return typeof this.yaml(value) == 'string' ? value : this.yaml(value)[0];
    },
    getPagesFromPaths: function(list) {
      let self = this;
      let paths = (typeof list == 'object') ? Object.values(list) : list;
      let pages = {};
      paths.map(function(path){
        let page = self.pageFromURI(path);
        if(page) pages[page.uid] = self.pageFromURI(path);
      });
      //console.log(pages);
      return pages;
    },
    urltopath: function (url) {
      let output = new URL(url);
      return output.pathname;
    },
    md: function (input) {
      return marked(input);
    },
    formattedDate: function(input, format){
      if(input) {
        let time = new Date(input);
        return dateFormat(time, format);
      } else {
        return '';
      }
    },
    yaml (input) {
      return (input) ? yaml.load(input) : '';
    },
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
