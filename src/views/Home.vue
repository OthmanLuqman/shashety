<template>
  <div class="home">
    <SideBar />
    <TopMenu @logout="logout" />
    <Dashboard />
  </div>
</template>

<script>
// @ is an alias to /src
import Dashboard from "@/views/dashboard.vue";
export default {
  name: "home-page",
  components: {
    Dashboard,
  },
  beforeCreate() {
    if (!localStorage.getItem("token")) {
      this.$router.push("/Login").catch(() => {});
    }
  },
  methods: {
    logout() {
      this.$router.push("/Login");
    },
  },
};
</script>
<style scoped lang="scss">
.home {
  position: relative;
}
</style>
