<script>
import axios from "axios";
import AppMain from "./components/AppMain.vue";

export default {
  data() {
    return {

    }
  },
  components: {
    AppMain
  }
}
</script>

<template>
  <h1>Hello World!</h1>
  <AppMain />
</template>

<style lang="scss">
@use 'bootstrap/scss/bootstrap.scss';
@use "./styles/general.scss" as *;
</style>
