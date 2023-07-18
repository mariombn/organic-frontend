/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import { loadFonts } from './webfontloader'
import vuetify from './vuetify'
import router from '../router'
import store from '../store'
import loading from '../components/Loading.vue'

//app.config.globalProperties.$api = api;

export function registerPlugins (app) {
  loadFonts()
  app
    .component('loading', loading)
    .use(vuetify)
    .use(router)
    .use(store)
}
