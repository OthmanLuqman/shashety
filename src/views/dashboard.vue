<template>
  <div class="dashboard">
    <ShowItems />
  </div>
</template>

<script>
import ShowItems from "@/components/ShowItems.vue";
export default {
  name: "dashboard-page",
  components: {
    ShowItems,
  },
};
</script>
<style scoped lang="scss">
.dashboard {
  position: absolute;
  right: 0;
  width: calc(100% - 50px);
}
</style>
