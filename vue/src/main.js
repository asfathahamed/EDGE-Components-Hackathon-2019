import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import vueCustomElement from "vue-custom-element";

Vue.use(vueCustomElement);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
