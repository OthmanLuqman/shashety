<template>
  <div class="top-menu">
    <div class="container">
      <div class="login-user">
        <div class="user-avatar" v-if="isAdmin">
          <div>
            <div class="avatar">
              <font-awesome-icon icon="user-alt" />
            </div>
            <div class="user-name">{{ userName }}</div>
            <localeComponent />
          </div>
          <div class="logout" @click="logout">{{ $t("account.logout") }}</div>
        </div>
        <div class="login" v-else>
          <div>Login</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import localeComponent from "@/components/localeComponent";
export default {
  name: "top-menu",
  components: {
    localeComponent,
  },
  data() {
    return {
      checkUser: true,
      userName: "Othman",
    };
  },
  computed: {
    isAdmin: () => {
      return localStorage.getItem("token") != null ? true : false;
    },
  },
  methods: {
    logout() {
      axios.defaults.headers.common["Authorization"] = null;
      this.$store.commit("users/CLEAR_TOKEN");
      localStorage.removeItem("token");
      this.$store.commit("infoItems/CLEAR_INFOITEMS");
      localStorage.removeItem("infoItems");
      this.$router.push("/Login");
    },
  },
};
</script>
<style scoped lang="scss">
.top-menu {
  height: 50px;
  background-color: #141415;
  .login-user {
    width: 100%;
    .user-avatar {
      height: 50px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      & > div {
        display: flex;
        align-items: center;
        .avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: aliceblue;
          line-height: 40px;
          margin: 0 20px;
        }
        .user-name {
          color: lavender;
        }
      }
      .logout {
        cursor: pointer;
        padding: 5px;
        border-radius: 8px;
        &:hover {
          background: floralwhite;
        }
      }
    }
    .login {
      height: 50px;
      color: lavender;
      display: flex;
      align-items: center;
    }
  }
}
</style>
