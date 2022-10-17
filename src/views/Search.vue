<template>
  <div class="search">
    <TopMenu />
    <SideBar />
    <input
      class="mt-5 p-4 d-block mx-auto w-50 rounded"
      type="text"
      placeholder="Search for.."
      v-model="search"
      @keyup="checkResult($event)"
    />
    <div class="mt-3">
      <ul>
        <li v-for="(searchResult, index) in searchResults" :key="index">
          {{ searchResult.title }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "search-page",
  beforeCreate() {
    if (!localStorage.getItem("token")) {
      this.$router.push("/Login").catch(() => {});
    }
  },
  data: () => {
    return {
      search: "",
      searchResults: [],
    };
  },
  methods: {
    checkResult() {
      let result = this.$store.getters["infoItems/searchResult"](this.search);
      this.searchResults = result != "" ? result : "Not Result";
    },
  },
};
</script>
<style></style>
