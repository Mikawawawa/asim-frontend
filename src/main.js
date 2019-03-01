import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import "../theme/index.css";
import ElementUI from "element-ui";
import request from "./service/request";

import mavonEditor from "mavon-editor";
import "mavon-editor/dist/css/index.css";

// import "element-ui/lib/theme-chalk/index.css";

Vue.use(ElementUI);
Vue.use(mavonEditor);

Vue.config.productionTip = false;

Vue.prototype.$request = request;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");

// new Vue({
//   el: "#app",
//   render: h => h(App)
// });
