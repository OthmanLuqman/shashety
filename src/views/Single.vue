<template>
  <div class="single">
    <TopMenu />
    <SideBar />
    <div v-if="getOfInfoItemById" class="container">
      <iframe
        id="ytplayer"
        type="text/html"
        width="100%"
        height="600"
        frameborder="0"
        autoplay="1"
        :src="getOfInfoItemById.trailerUrl + '/?&autoplay=1'"
        allow="autoplay"
      >
      </iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: "Single-page",
  props: ["id"],
  methods: {
    // goBackHome() {
    //   this.$router.push("/");
    // },
  },
  computed: {
    getOfInfoItemById() {
      const data = this.$store.getters[`infoItems/getOfInfoItemById`](+this.id);
      // if (!data) {
      //   this.goBackHome();
      // }
      return data;
    },
  },
};
</script>
