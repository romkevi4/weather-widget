<script setup lang="ts">
  import WeatherInfo from './components/WeatherInfo.vue'
</script>

<template>
<!--  <nav>-->
<!--    <router-link to="/">Home</router-link> |-->
<!--    <router-link to="/about">About</router-link>-->
<!--  </nav>-->
<!--  <router-view/>-->
  <div class="m-auto p-3 w-full bg-gradient-to-r from-slate-200 via-gray-100 to-slate-200 shadow-gray-500 shadow-2xl rounded-lg overflow-hidden flex flex-col justify-between items-center">
    <WeatherInfo />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<!--<script>-->
<!--import WeatherInfo from '@/components/WeatherInfo';-->
<!--export default {-->
<!--  components: {WeatherInfo}-->
<!--}-->
<!--</script>-->