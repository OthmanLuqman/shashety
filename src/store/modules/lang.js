import lang from "@/i18n";
export const namespaced = true;

export const state = {
  lang: lang.locale,
};
export const mutations = {
  SET_LANG: (state, _lang) => {
    state.lang = _lang;
    lang.locale = _lang;
  },
};
