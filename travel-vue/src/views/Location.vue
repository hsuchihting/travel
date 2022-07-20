<template>
  <!-- search -->
  <div class="flex justify-center items-center">
    <input
      type="text"
      placeholder="輸入搜尋關鍵字"
      class="w-500px px-4 py-2 mr-5 text-sm text-primaryDark bg-search rounded-md outline-none focus:ring-2"
    />
    <button
      v-for="(item, index) in searchBtn"
      :key="item.name"
      @click="btnClick(item.name)"
      class="flex items-center px-4 py-1 mx-1 rounded-md border border-primary text-primaryDark font-SourceHanSerifTC hover:bg-search duration-300"
    >
      <img :src="item.img" :alt="index" class="pr-2" />
      <span> {{ item.text }} </span>
    </button>
  </div>

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

  <!-- ads -->
  <div class="w-full flex justify-center mt-10">
    <div class="w-3/4">
      <img src="../assets/images/location_01.jpg" alt="location" />
    </div>
    <div class="w-1/4 ml-16">
      <div class="flex justify-between">
        <p class="text-xl text-text font-SourceHanSerifTC">一月 January</p>
        <div class="flex items-center">
          <img src="../assets/source/location/24°C.png" alt="temperature" />
          <img src="../assets/source/location/sun.png" alt="weather" />
        </div>
      </div>
      <div class="mt-3 h-4 bg-text"></div>
      <div class="mt-2 border-text border"></div>
      <div class="mt-4 h-calendar border-l border-b border-text relative">
        <img src="../assets/source/location/calendar.jpg" alt="calendar" />
      </div>
    </div>
  </div>

  <!-- info -->
  <div class="w-full mt-10 h-52 bg-search relative">
    <div class="text-left absolute bottom-5 left-5">
      <p class="text-3xl font-bold text-primaryDark">賞櫻</p>
      <p class="text-3xl font-bold text-primaryDark">好去處</p>
    </div>
    <div class="w-5 h-40 bg-primary absolute top-5 left-52"></div>
    <p class="text-gray absolute top-8 left-64">
      田寮「月世界」特殊景觀在地理學稱為「惡地」，經年累月由雨、河水侵蝕，將泥沙堆積在泥岩上，泥沙與泥岩混合經由風化形成。
    </p>
    <ul class="flex items-center absolute -bottom-10 left-52">
      <li class="mr-3" v-for="item in infoImg" :key="item.name">
        <img
          class="w-infoImgW h-infoImgH rounded-3xl object-cover"
          :src="item.img"
          :alt="item.name"
        />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Location",
  data() {
    return {
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
      tagList: ["櫻花", "司馬庫斯", "露營", "賞花", "祭典與節慶", "謐靜賞花"],
      infoImg: [
        {
          name: "sakura01",
          img: require("../assets/images/sakura_01.jpg"),
        },
        {
          name: "sakura02",

          img: require("../assets/images/sakura_02.jpg"),
        },
      ],
    };
  },
};
</script>
