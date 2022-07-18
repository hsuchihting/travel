<template>
  <header-pattern></header-pattern>
  <div class="container mx-auto">
    <logo-info></logo-info>

    <div class="w-[714px] mt-20">
      <ul class="flex justify-center items-center">
        <li
          v-for="item in tabList"
          :key="item.name"
          class="px-10 py-10 text-center border-b-2 border-white active:border-b-primary cursor-pointer"
          :class="{ active: item.status }"
          @click="tabChecked(item.name, item.path)"
        >
          <img class="w-20 h-20" :src="item.img" :alt="item.name" />
          <p
            class="text-primaryDark text-lg text-center pt-3 font-SourceHanSerifTC"
          >
            {{ item.title }}
            <span v-if="item.status">{{ item.activeName }}</span>
          </p>
        </li>
      </ul>
    </div>

    <div class="text-center">
      <router-view></router-view>
    </div>
  </div>
</template>

<style>

</style>

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
          img: "./assets/source/location/food.png",
        },
        {
          path: "/location",
          name: "location",
          title: "那景",
          activeName: "・醉人",
          status: false,
          img: "./assets/source/location/mountain.png",
        },
        {
          path: "/hotel",
          name: "hotel",
          title: "那房",
          activeName: "・舒適",
          status: false,
          img: "./assets/source/location/bed.png",
        },
      ],
    };
  },
  methods: {
    tabChecked(id, path) {
      console.log(id);
      this.tabList.find((item) => {
        item.status = id === item.name;
        this.$router.push(path);
      });
    },
  },
};
</script>
