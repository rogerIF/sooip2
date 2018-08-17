<template>
    <el-dialog title="显示字段" :visible.sync="dialogVisible"  class="db-show-column-dialog" >
       <div class="condition">
           <el-input v-model="searchText" class="input-search">
               <i class="clear-search-text-icon el-icon-close el-input__icon" slot="suffix" title="清空搜索内容"
                       @click="clearSearch">
               </i>
           </el-input>
           <el-button type="primary" @click="find">查找</el-button>
       </div>
        <el-row :gutter="10" class="column-container">
            <el-col v-for="item in columns" :key="item.index" :xs="8"  :md="6" :lg="4" :xl="3" >
                <el-button type="primary" class="column-btn" :class="{'found':item.found,'selected':item.selected}"
                           @click="item.selected = !item.selected" plain>{{item.name}}</el-button>
            </el-col>

        </el-row>

        <span slot="footer" class="dialog-footer">
            <el-button type="success" @click="commit">确 定</el-button>
          </span>
    </el-dialog>
</template>

<script>
export default {
  name: "db-show-column-dialog",
  props: {
    allColumns: {
      type: Array,
      default: function() {
        return [];
      }
    },
    visible: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      searchText: "",
      columns: []
    };
  },
  computed: {
    dialogVisible: {
      get() {
        return this.visible;
      },
      set(val) {
        this.$emit("update:visible", val);
      }
    }
  },
  watch: {
    allColumns(newVal) {
      this.columns = newVal.map((item, index) => {
        return { index, name: item, selected: true, found: false };
      });
    }
  },
  methods: {
    commit() {
      let newColumn = [];
      this.columns.forEach(item=>{
        item.selected && newColumn.push(item.name);
      });
      this.dialogVisible = false;
      this.$emit("commit", newColumn);
    },
    // 清空搜索框
    clearSearch() {
      this.searchText = "";
      this.find();
    },
    find() {
      //采用全遍历，方便模糊匹配
      this.columns.forEach(item => {
        item.found = item.name === this.searchText;
      });
    }
  }
};
</script>

<style scoped lang="scss">
.db-show-column-dialog {
  text-align: left;
  .column-btn {
    width: 100%;
    margin-bottom: 10px;
    overflow: hidden;
    padding: 7px 2px;
    &:hover,
    &:active,
    &:focus {
      background: #fff;
      color: #3a8ee6;
    }
  }
}
.condition {
  text-align: left;
}
.input-search {
  width: 60%;
  min-width: 150px;
  margin-right: 10px;
}
.column-container {
  padding-top: 10px;
}

/*字段被找到*/
.db-show-column-dialog .found {
  border-color: #f00;
  box-shadow: inset 0 0 2px #f00;
}
/*字段被选中*/
.db-show-column-dialog .selected {
  background: #409eff;
  color: #fff;

  &:hover,
  &:active,
  &:focus {
    background: #409eff;
    color: #ecf5ff;
  }
}
/*清空搜索内容*/
.clear-search-text-icon {
  cursor: pointer;
  color: #333;

  &:hover {
    color: #666;
    font-size: 16px;
  }
}
</style>
