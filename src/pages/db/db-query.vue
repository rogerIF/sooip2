<!--数据库管理-创建数据库-->
<template>
  <div class="gw-db-create">
    <div class="textscon">
      <div class="textseach">
        <i class="fa fa-camera"></i>
        <textarea :rows="rows" :style="{height:isExpand ? '80px':'30px'}" placeholder="请输入JSON或表达式进行检索"></textarea>
        <a @click="isExpand=!isExpand"  :class="isExpand ? 'fa fa-chevron-up':'fa fa-chevron-down'" href="#"></a>
      </div>
      <el-button type="primary">检索</el-button>
      <i class="dotline"></i>
      <el-button type="primary">显示字段</el-button>
      <el-button type="primary">分类统计</el-button>
      <el-button type="success">插入记录</el-button>
      <el-button type="danger">删除记录</el-button>
      <el-button type="primary">结果导出</el-button>
      <el-button type="primary">加载数据</el-button>
      <el-button type="primary">保存检索式</el-button>
    </div>
    <div class="datxt">数据库名：DATA_20151204_DEC，命中132321条记录。本页显示第 1 条至第 10条 ，检索时间：6 ms </div>

  </div>
</template>
<script>
    export default {
        data() {
            return {
                rows: 1,
                isExpand: false
            };
        },
        methods: {}
    };
</script>

<style lang="scss" scoped>
  .textscon {
    width: auto;
    height: auto !important;
    height: 50px;
    min-height: 50px;
    text-align: left;
  }
  .textscon button {
    margin-bottom: 10px !important;
  }
  .textseach {
    width: 40%;
    border: 1px solid #ececec;
    position: relative;
    padding-right: 32px;
    padding-left: 5px;
    float: left;
    margin-right: 50px;
  }
  .textseach i {
    font-size: 18px;
    position: absolute;
    top: 8px;
    right: 5px;
  }
  .textseach textarea {
    width: 90% !important;
    border: none !important;
    line-height: 30px !important;
  }
  .textseach a {
    display: block;
    width: 32px;
    height: 32px;
    line-height: 30px;
    text-align: center;
    border: 1px solid #ececec;
    border-left: none;
    background: #fbfbfb;
    color: #b7b7b7;
    position: absolute;
    top: -1px;
    right: -33px;
  }
  .dotline {
    padding: 2px 0;
    border-left: 1px dashed #c1c1c4;
    margin: 0 12px;
  }
  .datxt{
    line-height: 40px;
    color: #999;
    text-align: left;
  }
</style>
