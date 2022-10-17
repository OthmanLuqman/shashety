import Vue from "vue";
import Vuex from "vuex";
import * as lang from "@/store/modules/lang";
import * as infoItems from "@/store/modules/infoItems";
import * as users from "@/store/modules/users";
import * as notification from "@/store/modules/notification";
import { saveTokenPlugins, saveInfoItemPlugins } from "@/utils";

Vue.use(Vuex);

export const store = new Vuex.Store({
  plugins: [saveTokenPlugins, saveInfoItemPlugins],
  modules: {
    infoItems,
    users,
    notification,
    lang,
  },
});
