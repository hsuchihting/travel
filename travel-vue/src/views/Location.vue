<template>
  <!-- search -->
  <div class="flex justify-center items-center">
    <input
      type="text"
      placeholder="輸入搜尋關鍵字"
      class="w-locationInputW px-4 py-2 mr-5 text-sm text-primaryDark bg-search rounded-md outline-none focus:ring-2"
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
      <div class="flex justify-between items-center">
        <p class="text-xl text-text font-SourceHanSerifTC">
          一月 <span class="pr-5"></span> January
        </p>
        <div class="flex items-center">
          <img
            class="mr-5"
            src="../assets/source/location/24°C.png"
            alt="temperature"
          />
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
    <p class="text-gray font-bold absolute top-8 left-64">
      田寮「月世界」特殊景觀在地理學稱為「惡地」，經年累月由雨、河水侵蝕，將泥沙堆積在泥岩上，泥沙與泥岩混合經由風化形成。
    </p>
    <ul class="flex items-center absolute -bottom-10 right-16">
      <li class="mr-3" v-for="item in infoImg" :key="item.name">
        <img
          class="w-infoImgW h-infoImgH rounded-infoImgRounded object-cover shadow-md shadow-gray-500"
          :src="item.img"
          :alt="item.name"
        />
      </li>
    </ul>
  </div>

  <!-- #region list -->
  <div class="w-full mt-20">
    <p class="text-black text-sm font-bold text-left py-4">
      共有 203 處景點......
    </p>
    <div class="bg-search p-4 flex justify-between">
      <div class="flex items-center">
        <div v-for="item in listSelect" :key="item.text">
          <p
            class="text-footerBg font-bold px-4 py-2 bg-white flex items-center border border-borderColor"
          >
            {{ item.text }}
            <span class="flex-col pl-2">
              <img :src="item.up" :alt="item.name" />
              <img :src="item.down" :alt="item.down" />
            </span>
          </p>
        </div>
      </div>

      <div class="flex items-center">
        <p
          class="text-footerBg font-bold px-4 py-2 bg-white border-borderColor border rounded-md cursor-pointer"
        >
          <i class="fa-solid fa-heart text-footerBg pr-2"></i>收藏名單
        </p>
      </div>
    </div>
  </div>
  <!-- #endregion -->

  <!-- locations -->
  <div class="w-full mt-5">
    <ul class="flex flex-wrap">
      <li
        class="locationList relative"
        v-for="(item, index) in locations"
        :key="index"
      >
        <img
          class="absolute top-2 right-2 z-10 opacity-60"
          src="../assets/source/location/heart.png"
          alt="heart"
        />
        <img
          class="w-full h-locationImgH object-cover"
          :src="item.img"
          :alt="index"
        />
        <div class="flex justify-between items-center">
          <h4 class="font-bold text-text">{{ item.title }}</h4>

          <ul class="flex items-center">
            <li class="py-4" v-for="(item, index) in item.stars" :key="index">
              <img :src="item.icon" :alt="index" />
            </li>
          </ul>
        </div>
        <p class="text-left text-bannerDesc">{{ item.content }}</p>
      </li>
    </ul>
  </div>

  <!-- pagination -->
  <ul class="flex justify-center items-center">
    <img
      src="../assets/source/location/arrow-left-muti.svg"
      alt="arrow-left-muti"
    />
    <img
      class="transform rotate-180 px-4"
      src="../assets/source/home/angle-right.png"
      alt="arrow-right"
    />
    <li
      class="flex items-center px-5"
      v-for="(item, index) in pagination"
      :key="index"
      :class="{ checked: item.checked }"
    >
      <p>{{ item.page }}</p>
    </li>
    <img
      class="px-4"
      src="../assets/source/home/angle-right.png"
      alt="arrow-right"
    />
    <img
      src="../assets/source/location/arrow-right-muti.svg"
      alt="arrow-right"
    />
  </ul>

  <!-- hot location -->
  <div class="relative">
    <div
      class="w-hotLocationBgW h-hotLocationBgH bg-primaryLight p-4 mt-28 mx-auto"
    >
      <p class="text-lg font-bold p-2 text-left">熱門景點</p>
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
      listSelect: [
        {
          text: "精選推薦",
          name: "up",
          up: require("../assets/source/location/arrow-up.png"),
          down: require("../assets/source/location/arrow-down.png"),
        },
        {
          text: "熱門瀏覽",
          name: "down",
          up: require("../assets/source/location/arrow-up.png"),
          down: require("../assets/source/location/arrow-down.png"),
        },
      ],
      locations: [
        {
          img: require("../assets/images/location_02.jpg"),
          title: "阿妹茶樓",
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
          content:
            "田寮「月世界」特殊景觀在地理學稱為「惡地」，經年累月由雨、河水侵蝕，將泥沙堆積在泥岩上，泥沙與泥岩混合經由風化形成。",
        },
        {
          img: require("../assets/images/location_03.jpg"),
          title: "擎天岡",
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
          content:
            "田寮「月世界」特殊景觀在地理學稱為「惡地」，經年累月由雨、河水侵蝕，將泥沙堆積在泥岩上，泥沙與泥岩混合經由風化形成。",
        },
        {
          img: require("../assets/images/location_04.jpg"),
          title: "龍山寺",
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
          content:
            "田寮「月世界」特殊景觀在地理學稱為「惡地」，經年累月由雨、河水侵蝕，將泥沙堆積在泥岩上，泥沙與泥岩混合經由風化形成。",
        },
        {
          img: require("../assets/images/location_05.jpg"),
          title: "十分瀑布",
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
          content:
            "田寮「月世界」特殊景觀在地理學稱為「惡地」，經年累月由雨、河水侵蝕，將泥沙堆積在泥岩上，泥沙與泥岩混合經由風化形成。",
        },
        {
          img: require("../assets/images/home_banner_01.jpg"),
          title: "龜山島",
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
          content:
            "田寮「月世界」特殊景觀在地理學稱為「惡地」，經年累月由雨、河水侵蝕，將泥沙堆積在泥岩上，泥沙與泥岩混合經由風化形成。",
        },
        {
          img: require("../assets/images/location_06.jpg"),
          title: "迷霧森林",
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
          content:
            "田寮「月世界」特殊景觀在地理學稱為「惡地」，經年累月由雨、河水侵蝕，將泥沙堆積在泥岩上，泥沙與泥岩混合經由風化形成。",
        },
        {
          img: require("../assets/images/home_travel_hot_02.jpg"),
          title: "西門町",
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
          content:
            "田寮「月世界」特殊景觀在地理學稱為「惡地」，經年累月由雨、河水侵蝕，將泥沙堆積在泥岩上，泥沙與泥岩混合經由風化形成。",
        },
        {
          img: require("../assets/images/location_07.jpg"),
          title: "中正紀念堂",
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
          content:
            "田寮「月世界」特殊景觀在地理學稱為「惡地」，經年累月由雨、河水侵蝕，將泥沙堆積在泥岩上，泥沙與泥岩混合經由風化形成。",
        },
        {
          img: require("../assets/images/location_08.jpg"),
          title: "平溪天燈",
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
          content:
            "田寮「月世界」特殊景觀在地理學稱為「惡地」，經年累月由雨、河水侵蝕，將泥沙堆積在泥岩上，泥沙與泥岩混合經由風化形成。",
        },
      ],
      pagination: [
        {
          page: "1",
          checked: true,
        },
        {
          page: "2",
          checked: false,
        },
        {
          page: "3",
          checked: false,
        },
        {
          page: "...",
          checked: false,
        },
      ],
      hotLocation: [
        {
          name: "flower",
          img: require("../assets/images/location_hot_01.jpg"),
        },
        {
          name: "monkey",
          img: require("../assets/images/location_hot_02.jpg"),
        },
        {
          name: "building",
          img: require("../assets/images/location_hot_03.jpg"),
        },
        {
          name: "street",
          img: require("../assets/images/location_hot_04.jpg"),
        },
      ],
    };
  },
};
</script>

<style>
.locationList {
  width: 31.3333%;
  margin: 0 2% 3% 1%;
}

.locationList:last-child {
  margin-right: 0;
}

.locationList:nth-child(3n + 1) {
  margin-left: 0;
}

.locationList:nth-child(3n + 3) {
  margin-right: 0;
}

.checked {
  width: 28px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #4b5927;
  background-color: #a8b67e26;
}

.hotLocationImg:first-child {
  margin-left: 0;
}

.hotLocationImg:last-child {
  margin-right: 0;
}

.bar {
  z-index: -10;
}
</style>
