import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import b4w from 'blend4web';
// import * as main_canvas_container from 'blend4web/projects/my_project/my_project.js';

Vue.config.productionTip = false

new Vue({
  vuetify,
  b4w,
  // main_canvas_container,
  render: h => h(App)
}).$mount('#app')
