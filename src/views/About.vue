<template>
  <div class="about">
    <TopMenu />
    <SideBar />
    <h1>This is an about page</h1>
  </div>
</template>

<script>
export default {
  name: "About-Page",
  beforeCreate() {
    if (!localStorage.getItem("token")) {
      this.$router.push("/Login").catch(() => {});
    }
  },
};
</script>
