<template>
  <!-- banner -->
  <div class="w-full h-96 overflow-hidden">
    <img
      class="w-full h-full object-cover"
      src="../assets/images/hotel_banner_01.jpg"
      alt="hotel"
    />
  </div>

  <!-- tag -->

  <div
    class="mt-10 mx-auto border-dotted border-t-2 border-b-2 border-primary py-3"
  >
    <div class="mx-auto flex justify-center items-center">
      <span class="text-gray">熱門快搜：</span>
      <ul class="flex items-center">
        <li
          v-for="(item, index) in tagList"
          :key="index"
          class="tagList font-SourceHanSerifTC text-primaryDark border border-primary rounded-full py-2 px-6 mx-2 hover:bg-search duration-300 cursor-pointer"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  </div>

  <!-- search -->
  <div class="w-hotelWidth mx-auto flex items-center mt-10">
    <p
      class="text-footerBg font-bold px-4 py-2 bg-white flex items-center border border-borderColor"
      v-for="item in listSelect"
      :key="item.text"
    >
      {{ item.text }}
      <img
        class="pl-2"
        :src="item.calendar"
        :alt="item.name"
        v-if="item.calendar"
      />
      <span class="flex-col pl-2" v-else>
        <img :src="item.up" :alt="item.name" />
        <img :src="item.down" :alt="item.down" />
      </span>
    </p>

    <div class="flex ml-auto items-center">
      <button
        v-for="(item, index) in searchBtn"
        :key="item.name"
        @click="btnClick(item.name)"
        class="flex items-center px-4 py-2 mx-1 rounded-md border border-primary text-primaryDark font-SourceHanSerifTC hover:bg-search duration-300"
      >
        <img :src="item.img" :alt="index" class="pr-2" />
        <span> {{ item.text }} </span>
      </button>
    </div>
  </div>
  <!-- warning -->
  <div
    class="w-hotelWidth mt-10 mx-auto flex items-center px-8 py-4 border border-primary"
  >
    <div
      class="w-4 h-4 border flex justify-center items-center border-red-600 rounded-full"
    >
      <i class="fa-solid fa-exclamation text-red-600 fa-xs"></i>
    </div>
    <span class="text-text px-2"
      >在出發之前，請查看最新的新冠肺炎（COVID-19）相關限制。</span
    >
    <span class="text-xs text-blue-400 cursor-pointer">了解更多</span>
  </div>

  <!-- discover area -->
  <div class="relative mt-28">
    <div class="w-hotLocationBgW h-hotLocationBgH bg-primaryLight p-4 mx-auto">
      <p class="text-lg font-bold p-2 text-left">熱門地區</p>
      <ul class="w-full flex items-center absolute top-16 left-0">
        <li
          v-for="item in hotLocation"
          :key="item.name"
          class="mx-2 w-hotLocationImgW hotLocationImg relative"
        >
          <img
            :src="item.img"
            :alt="item.name"
            class="w-full h-hotLocationImgH object-cover"
          />
        </li>
      </ul>
    </div>
    <div class="bg-footerBg w-60 h-10 absolute -top-3 left-0 bar"></div>
  </div>

  <!-- bag traveler -->
  <div class="w-travelWidth mx-auto mt-32">
    <h3 class="text-primaryDark text-3xl py-4">人氣輕旅、背包客類型住宿</h3>
    <p class="text-lg text-text">小資族首選，CP值最高背包客房推薦</p>
    <ul class="flex justify-center items-center mt-5">
      <li
        class="locationList relative border border-primary"
        v-for="(item, index) in bagTraveler"
        :key="index"
      >
        <img
          class="w-full h-locationImgH object-cover"
          :src="item.img"
          :alt="index"
        />
        <img
          class="absolute top-40 right-2 opacity-60"
          src="../assets/source/location/heart.png"
          alt="heart"
        />
        <div class="p-4">
          <div class="flex justify-between items-center">
            <h4 class="font-bold text-text text-left">{{ item.title }}</h4>
            <span class="text-black font-bold">{{ item.price }}</span>
          </div>
          <div class="flex items-center mt-14">
            <ul class="flex">
              <li v-for="(item, index) in item.stars" :key="index">
                <img :src="item.icon" :alt="index" />
              </li>
            </ul>
            <p class="text-left text-bannerDesc pl-4">{{ item.content }}</p>
            <div class="ml-auto">
              <i class="fa-solid fa-location-dot text-primary"></i>
              <span class="text-primary pl-2">{{ item.location }}</span>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
  <!-- popular bnb -->
  <div class="w-travelWidth mx-auto mt-32">
    <h3 class="text-primaryDark text-3xl py-4">人氣民宿、公寓類型住宿</h3>
    <p class="text-lg text-text">住宿選擇障礙嗎？ 那來看看大家都怎麼選</p>
    <ul class="flex justify-center items-center mt-5">
      <li
        class="locationList relative border border-primary"
        v-for="(item, index) in popularBnb"
        :key="index"
      >
        <img
          class="w-full h-locationImgH object-cover"
          :src="item.img"
          :alt="index"
        />
        <img
          class="absolute top-40 right-2 opacity-60"
          src="../assets/source/location/heart.png"
          alt="heart"
        />
        <div class="p-4">
          <div class="flex justify-between items-center">
            <h4 class="font-bold text-text text-left">{{ item.title }}</h4>
            <span class="text-black font-bold">{{ item.price }}</span>
          </div>
          <div class="flex items-center mt-14">
            <ul class="flex">
              <li v-for="(item, index) in item.stars" :key="index">
                <img :src="item.icon" :alt="index" />
              </li>
            </ul>
            <p class="text-left text-bannerDesc pl-4">{{ item.content }}</p>
            <div class="ml-auto">
              <i class="fa-solid fa-location-dot text-primary"></i>
              <span class="text-primary pl-2">{{ item.location }}</span>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>

  <!-- secret discount -->
  <div class="w-full bg-search py-10">
    <div class="w-travelWidth mx-auto">
      <h3 class="text-3xl text-primaryDark text-left font-bold py-4">
        訂閱以查看秘密優惠
      </h3>
      <input
        type="text"
        class="border border-primary mr-4 w-hotelInputWidth p-3 focus:ring-2 outline-none"
      />
      <button
        class="bg-footerBg text-white font-bold p-3 rounded-lg hover:bg-primaryDark duration-300"
      >
        立即註冊
      </button>
    </div>
  </div>

  <!-- popular goal -->
  <div class="w-travelWidth mx-auto flex items-center mt-20">
    <img
      class="w-1/3 h-96 object-cover"
      src="../assets/images/hotel_hot_goal.jpg"
      alt="goal"
    />
    <div class="w-2/3 p-10">
      <h3 class="text-3xl font-bold text-primaryDark text-left mb-5">
        熱門目的地
      </h3>
      <ul class="flex flex-wrap">
        <li
          class="text-left w-1/5 pb-4 cursor-pointer"
          v-for="(item, index) in goal"
          :key="index"
        >
          <h3 class="text-primaryDark py-2 font-bold">{{ item.country }}</h3>
          <p class="text-primary">{{ item.room }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hotel",
  data() {
    return {
      tagList: ["必吃", "網美餐廳", "名產", "賞花", "祭典與節慶", "道地美食"],
      listSelect: [
        {
          text: "選擇地點",
          name: "location",
          up: require("../assets/source/location/arrow-up.png"),
          down: require("../assets/source/location/arrow-down.png"),
        },
        {
          text: "入住 ~ 退房",
          name: "check room",
          calendar: require("../assets/source/search/calendar.png"),
        },
        {
          text: "入住人數",
          name: "people",
          up: require("../assets/source/location/arrow-up.png"),
          down: require("../assets/source/location/arrow-down.png"),
        },
      ],
      searchBtn: [
        {
          img: require("../assets/source/location/search.png"),
          name: "search",
          text: "搜尋",
        },
        {
          img: require("../assets/source/location/filter.png"),
          name: "filter",
          text: "篩選",
        },
      ],
      hotLocation: [
        {
          name: "tainan",
          img: require("../assets/images/hotel_search_01.jpg"),
        },
        {
          name: "tremple",
          img: require("../assets/images/hotel_search_02.jpg"),
        },
        {
          name: "island",
          img: require("../assets/images/home_banner_01.jpg"),
        },
        {
          name: "taipei",
          img: require("../assets/images/home_travel_hot_03.jpg"),
        },
      ],
      bagTraveler: [
        {
          img: require("../assets/images/hotel_category_01.jpg"),
          title: "承億輕旅",
          price: "TWD 2,200 起",
          stars: [
            {
              icon: require("../assets/source/location/star-solid.png"),
              checked: true,
            },
            {
              icon: require("../assets/source/location/star-solid.png"),
              checked: true,
            },
            {
              icon: require("../assets/source/location/star-solid.png"),
              checked: true,
            },
            {
              icon: require("../assets/source/location/star.png"),
              checked: false,
            },
            {
              icon: require("../assets/source/location/star.png"),
              checked: false,
            },
          ],
          content: "346則評語",
          location: "Chiayi",
        },
        {
          img: require("../assets/images/hotel_category_02_transform.jpg"),
          title: "友愛街 U.i.j Hotel&hostel",
          price: "TWD 2,200 起",
          stars: [
            {
              icon: require("../assets/source/location/star-solid.png"),
              checked: true,
            },
            {
              icon: require("../assets/source/location/star-solid.png"),
              checked: true,
            },
            {
              icon: require("../assets/source/location/star-solid.png"),
              checked: true,
            },
            {
              icon: require("../assets/source/location/star.png"),
              checked: false,
            },
            {
              icon: require("../assets/source/location/star.png"),
              checked: false,
            },
          ],
          content: "620則評語",
          location: "Tainan",
        },
        {
          img: require("../assets/images/hotel_category_03.jpg"),
          title: "帕鉑舍旅 PAPO’A HOTEL",
          price: "TWD 2,200 起",

          stars: [
            {
              icon: require("../assets/source/location/star-solid.png"),
              checked: true,
            },
            {
              icon: require("../assets/source/location/star-solid.png"),
              checked: true,
            },
            {
              icon: require("../assets/source/location/star-solid.png"),
              checked: true,
            },
            {
              icon: require("../assets/source/location/star.png"),
              checked: false,
            },
            {
              icon: require("../assets/source/location/star.png"),
              checked: false,
            },
          ],
          content: "346則評語",
          location: "Kaohsiung",
        },
      ],
      popularBnb: [
        {
          img: require("../assets/images/hotel_hot_01.jpg"),
          title: "承億輕旅",
          price: "TWD 2,200 起",
          stars: [
            {
              icon: require("../assets/source/location/star-solid.png"),
              checked: true,
            },
            {
              icon: require("../assets/source/location/star-solid.png"),
              checked: true,
            },
            {
              icon: require("../assets/source/location/star-solid.png"),
              checked: true,
            },
            {
              icon: require("../assets/source/location/star.png"),
              checked: false,
            },
            {
              icon: require("../assets/source/location/star.png"),
              checked: false,
            },
          ],
          content: "346則評語",
          location: "Chiayi",
        },
        {
          img: require("../assets/images//hotel_hot_02.jpg"),
          title: "友愛街 U.i.j Hotel&hostel",
          price: "TWD 2,200 起",
          stars: [
            {
              icon: require("../assets/source/location/star-solid.png"),
              checked: true,
            },
            {
              icon: require("../assets/source/location/star-solid.png"),
              checked: true,
            },
            {
              icon: require("../assets/source/location/star-solid.png"),
              checked: true,
            },
            {
              icon: require("../assets/source/location/star.png"),
              checked: false,
            },
            {
              icon: require("../assets/source/location/star.png"),
              checked: false,
            },
          ],
          content: "620則評語",
          location: "Tainan",
        },
        {
          img: require("../assets/images//hotel_hot_03.jpg"),
          title: "帕鉑舍旅 PAPO’A HOTEL",
          price: "TWD 2,200 起",

          stars: [
            {
              icon: require("../assets/source/location/star-solid.png"),
              checked: true,
            },
            {
              icon: require("../assets/source/location/star-solid.png"),
              checked: true,
            },
            {
              icon: require("../assets/source/location/star-solid.png"),
              checked: true,
            },
            {
              icon: require("../assets/source/location/star.png"),
              checked: false,
            },
            {
              icon: require("../assets/source/location/star.png"),
              checked: false,
            },
          ],
          content: "346則評語",
          location: "Kaohsiung",
        },
      ],
      goal: [
        {
          country: "新北市",
          room: "共有201住宿",
        },
        {
          country: "台北市",
          room: "共有201住宿",
        },
        {
          country: "基隆市",
          room: "共有201住宿",
        },
        {
          country: "桃園市",
          room: "共有201住宿",
        },
        {
          country: "宜蘭市",
          room: "共有201住宿",
        },
        {
          country: "花蓮縣",
          room: "共有201住宿",
        },
        {
          country: "花蓮市",
          room: "共有201住宿",
        },
        {
          country: "台南市",
          room: "共有201住宿",
        },
        {
          country: "桃園市",
          room: "共有201住宿",
        },
        {
          country: "新竹市",
          room: "共有201住宿",
        },
        {
          country: "高雄市",
          room: "共有201住宿",
        },
        {
          country: "嘉義市",
          room: "共有201住宿",
        },
        {
          country: "雲林市",
          room: "共有201住宿",
        },
        {
          country: "彰化市",
          room: "共有201住宿",
        },
        {
          country: "台中市",
          room: "共有201住宿",
        },
        {
          country: "屏東市",
          room: "共有201住宿",
        },
        {
          country: "台東市",
          room: "共有201住宿",
        },
        {
          country: "苗栗市",
          room: "共有201住宿",
        },
        {
          country: "南投市",
          room: "共有201住宿",
        },
        {
          country: "吉安鄉",
          room: "共有201住宿",
        },
      ],
    };
  },
};
</script>

<style>
.tagList:last-child {
  margin-right: 0;
}

.locationList {
  width: 32.3333%;
  margin: 0 1% 3% 1%;
}

.locationList:nth-child(3n + 1) {
  margin-left: 0;
}

.locationList:nth-child(3n + 3) {
  margin-right: 0;
}
</style>
