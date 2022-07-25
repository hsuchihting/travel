<template>
  <!-- swiper -->
  <Swiper
    :slides-per-view="1"
    :space-between="50"
    :modules="modules"
    :pagination="{ clickable: true }"
    :autoplay="autoplayOptions"
  >
    <SwiperSlide v-for="(item, index) in banner" :key="index">
      <img :src="item.img" :alt="index" />
    </SwiperSlide>

    <div class="swiper-pagination"></div>
  </Swiper>
  <!-- tag -->
  <div
    class="w-full mt-10 border-dotted border-t-2 border-b-2 border-primary py-3"
  >
    <div class="flex justify-center items-center">
      <span class="text-gray">熱門快搜：</span>
      <ul class="flex items-center">
        <li
          v-for="(item, index) in tagList"
          :key="index"
          class="font-SourceHanSerifTC text-primaryDark border border-primary rounded-full py-2 px-6 mx-2 hover:bg-search duration-300 cursor-pointer"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  </div>

  <!-- info -->
  <div class="w-full mt-10 h-52 bg-search relative">
    <div class="text-left absolute bottom-5 left-5">
      <p class="text-3xl font-bold text-primaryDark">旅行</p>
      <p class="text-3xl font-bold text-primaryDark">必吃美食</p>
    </div>
    <div class="w-5 h-40 bg-primary absolute top-5 left-52"></div>
    <p class="text-gray font-bold absolute top-8 left-64">
      「甜」是台灣南部口味的代表詞，高雄擁有多元族群，形成獨特的飲食文化；經過店家們巧思變化，將當地食材、農漁特產烹煮成道地的高雄美食。
    </p>
    <ul class="flex items-center absolute -bottom-10 right-16">
      <li class="mr-3 shadow-sm" v-for="item in infoImg" :key="item.name">
        <img
          class="w-infoImgW h-infoImgH rounded-infoImgRounded shadow-md shadow-gray-500 object-cover"
          :src="item.img"
          :alt="item.name"
        />
      </li>
    </ul>
  </div>

  <div class="w-[200px] bg-[#fff] py-4 mt-10">123</div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue/swiper-vue";
import { Pagination, Autoplay } from "swiper";
import "swiper/swiper.min.css";

export default {
  name: "Food",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      modules: [Pagination, Autoplay],
      autoplayOptions: {
        delay: 2000,
        loop: true,
      },
      banner: [
        {
          img: require("../assets/images/food_banner_01.jpg"),
        },
        {
          img: require("../assets/images/food_buy_04.jpg"),
        },
        {
          img: require("../assets/images/food_category_04.jpg"),
        },
        {
          img: require("../assets/images/food_category_05.jpg"),
        },
        {
          img: require("../assets/images/food_hot_02.jpg"),
        },
        // {
        //   img: require("../assets/images/food_need_02.jpg"),
        // },
      ],
      tagList: ["必吃", "網美餐廳", "名產", "賞花", "祭典與節慶", "道地美食"],
      infoImg: [
        {
          name: "food01",
          img: require("../assets/images/food_need_03.jpg"),
        },
        {
          name: "food02",
          img: require("../assets/images/food_need_02.png"),
        },
      ],
    };
  },
};
</script>

<style>
.swiper {
  width: 100%;
  height: 425px;
}
.swiper-slide img {
  width: 100%;
  object-fit: cover;
  height: 100%;
}
</style>
