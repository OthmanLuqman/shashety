import infoItem from "@/services/infoItems";
export const namespaced = true;
export const state = {
  infoItems: [],
};
export const getters = {
  getOfInfoItems: (state) => {
    return state.infoItems.map((info) => {
      return {
        id: info.id,
        image: info.image,
        like: info.like,
        title: info.title,
        cover: info.cover,
        trailerUrl: info.trailerUrl,
      };
    });
  },
  getOfInfoItemById: (state) => (id) => {
    return state.infoItems.find((infoItem) => infoItem.id === id);
  },
  searchResult: (state) => (search) => {
    if (search) {
      return state.infoItems.filter((infoItem) =>
        infoItem.title.toLowerCase().includes(search.toLowerCase())
      );
    }
  },
};
export const mutations = {
  TOGGLE: (state, id) => {
    state.infoItems.forEach((infoItems) => {
      if (infoItems.id == id) infoItems.like = !infoItems.like;
    });
  },
  SET_INFO_ITEMS(state, infoItems) {
    state.infoItems = infoItems.map((info) => {
      return {
        id: info.id,
        image: `http://localhost:1337${info.attributes.image.data.attributes.url}`,
        like: info.attributes.like,
        title: info.attributes.title,
        cover: info.attributes.cover,
        trailerUrl: info.attributes.trailerUrl,
      };
    });
  },
  CLEAR_INFOITEMS(state) {
    state.infoItems = [];
  },
};
export const actions = {
  getAllInfoItem: ({ commit, dispatch }) => {
    infoItem
      .getData()
      .then((response) => {
        // console.log(response);
        return response.data;
      })
      .then((data) => {
        commit("SET_INFO_ITEMS", data.data);
        return data.data;
      })
      .catch((err) => {
        const notification = {
          type: "error",
          message: "It can not fetch any data from api: " + err.message,
        };
        dispatch("notification/add", notification, { root: true });
      });
  },
  toggle: ({ getters, commit }, id) => {
    let likeState = getters.getOfInfoItemById(id);
    //console.log(`id is correct ${likeState.like}`);
    infoItem
      .changeLikeToggle(id, { data: { like: !likeState.like } })
      .then(() => {
        commit("TOGGLE", id);
      });
  },
  getTokenAPI: () => {
    // const { data } = axios.post("http://localhost:1337/api/auth/local", {
    //   identifier: "othman.l.hazim@gmail.com",
    //   password: "q@ed4D?#kRemsY$",
    // });
    //console.log(data);
  },
};
