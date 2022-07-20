<template>
  <header-pattern></header-pattern>
  <div class="container mx-auto">
    <logo-info></logo-info>

    <ul class="mt-20 flex justify-center items-center tabBlock mb-10">
      <li
        v-for="item in tabList"
        :key="item.name"
        class="px-5 py-5 text-center border-b-2 border-primaryDark cursor-pointer tab"
        :class="{ active: item.status }"
        @click="tabChecked(item.name, item.path)"
      >
        <img class="w-16 h-16" :src="item.img" :alt="item.name" />
        <p
          class="text-primaryDark text-lg text-center pt-3 font-SourceHanSerifTC"
        >
          {{ item.title }}
          <span v-if="item.status">{{ item.activeName }}</span>
        </p>
      </li>
    </ul>

    <div class="text-center mt-10">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import HeaderPattern from "./components/HeaderPattern.vue";
import LogoInfo from "./components/LogoInfo.vue";

export default {
  components: {
    HeaderPattern,
    LogoInfo,
  },
  data() {
    return {
      tabList: [
        {
          path: "/food",
          name: "food",
          title: "那餚",
          activeName: "・可口",
          status: true,
          img: require("./assets/source/location/food@2x.png"),
        },
        {
          path: "/location",
          name: "location",
          title: "那景",
          activeName: "・醉人",
          status: false,
          img: require("./assets/source/location/mountain.png"),
        },
        {
          path: "/hotel",
          name: "hotel",
          title: "那房",
          activeName: "・舒適",
          status: false,
          img: require("./assets/source/location/bed.png"),
        },
      ],
    };
  },
  methods: {
    tabChecked(id, path) {
      this.tabList.find((item) => {
        item.status = id === item.name;
        this.$router.push(path);
      });
    },
    btnClick(id) {
      this.searchBtn.find((item) => {
        if (id === item.name) {
          this.$router.push("/search-result");
        }
      });
    },
  },
};
</script>

<style>
.tab {
  width: 170px;
  text-align: center;
}

.tabBlock {
  position: relative;
}

.tabBlock::before {
  content: "";
  width: 150px;
  position: absolute;
  bottom: 1.5px;
  left: 363px;
  border-bottom: 2px solid #4b5927;
}

.tabBlock::after {
  content: "";
  width: 150px;
  position: absolute;
  bottom: 1.5px;
  right: 363px;
  border-bottom: 2px solid #4b5927;
}

.tab img {
  display: inline;
}

.tab.active {
  @apply border-b-0 border-2;
  z-index: 10;
  border-bottom: 2px solid #fff;
}

.tab.active > img {
  display: inline;
}
</style>