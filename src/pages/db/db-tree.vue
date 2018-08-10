<template>
  <div class="gw-db-tree">
    <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"
             :node-key="node_key" :expand-on-click-node="false" highlight-current>
    </el-tree>


  </div>
</template>
<script>
export default {
  data() {
    return {
      isRootNode:true,//当前点击对象是否为根节点，页面加载是相当于
      node_key:"id",//唯一id,data里的数据必须有该值
      data: [
        {
          id:"user",
          label: "用户",
          children: [
            {
              id:'user_1',
              label: "用户数据1"
            },
            {
              id:'user_2',
              label: "用户数据2"
            },
            {
              id:'user_3',
              label: "用户数据3"
            }
          ]
        },
        {
          id:"system",
          label: "系统",
          children: [
            {
              id:'system_1',
              label: "系统数据库1",
            },
            {
              id:'system_2',
              label: "系统数据库2",
            }
          ]
        }
      ],
      defaultProps: {
        children: "children",
        label: "label"
      }
    };
  },
  methods: {
    handleNodeClick: function (data) {
      let key = data[this.node_key];
      this.isRootNode = key === 'user' || key === 'system';
      /**
       * 点击事件
       * @param data 当前点击节点的数据
       * @param this.isRootNode 是否为根节点，true:是，false:否
       */
      this.$emit("clickNode",data,this.isRootNode);
      console.log(data);
    },

  },
  mounted:function () {

  }
};
</script>

<style lang="scss" scoped>
</style>
