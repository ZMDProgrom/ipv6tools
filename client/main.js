import Vue from 'vue'
import App from './App.vue'

require('font-awesome/css/font-awesome.css');
require('bulma/css/bulma.css');
require('d3/build/d3.min.js');

new Vue({
  el: '#app',
  components: {
    app: App
  }
})