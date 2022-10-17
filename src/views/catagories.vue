<template>
  <div class="cata">
    <TopMenu />
    <SideBar />
  </div>
</template>

<script>
export default {
  name: "catagories-page",
  beforeCreate() {
    if (!localStorage.getItem("token")) {
      this.$router.push("/Login").catch(() => {});
    }
  },
};
</script>

<style></style>
