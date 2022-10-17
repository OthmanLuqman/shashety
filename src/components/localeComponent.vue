<template>
  <div class="local">
    <ul>
      <li v-for="locale in locales" :key="locale" @click="switchLocale(locale)">
        {{ locale }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "localeComponent",
  data: () => {
    return {
      locales: ["en", "ar"],
    };
  },
  computed: {
    // result() {
    //   console.log(this.$i18n.locale);
    //   return this.$i18n.locale;
    // },
    dir() {
      return this.$i18n.locale == "en" ? "ltr" : "rtl";
    },
  },
  methods: {
    switchLocale(locale) {
      if (this.$i18n.locale !== locale) {
        this.$store.commit("lang/SET_LANG", locale);
        localStorage.setItem("lang", locale);
      }
    },
  },
};
</script>

<style lang="css" scoped>
ul {
  display: flex;
  justify-content: space-between;
  width: 100px;
  height: 0px;
  list-style: none;
}
ul li {
  display: block;
  width: 20px;
  height: 20px;
  line-height: 20px;
  cursor: pointer;
  color: white;
}
ul li:hover {
  background: white;
  color: red;
}
</style>
