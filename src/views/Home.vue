<template>
  <el-container style="height: 100%;">
    <el-aside :width="width">
      <gw-side @widthChange="changeSideWidth" @selectMenu="selectMenu"></gw-side>
    </el-aside>
    <el-container>
      <el-header >
        <gw-header></gw-header>
      </el-header>
      <el-main>
        <gw-main :url="url"></gw-main>
      </el-main>
      <el-footer height="40px">
        <gw-footer></gw-footer>
      </el-footer>
    </el-container>
  </el-container>

</template>

<script>
import gwHeader from "@/components/layout/header";
import gwFooter from "@/components/layout/footer";
import gwSide from "@/components/layout/side";
import gwMain from "@/components/layout/main";

export default {
  name: "home",
  components: {
      gwHeader,
      gwFooter,
      gwSide,
      gwMain
  },
    data(){
      return{
          width:'200px',
          url:"https://www.baidu.com",
      }
    },
    methods:{
      changeSideWidth(newVal){
          this.width = newVal;
      },
      selectMenu(url){
        this.url=url;
        console.log("url=",this.url)
      }
    }
};
</script>
<style>
  .el-main{
    position: relative;
  }
  .el-header{
    line-height: 60px;
    border-bottom: 1px solid #aaa;
    background-image: linear-gradient(to right, #509ded, #409EFF);
    padding-top: .2em;
    padding-bottom: .2em;
  }
   .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    height: 40px;
    line-height: 40px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;

  }


  body > .el-container {
    margin-bottom: 40px;
  }

</style>
