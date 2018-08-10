<!--数据库管理-创建数据库-->
<template>
  <div class="gw-db-create">
    <div class="dbc_txt">
        <el-input v-model="input" class="dbinput" placeholder="请输入数据库名称进行查找"></el-input>
        <el-button type="primary">查找</el-button>
        <i class="dotline"></i>
        <el-button type="primary">新建数据库</el-button>
        <el-button type="success">修改数据库</el-button>
        <el-button type="danger">删除数据库</el-button>
    </div>
    <div class="page_lin">
        <span>共找到134个数据库，本页显示第 1 个至第 10 个。</span>
        <div class="pagerl">
            <el-pagination class="pagecon"
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage"
                    :page-sizes="[10, 20, 30, 40]"
                    :page-size="10"
                    layout=" prev, pager, next, sizes"
                    :total="40">
            </el-pagination>
        </div>
    </div>
      <template>
          <el-table
                  ref="multipleTable"
                  :data="tableData"
                  tooltip-effect="dark"
                  style="width: 100%"
                  @selection-change="handleSelectionChange">
              <el-table-column
                      type="selection"
                      align="center"
                      width="50">
              </el-table-column>
              <el-table-column
                      type="index"
                      align="center"
                      label="序号"
                      width="50">
              </el-table-column>
              <el-table-column
                      prop="dbname"
                      align="center"
                      label="数据库名称"
                      width="120">
                  <!--<template slot-scope="scope">{{ scope.row.name }}</template>-->
              </el-table-column>
              <el-table-column
                      prop="subNum"
                      align="center"
                      label="分片数"
                      width="80">
              </el-table-column>
              <el-table-column
                      prop="Csystem"
                      align="center"
                      label="副本系数"
                      width="80">
              </el-table-column>
              <el-table-column
                      prop="recordNum"
                      align="center"
                      label="记录数"
                      width="60">
              </el-table-column>
              <el-table-column
                      prop="Cdate"
                      align="center"
                      label="创建时间"
                      width="140">
              </el-table-column>
              <el-table-column
                      prop="dbState"
                      align="center"
                      label="数据库状态"
                      show-overflow-tooltip>
              </el-table-column>
          </el-table>
      </template>

  </div>
</template>
<script>
export default {
  data() {
    return {
      input: "",
        currentPage: 50,
        //table
        tableData: [{
            dbname: 'DEMO_01',
            subNum: '10',
            Csystem: '1',
            recordNum: '200',
            Cdate: '2017/08/15 10:13:24',
            dbState: 'OPEN'
        }, {
            dbname: 'DEMO_01',
            subNum: '10',
            Csystem: '1',
            recordNum: '200',
            Cdate: '2017/08/15 10:13:24',
            dbState: 'OPEN'
        }, {
            dbname: 'DEMO_01',
            subNum: '10',
            Csystem: '1',
            recordNum: '200',
            Cdate: '2017/08/15 10:13:24',
            dbState: 'OPEN'
        }, {
            dbname: 'DEMO_01',
            subNum: '10',
            Csystem: '1',
            recordNum: '200',
            Cdate: '2017/08/15 10:13:24',
            dbState: 'OPEN'
        }, {
            dbname: 'DEMO_01',
            subNum: '10',
            Csystem: '1',
            recordNum: '200',
            Cdate: '2017/08/15 10:13:24',
            dbState: 'OPEN'
        },  {
            dbname: 'DEMO_01',
            subNum: '10',
            Csystem: '1',
            recordNum: '200',
            Cdate: '2017/08/15 10:13:24',
            dbState: 'OPEN'
        },  {
            dbname: 'DEMO_01',
            subNum: '10',
            Csystem: '1',
            recordNum: '200',
            Cdate: '2017/08/15 10:13:24',
            dbState: 'OPEN'
        }, {
            dbname: 'DEMO_01',
            subNum: '10',
            Csystem: '1',
            recordNum: '200',
            Cdate: '2017/08/15 10:13:24',
            dbState: 'OPEN'
        }, {
            dbname: 'DEMO_01',
            subNum: '10',
            Csystem: '1',
            recordNum: '200',
            Cdate: '2017/08/15 10:13:24',
            dbState: 'OPEN'
        }],
        multipleSelection: []
    };
  },
  methods: {
      //page
      handleSizeChange(val) {
          console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
          console.log(`当前页: ${val}`);
      },
      //table
      toggleSelection(rows) {
          if (rows) {
              rows.forEach(row => {
                  this.$refs.multipleTable.toggleRowSelection(row);
              });
          } else {
              this.$refs.multipleTable.clearSelection();
          }
      }

  }
};
</script>

<style lang="scss" scoped>
    .dotline {
        padding: 2px 0;
        border-left: 1px dashed #c1c1c4;
        margin: 0 12px;
    }
    .dbc_txt{
        text-align: left;
        .dbinput{
            width: 200px;
            margin-right: 10px;
        }
    }
    .page_lin{
        width: auto;
        text-align: left;
        height: 40px;
        line-height: 40px;
        margin-top: 8px;
        span{
            float: left;
            color: #999;
            font-size: 14px;
        }
        .pagerl{
            float: right;
            .pagecon{
                padding-top: 8px;
            }
        }
    }
    .el-table th{
        text-align: center;
    }


</style>
