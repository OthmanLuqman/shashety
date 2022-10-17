<template>
  <div class="sidebar">
    <div
      :class="[
        'sidebar-menu',
        rotateActive == true ? 'sidebar-300' : 'sidebar-100',
        'resizeSidebar',
      ]"
    >
      <img src="@/assets/SHASHETY.png" alt="" />
      <ul>
        <li>
          <router-link to="/"
            ><font-awesome-icon icon="home" /><span class="menu-text">{{
              $t("slideMenu.home")
            }}</span></router-link
          >
        </li>
        <li>
          <router-link to="/search"
            ><font-awesome-icon icon="search" /><span class="menu-text"
              >Search</span
            ></router-link
          >
        </li>
        <li>
          <router-link to="/live-tv"
            ><font-awesome-icon icon="tv" /><span class="menu-text"
              >LiveTV</span
            ></router-link
          >
        </li>
        <li>
          <router-link to="/catagories"
            ><font-awesome-icon icon="sitemap" /><span class="menu-text"
              >Catagories</span
            ></router-link
          >
        </li>
      </ul>
      <div
        class="sideBarBack"
        @click="rotateBackActive()"
        :class="rotateActive == false ? 'rotateBack' : ''"
      >
        <font-awesome-icon icon="backward" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideBar",
  data() {
    return { rotateActive: false };
  },
  methods: {
    rotateBackActive: function () {
      this.rotateActive = !this.rotateActive;
    },
  },
};
</script>
