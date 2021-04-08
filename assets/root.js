Vue.config.devtools = true;

///Compatibility: js, picture, object-fit
//import 'picturefill';
//import 'picturefill/dist/plugins/mutation/pf.mutation.min';
import 'core-js/modules/es.promise';
import 'core-js/modules/es.array.iterator';

//Vue Setup
import Vue from 'vue';

//Custom Store for Kirby
import store from './modules/store.js';

//Routes on a separate file so this file needs less changes
import routes from './routes.js';

//Mixins
import mixins from './mixins.js'

//Components
import components from './components';

//We need the base view for h()
import App from './views/app.vue';

/* Router*/
import VueRouter from 'vue-router';
Vue.use(VueRouter);

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

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/* !App*/
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
new Vue({
  store,
  router,
  mixins,
  watch: {
    $route: {
      immediate: true,
      handler: function() {
        this.setupOrUpdateKirby();
      }
    }
  },
  methods: {
    setupOrUpdateKirby: function() {
      //window.scrollTo(0, 0);
      var path = this.$route.path == '/' ? 'home' : this.$route.path;
      if (!this.$store.state.loaded) {
        this.$store.dispatch('loadData', path);
      } else {
        this.$store.commit('updateKirby', path);
      }
    }
  },
  render: h => h(App)
}).$mount('#app');
