<template>
  <!--布局#顶部组件-->
  <div class="gw-header">
    <div class="welcome">欢迎您:
      <span class="username">{{userName}}</span>
      <el-button type="warning" size="mini" class="logout"  icon="fa fa-sign-out" @click="logout">退出</el-button>
    </div>

  </div>
</template>

<script>
export default {
  name: "GWHeader",
    data(){
      return{
          userName:'admin'
      }
    },
    methods:{
      logout(){
          this.$confirm('即将退出登录, 是否继续?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
          }).then(() => {
              sessionStorage.removeItem('username');
              this.$router.push('/Login/login');
              this.$message({
                  type: 'success',
                  message: '退出成功!'
              });
          }).catch(() => {
             console.log("取消退出")
          });

      }
    },
    mounted:function () {
        this.userName = sessionStorage.getItem('username')

    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .welcome{
    margin-right: 20px;
    text-align: right;

    .username{
      font-weight: bold;
      margin-right: 10px;
    }
    .logout{
      color:#000;
    }
  }

</style>
