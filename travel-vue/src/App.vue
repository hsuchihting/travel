<template>
  <header-pattern></header-pattern>
  <div class="container mx-auto">
    <logo-info></logo-info>
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
