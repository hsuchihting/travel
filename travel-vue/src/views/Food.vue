<template>
  <!-- swiper -->
  <Swiper
    :slides-per-view="1"
    :space-between="50"
    :modules="modules"
    :pagination="{ clickable: true }"
    :autoplay="autoplayOptions"
    effect="fade"
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

  <!-- category -->
  <div class="w-full mt-32">
    <div class="flex items-center">
      <ul class="w-1/2 flex items-center mr-2">
        <li
          class="w-1/3 h-96 mr-2 overflow-hidden cursor-pointer relative foodList"
          v-for="(item, index) in foodIntroductionList"
          :key="index"
        >
          <img
            class="w-full h-full object-cover"
            :src="item.img"
            :alt="item.name"
          />
          <p
            class="absolute inset-0 flex justify-center items-end bg-gradient-to-t from-black to-transparent hover:text-white hover:text-2xl opacity-0 hover:opacity-100 duration-300 pb-5"
          >
            {{ item.name }}
          </p>
        </li>
      </ul>
      <div class="w-1/2 h-96">
        <img
          class="w-full h-full object-cover"
          src="../assets/images/food_category_04.jpg"
          alt=""
        />
      </div>
    </div>

    <div class="flex items-center mt-5">
      <div class="w-1/2 h-96 mr-2">
        <img
          class="w-full h-full object-cover"
          src="../assets/images/food_category_05.jpg"
          alt=""
        />
      </div>
      <ul class="w-1/2 flex items-center">
        <li
          class="w-1/3 h-96 mr-2 overflow-hidden cursor-pointer relative dessertList"
          v-for="(item, index) in desertList"
          :key="index"
        >
          <img
            class="w-full h-full object-cover"
            :src="item.img"
            :alt="index"
          />
          <p
            class="absolute inset-0 flex justify-center items-end bg-gradient-to-t from-black to-transparent hover:text-white hover:text-2xl opacity-0 hover:opacity-100 duration-300 pb-5"
          >
            {{ item.name }}
          </p>
        </li>
      </ul>
    </div>
  </div>

  <!-- food introduction -->
  <div class="w-3/4 h-96 mt-40 relative">
    <img
      class="w-full h-full object-cover"
      src="../assets/images/food_hot_01_transform.jpg"
      alt=""
    />
    <div
      class="absolute -right-72 bottom-10 shadow-md shadow-black w-96 p-6 text-left bg-white bg-opacity-70"
    >
      <p class="text-primaryDark pb-10">正宗義大利 真材實料</p>

      <p class="text-4xl text-primaryDark pb-4">23 號街角</p>
      <p class="text-primaryDark">好友相聚聚餐必選之地</p>
    </div>
  </div>

  <div class="w-3/4 h-96 ml-auto mt-10 relative">
    <div
      class="absolute -left-72 bottom-10 shadow-md shadow-black w-96 p-6 text-left bg-white bg-opacity-70"
    >
      <p class="text-primaryDark pb-10">資深老饕 今日推薦</p>

      <p class="text-4xl text-primaryDark pb-4">又見ㄧ炊煙</p>
      <p class="text-primaryDark">食物好吃，風景美麗！ 高CP值的無菜單料理</p>
    </div>
    <img
      class="w-full h-full object-cover"
      src="../assets/images/food_hot_02.jpg"
      alt=""
    />
  </div>

  <!-- buy -->

  <div class="mt-40">
    <h3 class="text-4xl py-8 text-primaryDark font-bold">
      買東西、吃東西、買東西、吃東西
    </h3>
    <p class="text-lg text-primaryDark mb-8">伴手禮、小吃不錯過</p>

    <ul class="flex items-center">
      <li
        class="mx-2 w-1/4 h-80 overflow-hidden cursor-pointer relative"
        v-for="(item, index) in buyList"
        :key="index"
      >
        <img
          class="w-full h-full object-cover"
          :src="item.img"
          :alt="item.key"
        />
        <p
          class="absolute inset-x-0 bottom-0 flex justify-center items-end opacity-0 hover:opacity-100 hover:text-white hover:bg-black bg-opacity-0 hover:bg-opacity-50 py-4 duration-300"
        >
          {{ item.name }}
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue/swiper-vue";
import { Pagination, Autoplay, EffectFade } from "swiper";
import "swiper/swiper.min.css";

export default {
  name: "Food",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      modules: [Pagination, Autoplay, EffectFade],
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
      foodIntroductionList: [
        {
          name: "泰 式",
          img: require("../assets/images/food_category_01.jpg"),
        },
        {
          name: "日 式",
          img: require("../assets/images/food_category_02.jpg"),
        },
        {
          name: "港 式",
          img: require("../assets/images/food_category_03.jpg"),
        },
      ],
      desertList: [
        {
          name: "咖 啡",
          img: require("../assets/images/food_category_05.jpg"),
        },
        {
          name: "鹹 點",
          img: require("../assets/images/food_category_06.jpg"),
        },
        {
          name: "甜 點",
          img: require("../assets/images/food_category_08.jpg"),
        },
      ],
      buyList: [
        {
          name: "走跳夜市",
          key: "nightMarket",
          img: require("../assets/images/home_travel_hot_01.jpg"),
        },
        {
          name: "伴手禮推薦",
          key: "gift",
          img: require("../assets/images/food_buy_02.jpg"),
        },
        {
          name: "購物商圈",
          key: "shopping",
          img: require("../assets/images/food_buy_03.jpg"),
        },
        {
          name: "知名小吃店",
          key: "restaurant",
          img: require("../assets/images/food_buy_04.jpg"),
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

.foodList:last-child {
  margin-right: 0;
}

.dessertList:last-child {
  margin-right: 0;
}
</style>
