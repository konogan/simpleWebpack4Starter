if (module.hot) {
  module.hot.accept()
}

import Vue from 'vue';
import App from '../src/App.vue';

new Vue({
  el: '#app',
  render: h => h(App)
});