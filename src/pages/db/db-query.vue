<!--数据库管理-创建数据库-->
<template>
  <div class="gw-db-query">
    <!--查询条件-->
    <el-row class="conditionContainer">
      <textarea class="express" :rows="rows" :style="{height:isExpand ? '167px':'32px'}" v-model="queryExpress" placeholder="请输入JSON或表达式进行检索"></textarea>
      <i class="query-camera fa fa-camera" @click="imageSearchDialogVisible=true"></i>

      <i :class="isExpand ? 'fa fa-chevron-up':'fa fa-chevron-down'"  class="arrow" @click="isExpand=!isExpand" ></i>

      <el-button type="primary">检索</el-button>
      <i class="dottedLine"></i>
      <el-button type="primary" @click="dialog.showColumnVisible = true">显示字段</el-button>
      <el-button type="primary">分类统计</el-button>
      <el-button type="success">插入记录</el-button>
      <el-button type="danger">删除记录</el-button>
      <el-button type="primary">结果导出</el-button>
      <el-button type="primary">加载数据</el-button>
      <el-button type="primary">保存检索式</el-button>
    </el-row>

    <!--搜索结果统计-->
    <el-row>
      <div class="summary" v-text="summaryText"></div>
    </el-row>

    <!--排序-->
    <div class="order-container">
      排序
      <el-input v-model="orderExpress" placeholder="请选择字段名排序" class="order-input">
        <i class="order-camera fa fa-camera" slot="suffix" @click="imageOrder"></i>
      </el-input>
      <el-button type="primary" class="order-text-btn" @click = "textOrder" icon="fa fa-refresh"></el-button>
    </div>

    <!--列表标签页-->
    <el-row>
      <el-tabs v-model="activeTabName" @tab-click="handleClick">
        <el-tab-pane label="列表" name="list">
          <el-table :data="table.data" tooltip-effect="dark" style="width: 100%"  @header-click="addOrderColumn" >

            <el-table-column type="selection" align="center" width="50">
            </el-table-column>
            <el-table-column v-for="item in table.column" :prop="item" :label="item"
                             align="center" header-align="center" show-overflow-tooltip >
            </el-table-column>
          </el-table>
          <!--分页-->
          <el-row class="pagination">
            <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="page.currentPage"
                    :page-sizes="page.pageSizes"
                    :page-size="page.pageSize"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="page.total">
            </el-pagination>
          </el-row>

        </el-tab-pane>
        <el-tab-pane label="JSON" name="json">

        </el-tab-pane>
        <el-tab-pane label="图片" name="image">

        </el-tab-pane>
      </el-tabs>
    </el-row>
    <!--弹出框-图像检索-->
    <el-dialog :visible.sync="imageSearchDialogVisible" >
      <el-upload class="upload"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="previewImage"
              :on-remove="removeImage"
              :file-list="imageList"
              list-type="picture" :auto-upload="false">
        <!--<el-button slot="trigger" size="small" type="primary">选取文件</el-button>-->
        <el-button size="small" type="primary">点击上传</el-button>
        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
    </el-dialog>
    <!--弹出框-显示字段-->
    <show-column-dialog v-bind:visible.sync="dialog.showColumnVisible"
                        :allColumns="table.column"
                        @comnmit="getShowColumn" >
    </show-column-dialog>
  </div>


