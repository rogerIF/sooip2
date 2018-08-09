<template>
  <div class="home">
    <img src="../../../assets/logo-vue.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
// import getRouters from '@/router/index';
// console.log("apI===",getRouters);

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>
