<script>
import AppHeader from './components/AppHeader.vue';


export default {
  data() {
    return {

    }
  },
  components: {
    AppHeader
  }
}
</script>

<template>
  <AppHeader />
  <RouterView />
</template>

<style lang="scss">
@use 'bootstrap/scss/bootstrap.scss';
@use "./styles/general.scss" as *;
</style>
