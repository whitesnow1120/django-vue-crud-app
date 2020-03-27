import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BootstrapVue from "bootstrap-vue";
// import VeeValidate from 'vee-validate';

import { ValidationProvider, extend } from 'vee-validate';
import { required } from 'vee-validate/dist/rules';

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

Vue.use(BootstrapVue)
// Vue.use(VeeValidate);
extend('required', {
  ...required,
  message: 'This field is required'
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  components: {
    ValidationProvider
  },
  render: h => h(App)
}).$mount("#app");
