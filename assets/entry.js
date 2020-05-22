///Compatibility: js, picture, object-fit
import 'picturefill';
import 'picturefill/dist/plugins/mutation/pf.mutation.min';
import 'core-js/modules/es.promise';
import 'core-js/modules/es.array.iterator';

//Vuex Setup
import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import Vuex from 'vuex';

//Helpers
import yaml from 'yaml-js/lib/yaml.js';
import marked from 'marked/lib/marked';
import VueScrollTo from 'vue-scrollto';
Vue.use(VueScrollTo);

/* Root Component */
import App from './vues/root.vue';

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/* !Store*/
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    kirby: {
      site: [],
      pages: [],
      page: []
    },
    loading: false,
    loaded: false
  },
  actions: {
    loadData({ commit }, path) {
      console.info('Loading ' + path + ' from the API');
      axios.get('json?path=' + path).then(response => {
        commit('setupKirby', response.data, path);
        commit('updatePage', path);
      });
    }
  },
  mutations: {
    setupKirby(state, data) {
      state.kirby.site = data.site;
      state.kirby.pages = data.pages;
      state.loaded = true;
    },
    updatePage(state, path) {
      var pages = Object.keys(state.kirby.pages).length
        ? state.kirby.pages
        : false;
      if (pages) {
        var paths = path.substr(path.indexOf('/') + 1).split('/');
        while (paths.length) {
          var page = pages[paths.shift()];
          pages = typeof page.children === 'object' ? page.children : false;
        }
        state.kirby.page = page;
      }
    }
  }
});

/* Router */
import Home from './vues/home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    //component: () => import('../../assets/vues/about.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return { selector: to.hash }; // offset: { x: 0, y: 10 }
    }
  }
});

/* Vue */
new Vue({
  store,
  router: router,
  watch: {
    $route: {
      immediate: true,
      handler: function() {
        this.setupOrUpdatePosts();
        this.scrollUp();
      }
    }
  },
  methods: {
    scrollUp: function() {
      window.scrollTo(0, 0);
    },
    yaml: function(value) {
      if (!value) return '';
      var conversion = yaml.load(value);
      return conversion;
    },
    markdown: function(input) {
      return marked(input, { breaks: true, smartypants: true });
    },
    pagebyuid: function(uid, pages) {
      return uid && pages
        ? pages[uid.split('/')[0]].children[uid.split('/')[1]]
        : '';
    },
    setupOrUpdatePosts: function() {
      var path = this.$route.path == '/' ? 'home' : this.$route.path;
      if (!this.$store.state.loaded) {
        this.$store.dispatch('loadData', path);
      } else {
        this.$store.commit('updatePage', path);
      }
    }
  },
  render: h => h(App)
}).$mount('#app');
