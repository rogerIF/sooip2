<template>
    <transition name="el-fade-in-linear" mode="out-in" appear>
      <iframe class="mainIframe" :src="url">
      </iframe>
    </transition>
</template>

<script>
export default {
  name: "GWMain",
  props: {
    url: {
      type: String,
      default: 'http://www.baidu.com'
    },
  },
  watch: {
    url(newValue, oldValue) {
      console.log(newValue, oldValue)
    }
  },
  data(){
    return{

    }
  },
    mounted:function () {
      //默认跳转到关于页面
       // this.$router.push('/others/about')
    }
};
</script>
<style lang="scss" scoped>
    .mainIframe{
        border: 0;
        position: absolute;
        width: calc(100% - 40px);
        height: calc(100% - 40px);
    }
</style>

