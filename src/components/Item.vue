/* eslint-disable vue/multi-word-component-names */
<template>
  <div class="single-item container-fluid">
    <VueSlickCarousel
      v-bind="settings"
      :slidesToShow="numOfSlides.num"
      v-if="getOfInfoItems.length"
    >
      <div
        class="item-list"
        v-for="infoItem in getOfInfoItems"
        :key="infoItem.id"
      >
        <router-link :to="'/Single/' + infoItem.id">
          <div class="image-box">
            <img :src="infoItem.image" alt="index" />
          </div>
        </router-link>
        <div class="ShowMe">
          <button
            :class="[infoItem.like ? 'green' : 'gray']"
            @click="toggle(infoItem.id)"
          >
            Like
          </button>
        </div>
      </div>
    </VueSlickCarousel>
  </div>
</template>
<script>
export default {
  name: "single-item",
  props: ["numOfSlide"],
  data: () => ({
    settings: {
      dots: false,
      arrows: false,
      focusOnSelect: true,
      infinite: true,
      autoplay: true,
      speed: 500,
      slidesToScroll: 1,
      touchThreshold: 2,
    },
  }),
  computed: {
    getOfInfoItems() {
      const data = this.$store.getters["infoItems/getOfInfoItems"];
      return data.filter((info) => info.cover == this.numOfSlide.cover);
    },
    numOfSlides() {
      return this.numOfSlide;
    },
  },
  methods: {
    toggle: function (id) {
      this.$store.dispatch("infoItems/toggle", id);
    },
  },
};
</script>

<style scoped lang="scss">
.single-item {
  .item-list {
    .image-box {
      height: 400px;
      margin: 10px;
      img {
        display: block;
        width: 100%;
        height: 100%;
        border-radius: 10px;
      }
    }
    .ShowMe {
      display: flex;
      justify-content: center;
      width: 100%;
      button {
        border: none;
        border-radius: 8px;
        background: dimgrey;
        font-size: 14px;
        margin: 0 5px;
        width: 80%;
        outline: none;
        transition: all 0.5s linear;
        &:hover {
          transform: scale(1.1);
        }
      }
      .green {
        background: rgb(39, 207, 193);
        color: white;
      }
      .gray {
        background: dimgrey;
        color: white;
      }
    }
  }
}
::-webkit-scrollbar {
  width: 0; /* Remove scrollbar space */
  background: transparent; /* Optional: just make scrollbar invisible */
}
/* Optional: show position indicator in red */
::-webkit-scrollbar-thumb {
  background: transparent;
}
.image-width-full {
  width: 100%;
}
.image-width {
  width: 100%;
}
</style>
