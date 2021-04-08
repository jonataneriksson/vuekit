import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
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
      const http = axios.create({
        method: 'GET',
        credentials: 'include',
        mode: 'no-cors',
        headers: {
          'Accept': '*/*',
        }
      });
      http.get('json?path=' + path.substr(path.indexOf('/') + 1) +'&structure=1').then(response => {
        commit('setupKirby', response.data, path);
        commit('updateKirby', path);
      });
    }
  },
  mutations: {
    setupKirby(state, data) {
      state.kirby.site = data.site;
      state.kirby.pages = data.pages;
      state.loaded = true;
    },
    updateKirby(state, path) {
      //console.info(path+' requested.');
      var pages = Object.keys(state.kirby.pages).length ? state.kirby.pages : false;
      if (pages) {
        var paths = path.substr(path.indexOf('/') + 1).split('/');
        var page = false;
        var children = pages;
        while (paths.length) {
          //console.log(paths);
          var id = paths.shift();
          page = children[id];
          if(page) children = typeof page.children === 'object' ? page.children : [];
        }
        //console.log(path, page, id, children, pages);
        if(page) {
          if(page.extended === true) {
            state.kirby.page = page;
          } else {
            axios.get('json?path=' + page.uri ).then(response => {
              state.kirby.page = response.data.page;
            });
          }
        } else {
          console.error('No page!', path, state);
        }
      } else {
        console.error('No pages!', path, state);
      }
    }
  }
});
