<template>
  <div class="login">
    <div class="login-form">
      <img src="../assets/SHASHETY.png" alt="" />
      <div class="error" v-if="errors.length">
        <div v-for="error in errors" :key="error">
          {{ error }}
        </div>
      </div>
      <form>
        <input type="text" v-model="username" id="username" />
        <input type="password" v-model="pwd" id="pwd" />
        <button type="submit" @click.prevent="Submit" :disabled="activeToMany">
          submit
        </button>
      </form>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
export default {
  name: "Login-page",
  data: () => {
    return {
      username: "",
      pwd: "",
      activeToMany: false,
      errors: [],
    };
  },
  beforeCreate() {
    if (localStorage.getItem("token") != null) {
      this.$router.push("/");
    }
  },
  methods: {
    async Submit() {
      this.errors = [];
      if (!this.username) {
        this.errors.push("User Name is Required");
      }
      if (!this.pwd) {
        this.errors.push("User Password is Required");
      }
      if (this.username && this.pwd) {
        this.errors = [];
        this.$store
          .dispatch("users/signIn", {
            identifier: this.username,
            password: this.pwd,
          })
          .then(() => {
            this.$router.push("/");
          })
          .catch((e) => {
            localStorage.removeItem("token");
            console.log(e.message);
          });
        // await fetch("http://localhost:1337/api/auth/local", {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify({
        //     identifier: this.username,
        //     password: this.pwd,
        //   }),
        // })
        //   .then((response) => {
        //     console.log(response);
        //     if (response.status == 429) {
        //       this.activeToMany = true;
        //       this.errors.push("Many Requests, wait for a One Minute");
        //       setTimeout(() => {
        //         this.activeToMany = false;
        //         this.errors = [];
        //       }, 60000);
        //     }
        //     if (response.ok) {
        //       this.errors = [];
        //       return response.json();
        //     } else {
        //       this.errors.push("Username & password are wrong");
        //     }
        //   })
        //   .then((data) => {
        //     if (data) {
        //       axios.defaults.headers.common["Authorization"] =
        //         "Bearer " + data.jwt;
        //       localStorage.setItem("token", JSON.stringify(data.jwt));
        //       //this.$store.commit("jwt/SET_TOKEN");
        //       this.$router.push("/");
        //     }
        //   })
        //   .catch((error) => {
        //     localStorage.removeItem("token");
        //     console.log("error", error);
        //   });
      }
    },
  },
};
</script>

<style scoped lang="scss">
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 95vh;
  .login-form {
    width: 500px;
    // display: flex;
    // flex-direction: column;
    img {
      padding-bottom: 40px;
    }
    form {
      display: flex;
      flex-direction: column;
      input {
        margin: 10px 0;
        padding: 10px;
        border: none;
        border-radius: 8px;
        outline-color: $red;
      }
      button {
        margin: 10px 0;
        padding: 10px;
        border: none;
        border-radius: 8px;
        color: white;
        background: $red;
        transition: all 0.3s linear;
        cursor: pointer;
        &:hover {
          transform: scale(1.1);
        }
      }
    }
  }
}
</style>
