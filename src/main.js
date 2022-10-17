import Vue from "vue";
import App from "./App.vue";
import { store } from "./store/store";
import router from "./router";
import VueSlickCarousel from "vue-slick-carousel";
import "nprogress/nprogress.css";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import SideBar from "@/components/SideBar.vue";
import TopMenu from "@/components/TopMenu.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHome,
  faTv,
  faSitemap,
  faSearch,
  faBackward,
  faUserAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import i18n from "./i18n";

library.add(faHome, faTv, faSitemap, faSearch, faBackward, faUserAlt);

// globle components
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component("SideBar", SideBar);
Vue.component("TopMenu", TopMenu);
Vue.component("VueSlickCarousel", VueSlickCarousel);

Vue.config.productionTip = false;

const token = localStorage.getItem("token");
store.dispatch("users/attempt", token);
const infoItems = JSON.parse(localStorage.getItem("infoItems"));
if (infoItems) {
  store.commit("infoItems/SET_INFO_ITEMS", infoItems);
}
const localeLang = localStorage.getItem("lang");
store.commit("lang/SET_LANG", localeLang);

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
