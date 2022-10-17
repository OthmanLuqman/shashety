<template>
  <div class="user">
    <div v-for="user in getusers" :key="user.id">look: {{ user.username }}</div>
  </div>
</template>

<script>
//import { mapState } from "vuex";
export default {
  name: "User-page",
  computed: {
    getusers() {
      return this.$store.getters["users/getUsers"];
    },
    //...mapState(["users"]),
  },
};
</script>

<style></style>
