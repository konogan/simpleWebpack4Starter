<template>
 <div id="app">
   <app-header></app-header>
 </div>
</template>

<script>
import "./assets/sass/main.scss";

import Header from "./components/Header.vue";

export default {
  components: {
    "app-header": Header
  },
  data() {
    return {};
  }
};
</script>