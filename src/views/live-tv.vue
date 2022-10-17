<template>
  <div class="live-tv">
    <TopMenu />
    <SideBar />
  </div>
</template>

<script>
export default {
  name: "live-tv",
  beforeCreate() {
    if (!localStorage.getItem("token")) {
      this.$router.push("/Login").catch(() => {});
    }
  },
};
</script>

<style></style>
