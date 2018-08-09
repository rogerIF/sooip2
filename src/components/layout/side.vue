<template>
  <!--布局#侧边导航-->
  <div class="gw-side">
    <div class="project-name-container">
      <img src="../../assets/logo.png" class="home-logo"/>
      <span class="project-name" v-show="!isCollapse">{{projectName}}</span>
      <i class="fa collapse-icon" @click='sideWidthChange' :class="isCollapse?'fa-bars':'fa-outdent'"></i>
    </div>
    <el-menu default-active="/others/about"
             background-color="#545c64" text-color="#fff" active-text-color="#ffd04b"
             @select="select"  :collapse="isCollapse">
      <el-submenu v-for="(item,index) in pageArray" :index="index+''">
          <template slot="title">
            <i :class="item.icon" class="menuIcon"></i>
            <span slot="title">{{item.desc}}</span>
          </template>
          <el-menu-item :index="childItem.filename" v-for="childItem in item.config">
            <span slot="title">{{childItem.desc}}</span>
          </el-menu-item>

      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
  import pageArray from "../../../tools/muti-page-config/muti-page-config-es6";
export default {
  name: "GWSide",
    props:{
      // 展开宽度
        expanseWidth:{
            type:String,
            default:'200px'
        },
        // 折叠宽度
        collapseWidth:{
            type:String,
            default:'50px'
        }
    },
    data() {
        return {
          isCollapse: false,
          projectName:'iSearch 开发平台',
          pageArray
        };
    },
    methods: {
      select(key) {
            this.$emit("selectMenu",'/'+key);
        },
        sideWidthChange(){
            this.isCollapse=!this.isCollapse;
            this.$emit("widthChange",this.sideWidth)
        }
    },
    computed:{
      sideWidth(){
          return this.isCollapse ? this.collapseWidth :this.expanseWidth;
      }

    },
};
</script>

<style lang="scss">
  .logo-container{
    display: inline-block;
  }
  .home-logo{

    height: 1em;
    vertical-align: middle;
  }
  .project-name-container {
    height: 60px;
    line-height: 60px;
  }
  .project-name{
    display: inline-block;
    padding: 0 5px;
  }
  .collapse-icon {
    cursor: pointer;
    margin-left:5px;
  }
  .gw-side{
      .menuIcon{
          margin-right: 5px;
          color:#fff;
      }
  }

</style>