</template>
<script>
import { getDBTextSearchList } from "@/api/db/api_db";
import showColumnDialog from "./dialogs/db-show-column-dialog";
export default {
  components: {
    showColumnDialog
  },
  data() {
    return {
      queryExpress: "", //查询表达式
      orderExpress: "", //排序表达式
      orderAscFlag: "+", //排列标识--升序
      orderDescFlag: "-", //排列标识--降序
      orderSeparatorFlag: ",", //排列标识--分隔符
      rows: "1",
      isExpand: false,
      listTableData: [],
      spendTime: "0ms",
      activeTabName: "list",
      dialog: {
        showColumnVisible: false
      },
      table: {
        column: [
          // { prop: "dbName", label: "数据库名称", width: "110" },
          // { prop: "segmentNum", label: "分片数" },
          // { prop: "transcriptNum", label: "副本数" },
          // { prop: "fieldNum", label: "字段数" },
          // { prop: "recordNum", label: "记录数" },
          // { prop: "indexSpace", label: "索引空间" },
          // { prop: "createTime", label: "创建时间", width: "150" },
          // { prop: "remark", label: "备注", width: "150" }
        ],
        data: []
      },
      page: {
        currentPage: 1,
        pageSizes: [5, 10, 20, 50],
        pageSize: 5,
        total: 0
      },
      //图像检索
      imageSearchDialogVisible: false,
      imageList: [
        {
          name: "food.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
        }
      ]
    };
  },
  computed: {
    currentTreeNodeId() {
      return this.$root.currentTreeNodeId;
    },
    currentTreeNodeName() {
      return this.$root.currentTreeNodeName;
    },
    summaryText() {
      let first =
          (parseInt(this.page.currentPage) - 1) * parseInt(this.page.pageSize) +
          1,
        last = first + parseInt(this.page.pageSize);

      return `数据库名：${this.currentTreeNodeName}，命中 ${
        this.page.total
      } 条记录。本页显示第 ${first} 条至第  ${last} 条 ，检索时间：${
        this.spendTime
      }`;
    }
  },
  methods: {
    fetchData(param) {
      getDBTextSearchList(param).then(response => {
        let data = response.data;
        this.table.column = data.column;
        this.table.data = data.data;
        this.page.total = data.total;
        this.spendTime = data.spendTime;
      });
    },
    // 文本排序
    textOrder() {
      this.$alert("点击文本排序");
    },
    //显示字段
    getShowColumn(columns) {
      this.table.column = columns;
    },
    // 图像排序
    imageOrder() {
      this.$alert("点击图像排序");
    },
    // 添加排序字段
    addOrderColumn(column) {
      // 格式：[a+,b-],+代表升序，-代表降序

      let arr = this.orderExpress.split(this.orderSeparatorFlag);

      if (arr.includes(column.label + this.orderAscFlag)) {
        //已存在升序
        this.orderExpress = this.orderExpress.replace(
          column.label + this.orderAscFlag,
          column.label + this.orderDescFlag
        );
      } else if (arr.includes(column.label + this.orderDescFlag)) {
        //已存在降序
        this.orderExpress = this.orderExpress.replace(
          column.label + this.orderDescFlag,
          column.label + this.orderAscFlag
        );
      } else {
        this.orderExpress +=
          this.orderExpress.length > 0
            ? this.orderSeparatorFlag + column.label + this.orderAscFlag
            : column.label + this.orderAscFlag;
      }
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    handleSizeChange(val) {
      this.page.pageSize = val;
      this.fetchData({
        pageSize: this.page.pageSize,
        currentPage: this.page.currentPage
      });
    },
    handleCurrentChange(val) {
      this.page.currentPage = val;
      this.fetchData({
        pageSize: this.page.pageSize,
        currentPage: this.page.currentPage
      });
    },
    /* ------图像检索-------- */
    removeImage(file, fileList) {
      console.log(file, fileList);
    },
    previewImage(file) {
      console.log(file);
    },

    init() {
      this.fetchData({ dbId: this.currentTreeNodeId });
    }
  },
  watch: {
    currentTreeNodeId(newValue, oldValue) {
      console.log("当前点击节点：", newValue);
    }
  },
  mounted: function() {
    this.init();
  }
};
</script>

<style lang="scss" scoped>
.conditionContainer {
  text-align: left;
  .el-button {
    margin-left: 0;
    margin-right: 10px;
  }
}
.express {
  margin-bottom: 8px;
  border-radius: 2px 0 2px 2px;
  width: 446px;
  padding: 5px 25px 5px 5px;
  vertical-align: top;
  font-size: 14px;
  overflow: hidden;
}
/*查询相机图标*/
.query-camera {
  /*position: absolute;*/
  margin-left: -24px;
  margin-right: 7px;
  color: #909399;
  cursor: pointer;
}
/*排序相机图标*/
.order-camera {
  line-height: 30px;
}
.dottedLine {
  padding: 2px 0;
  border-left: 1px dashed #c1c1c4;
  margin-left: 0;
  margin-right: 10px;
}
.arrow {
  line-height: 30px;
  border: 1px solid #999;
  border-left: 0;
  border-radius: 0 2px 2px 2px;
  width: 32px;
  text-align: center;
  margin-right: 10px;
}
.summary {
  text-align: left;
  line-height: 46px;
  color: #9a9a9a;
}
/*图片检索*/
.upload {
  width: 220px;
  height: 220px;
}

/*排序*/
.order-container {
  position: absolute;
  right: 21px;
  z-index: 1;
  font-size: 14px;
}
.order-text-btn {
  margin-left: 5px;
}

.order-input {
  width: 200px;
}
/*分页*/
.pagination {
  margin-top: 15px;
}
</style>
