<template>
  <div class="show-items">
    <div class="boxs">
      <Item
        v-for="(numOfSlide, index) in numOfSlides"
        :key="index"
        :numOfSlide="numOfSlide"
      />
    </div>
  </div>
</template>
<script>
import Item from "@/components/Item.vue";
export default {
  name: "show-items",
  // eslint-disable-next-line
  // beforeRouteEnter(routeTo, routeFrom, next) {
  //   Nprogress.start();
  // },
  data: () => {
    return {
      numOfSlides: [
        {
          num: 1,
          cover: true,
          width: "100%",
        },
        {
          num: 5,
          cover: false,
          width: "200px",
        },
        {
          num: 2,
          cover: true,
          width: "200px",
        },
      ],
    };
  },
  components: {
    Item,
  },
  created() {
    if (localStorage.getItem("token")) {
      this.$store.dispatch("infoItems/getAllInfoItem");
    }
  },
};
</script>
<style lang="scss">
// .show-items {
// }
</style>
