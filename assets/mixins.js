import marked from 'marked';
//import yaml from 'yaml-js/lib/yaml.js';


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
    pageFromURI(uri, pages) {
      if (pages && uri) {
        var paths = uri.split('/');
        var page = false;
        var children = pages;
        while (paths.length) {
          var id = paths.shift();
          console.log(id);
          page = children[id];
          if(page) children = typeof page.children === 'object' ? page.children : [];
        }
        if(page) {
          return page;
        } else {
          console.error('No page!', uri, pages);
        }
      } else {
        console.error('No pages!', uri, pages);
      }
    }
  }
}
