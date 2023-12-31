import Vue from 'vue';
import App from './App.vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import './assets/main.css';

Vue.use(Vuetify);

new Vue({
  el: '#app',
  vuetify: new Vuetify({
    rtl: true,
  }),
  render: (h) => h(App),
});