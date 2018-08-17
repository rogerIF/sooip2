<template>
  <div class="gw-db-tree">
    <el-tree :data="treeData" :props="defaultProps" @node-click="handleNodeClick"
             :node-key="node_key" :expand-on-click-node="false" highlight-current>
    </el-tree>


  </div>
</template>
<script>
  import {getDBTree} from "@/api/db/api_db";
export default {
  data() {
    return {
      isRootNode: true, //当前点击对象是否为根节点，页面加载是相当于
      node_key: "id", //唯一id,data里的数据必须有该值
      treeData: [],
      defaultProps: {
        children: "children",
        label: "label"
      }
    };
  },
  methods: {
    handleNodeClick: function(data) {
      let key = data[this.node_key];
      let name = data[this.defaultProps.label];

      this.isRootNode = key === "user" || key === "system";
      this.$root.currentTreeNodeId = key;
      this.$root.currentTreeNodeName = name;

      let to = this.isRootNode ? "/listDB" : "/queryText";

      this.$router.push(to);
    },
    init(){
      getDBTree().then(response => {
        this.treeData = response.data;

      });
    }
  },
  mounted: function() {
    this.init();
  }
};
</script>

<style lang="scss" scoped>
</style>
