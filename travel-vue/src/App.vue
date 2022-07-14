<template>
  <header-pattern></header-pattern>
  <div class="mt-10 w-full flex">
    <div class="w-1/5 text-center">
      <img
        src="./assets/icon/logo.png"
        alt="logo"
        class="mx-auto mt-20 w-[172px]"
      />

      <!-- 列表 -->
      <ul class="mt-20 mx-auto">
        <li v-for="item in linkArr" :key="item.name" class="mx-auto pb-3">
          <a :href="`${mainUrl}${item.path}`" class="text-primary text-2xl">{{
            item.name
          }}</a>
        </li>
      </ul>

      <!-- 社群連結 -->
      <ul class="mt-10 mx-auto flex">
        <li v-for="item in mediaUrl" :key="item.name" class=" py-5">
          <a href="#"> 
            <div v-html="item.icon"></div>
            </a>
        </li>
      </ul>
    </div>
    <div class="w-4/5">
      <img src="./assets/images//home_banner_01.jpg" alt="home banner" />
    </div>
  </div>
</template>

<style></style>

<script>
import HeaderPattern from "./components/HeaderPattern.vue";

export default {
  components: {
    HeaderPattern,
  },
  data() {
    return {
      mainUrl: "",
      linkArr: [
        {
          name: "那餚・可口",
          path: "/food",
        },
        {
          name: "那景・醉人",
          path: "/location",
        },
        {
          name: "那房・舒適",
          path: "/hotel",
        },
        {
          name: "山海・聯繫",
          path: "#contact",
        },
      ],
      mediaUrl: [
        {
          name: "facebook",
          icon: `<font-awesome-icon icon="fa-brands fa-facebook-square" />`,
        },
        {
          name: "instagram",
          icon: `<font-awesome-icon icon="fa-brands fa-instagram" />`,
        },
        {
          name: "youtube",
          icon: `<font-awesome-icon icon="fa-brands fa-youtube" />`,
        },
      ],
    };
  },
  mounted() {
    let urlArr = [];
    urlArr = window.location.href.split("/");
    let str = `${urlArr[0]}//${urlArr[2]}`;
    console.log(str);
    this.mainUrl = str;
  },
};
</script>
