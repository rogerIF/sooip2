<template>
  <div id="app">

    <el-row class="gw-db">
      <el-card class="left" shadow="never">
        <div slot="header">
          <span><i class="fa fa-database"></i>数据库</span>
        </div>
        <tree ></tree>
      </el-card>
      <el-card class="right" shadow="never">
        <router-view/>
      </el-card>

    </el-row>

  </div>
</template>
<script>
import tree from "./db-tree";
import dbCreate from "./db-createlist";
import dbQuery from "./db-query";
import Cookies from 'js-cookie';
export default {
  components: {
    tree,
    dbCreate,
    dbQuery
  },
  data() {
    return {
      isRootNode: true
    };
  },
  methods: {
  },
  mounted:function () {
    this.$router.push("/listDB");
  }
};
</script>

<style lang="scss" scoped>
$left-width: 300px; /* 左侧区域的宽度（树）*/
$border-color: #eee;

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.left {
  float: left;
  width: $left-width;
  border: 1px solid $border-color;
  border-radius: 2px;
}
.right {
  margin-left: $left-width + 9px;
  border: 1px solid $border-color;
  border-radius: 2px;
}
  .fa{
    margin-right: 5px;
  }
</style>
