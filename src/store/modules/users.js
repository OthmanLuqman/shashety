import infoItem from "@/services/infoItems";
export const namespaced = true;
export const state = {
  users: {
    jwt: "",
    username: "",
  },
};
export const getters = {
  getUsers: (state) => {
    return state.users;
  },
};
export const mutations = {
  SET_TOKEN: (state, token) => {
    state.users.jwt = token;
  },
  SET_USER: (state, username) => {
    state.users.username = username;
  },
  CLEAR_TOKEN: (state) => {
    state.users.jwt = "";
  },
};
export const actions = {
  async signIn({ dispatch }, credentials) {
    const response = await infoItem.signIn(credentials).catch((e) => {
      console.log(e);
    });
    // console.log(dispatch);
    return dispatch("attempt", response.data.jwt);
  },

  async attempt({ state, commit }, token) {
    if (token) {
      commit("SET_TOKEN", token);
    }
    if (!state.users.jwt) {
      return;
    }
    // console.log(state);
    // this.$router.push("/");
    // commit("SET_USER", user.user.username);
  },
};
