//Structure
import Vue from "https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js"
import axios from "https://dev.jspm.io/axios@0.19.0/dist/axios.min.js"
import Vuex from "https://dev.jspm.io/vuex@3.1.3/dist/vuex.min.js"
import VueRouter from "https://cdn.jsdelivr.net/npm/vue-router@3.1.6/dist/vue-router.esm.browser.min.js"
import httpVueLoader from "https://dev.jspm.io/http-vue-loader@1.4.2"

//Helpers
import yaml from "https://dev.jspm.io/yaml-js/lib/yaml.js"
import marked from "https://dev.jspm.io/marked/marked.min.js"
import VueScrollTo from "https://dev.jspm.io/vue-scrollto"
Vue.use(VueScrollTo)

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/* !Store*/
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    kirby: {
      site: [],
      pages: [],
      page: []
    },
    loading: false,
    loaded: false,
  },
  actions: {
    loadData({commit}, path) {
      console.info("Loading " +path+ " from the API" );
      axios.get("json?path="+path).then((response) => {
        commit("setupKirby", response.data, path);
        commit("updatePage", path)
      })
    }
  },
  mutations: {
    setupKirby(state, data) {
      state.kirby.site = data.site;
      state.kirby.pages = data.pages;
      state.loaded = true;
    },
    updatePage(state, path) {
      var pages = Object.keys(state.kirby.pages).length ? state.kirby.pages : false;
      if(pages){
        var paths = path.substr(path.indexOf("/") + 1).split("/");
        while(paths.length){
          var page = pages[paths.shift()];
          pages = (typeof page.children === "object") ? page.children : false;
        }
        state.kirby.page = page;
      }
    }
  }
})

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/* !View components*/
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

Vue.component("grid", httpVueLoader("/assets/vues/grid.vue"))
Vue.component("feature", httpVueLoader("/assets/vues/feature.vue"))
Vue.component("stylesheets", httpVueLoader("/assets/vues/styles.vue"))
Vue.component("top-navigation", httpVueLoader("/assets/vues/top-navigation.vue"))
Vue.component("bottom-footer", httpVueLoader("/assets/vues/bottom-footer.vue"))
Vue.component("picture-module", httpVueLoader("/assets/vues/picture-module.vue"))
Vue.component("installation-module", httpVueLoader("/assets/vues/installation-module.vue"))

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/* !Routes*/
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: httpVueLoader("/assets/vues/home.vue"),
    meta: { transitionName: "fade" },
  },
  {
    path: "/about",
    component: httpVueLoader("/assets/vues/about.vue"),
    meta: { transitionName: "fade" }
  },
  {
    path: "/paintings",
    component: httpVueLoader("/assets/vues/paintings.vue"),
    meta: { transitionName: "fade" },
    children: [
      {
        path: ":painting",
        component: httpVueLoader("/assets/vues/painting.vue"),
      },
    ],
  },
  {
    path: "/:collection",
    component: httpVueLoader("/assets/vues/collection.vue"),
    meta: { transitionName: "fade" },
  },
  {
    path: "/:collection/:installation",
    component: httpVueLoader("/assets/vues/installation.vue"),
    meta: { transitionName: "fade" },
  }
];

const router = new VueRouter({
  mode: "history",
  routes,
  scrollBehavior (to) {
    if (to.hash) {
      return { selector: to.hash } // offset: { x: 0, y: 10 }
    }
  }
});

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/* !Base App */
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

/* Vue */
new Vue({
  store,
  router: router,
  watch: {
    $route: function () {
      this.setupOrUpdatePosts();
      this.scrollUp()
    }
  },
  methods: {
    scrollUp: function() {
      window.scrollTo(0, 0);
    },
    yaml: function(value) {
      if (!value) return ""
      var conversion = yaml.load(value);
      return conversion;
    },
    markdown: function(input) {
      return marked(input, { breaks: true, smartypants: true });
    },
    pagebyuid: function(uid, pages) {
        return (uid && pages) ? pages[uid.split("/")[0]].children[uid.split("/")[1]] : '';
    },
    setupOrUpdatePosts: function() {
      var path = (this.$route.path == "/") ? "home" : this.$route.path;
      if(!this.$store.state.loaded) {
        this.$store.dispatch("loadData", path);
      } else {
        this.$store.commit("updatePage", path);
      }
    },
  },
}).$mount("#app");
