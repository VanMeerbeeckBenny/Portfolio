<script setup>
  import { RouterView } from 'vue-router'
  import MainMenu from './components/MainMenu.vue'
</script>

<template>  
  <MainMenu></MainMenu> 
  <RouterView />

</template>

<style scoped>
nav a:first-of-type {
  border: 0;
}



@media (min-width: 1024px) {
  /* header { 
    padding-right: calc(var(--section-gap) / 2);

  }
  */

  .logo {
    margin: 0 2rem 0 0;
  }
}
</style>
