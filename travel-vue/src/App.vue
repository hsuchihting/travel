<template>
  <header-pattern></header-pattern>
  <div class="container mx-auto">
    <logo-info></logo-info>

    <ul class="flex justify-center">
      <li class="px-5 py-5">
        <router-link to="/location">location</router-link>
      </li>
      <li class="px-5 py-5">
        <router-link to="/food">food</router-link>
      </li>
      <li class="px-5 py-5">
        <router-link to="/hotel">hotel</router-link>
      </li>
    </ul>
    <div class=" text-center">
      <router-view></router-view>
    </div>
  </div>
</template>

<style></style>

<script>
import HeaderPattern from "./components/HeaderPattern.vue";
import LogoInfo from "./components/LogoInfo.vue";

export default {
  components: {
    HeaderPattern,
    LogoInfo,
  },
  data() {
    return {};
  },
};
</script>
