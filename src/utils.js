import axios from "axios";

export function saveTokenPlugins(token) {
  token.subscribe((mutation) => {
    if (mutation.type == "users/SET_TOKEN") {
      // console.log(mutation.payload);
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${mutation.payload}`;
      localStorage.setItem("token", mutation.payload);
    }
  });
}

export function saveInfoItemPlugins(store) {
  store.subscribe((mutation) => {
    if (mutation.type == "infoItems/SET_INFO_ITEMS") {
      localStorage.setItem("infoItems", JSON.stringify(mutation.payload));
    }
  });
}
