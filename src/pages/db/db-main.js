import Vue from "vue";
import App from "./db.vue";
import router from "../../router";
import 'normalize.css/normalize.css';//A modern alternative to CSS resets

import ElementUI from 'element-ui';

// import 'element-ui/lib/theme-chalk/index.css';
import '../../assets/custom-theme/element-theme-sea.scss';
Vue.use(ElementUI,{ size: 'small'});

import '../../assets/styles/index.scss' // 全局css

import 'font-awesome/css/font-awesome.min.css';

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
