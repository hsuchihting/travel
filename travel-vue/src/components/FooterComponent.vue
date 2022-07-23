<template>
  <div class="mt-20 w-full bg-footerBg">
    <div class="container mx-auto py-20 flex">
      <div class="w-1/4 flex items-start">
        <img src="../assets/source/home/logo.png" alt="logo" />
        <ul class="ml-auto">
          <li
            class="text-primaryLight pb-4"
            v-for="(item, index) in menu"
            :key="index"
          >
            <a href="#"> {{ item }} </a>
          </li>
        </ul>
      </div>
      <div class="w-2/4 mx-32">
        <ul class="flex flex-wrap px-4">
          <li
            class="text-primaryLight pb-4 w-1/4"
            v-for="(item, index) in info"
            :key="index"
          >
            <a href="#"> {{ item }} </a>
          </li>
        </ul>
      </div>
      <div class="w-1/4">
        <ul>
          <li class="text-primaryLight pb-4">
            <p>服務電話</p>
            <p>0800-456-798／+886-2-1289-8921</p>
          </li>
          <li class="text-primaryLight pb-4">
            <p>連絡信箱</p>
            <p>mountainsea@gmail.com</p>
          </li>
          <li class="text-primaryLight pb-4">
            <p>關注我們</p>
            <ul class="flex items-center pt-2">
              <li>
                <a href="#">
                  <img src="../assets/source/location/fb.png" alt="fb" />
                </a>
              </li>
              <li class="px-3">
                <a href="#">
                  <img src="../assets/source/location/ig.png" alt="ig" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="../assets/source/location/youtube.png" alt="yt" />
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="w-full bg-primaryDark py-4 text-center text-white">
    Copyleft 2022 © All Rights Design by Ya Hsiu. Front-end by Tim Hsu
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: ["那餚・可口", "那景・醉人", "那房・舒適", "山海・聯繫"],
      info: [
        "特色觀光",
        "友善旅遊",
        "熱門地點",
        "必吃美食",
        "美食商圈",
        "伴手禮推薦",
        "尋找夜市",
        "秘境探索",
        "景點快搜",
        "旅遊地圖",
        "網美景點",
        "私隱政策",
        "Cookie 政策",
        "使用條款",
        "網頁導覽",
      ],
    };
  },
};
</script>