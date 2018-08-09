<template>
  <div class="gw-db-tree">
    <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>


  </div>
</template>
<script>
export default {
  data() {
    return {
      data: [
        {
          label: "用户",
          children: [
            {
              label: "管理员",
              children: [
                {
                  label: "三级 1-1-1"
                }
              ]
            }
          ]
        },
        {
          label: "系统",
          children: [
            {
              label: "搜索系统",
              children: [
                {
                  label: "三级 2-1-1"
                }
              ]
            },
            {
              label: "OA系统",
              children: [
                {
                  label: "三级 2-2-1"
                }
              ]
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
    handleNodeClick(data) {
      console.log(data);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
