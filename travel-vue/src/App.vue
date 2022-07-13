<template>
  <ul>
    <li>
      <router-link :to="'/location'">location</router-link>
    </li>
    <li>
      <router-link :to="'/food'">Food</router-link>
    </li>
    <li>
      <router-link :to="'/hotel'">Hotel</router-link>
    </li>
    <li>
      <router-link :to="'/search'">search</router-link>
    </li>
  </ul>
  <router-view />
</template>

<style>
</style>
