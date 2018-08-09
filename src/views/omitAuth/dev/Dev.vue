<!-- 开发主界面 -->
<template>
    <div>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item v-for="(item,key) in pageConfig4Menu" :index="key">
                <a :href="item.filename" target="_blank">{{item.desc}}</a>
            </el-menu-item>

        </el-menu>
        <iframe scr="http://www.baidu.com"></iframe>
    </div>

    
</template>

<script>
  import pageConfig4Menu from "../../../../tools/muti-page-config/muti-page-config-es6";
  export default {
    name: "GwDev",
    data:function () {
      return{
        activeIndex: 'devIndex',
        pageConfig4Menu
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>

</style>