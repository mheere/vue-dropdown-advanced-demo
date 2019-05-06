import Vue from 'vue';
import App from './src/App.vue';

Vue.config.productionTip = false;

//debugger;

new Vue({
  render: h => h(App)
}).$mount("#app");