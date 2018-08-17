import Mock from "mockjs";
import { param2Obj } from "@/utils";
const conf = {
  total: 103,
  spendTime: Mock.Random.integer(1, 500) + "ms", //查询耗费时间
  column: [
    "id",
    "thumbnail",
    "dbName",
    "segmentNum",
    "transcriptNum",
    "fieldNum",
    "recordNum",
    "indexSpace",
    "createTime",
    "remark"
  ]
};
const listTableData = Mock.mock({
  ["data|" + conf.total]: [
    {
      [conf.column[0]]: "@guid",
      [conf.column[1]]: "@dataImage('50x20', 'GW')",
      [conf.column[2]]: "@word(10,15)",
      [conf.column[3]]: "@integer(1,10)",
      [conf.column[4]]: "@integer(1,20)",
      [conf.column[5]]: "@integer(1,50)",
      [conf.column[6]]: "@integer(1,50)",
      [conf.column[7]]: "@integer(1,500)MB",
      [conf.column[8]]: "@datetime('yyyy/MM/dd HH:mm:ss')",
      [conf.column[9]]: "@sentence(1, 3)"
    }
  ]
});

const treeData = [
  {
    id: "user",
    label: "用户",
    children: [
      {
        id: "user_1",
        label: "用户数据1"
      },
      {
        id: "user_2",
        label: "用户数据2"
      },
      {
        id: "user_3",
        label: "用户数据3"
      }
    ]
  },
  {
    id: "system",
    label: "系统",
    children: [
      {
        id: "system_1",
        label: "系统数据库1"
      },
      {
        id: "system_2",
        label: "系统数据库2"
      }
    ]
  }
]

export default {
  /**
   * 通过分页获取文本检索信息
   * @param pageSize 每页显示多少条
   * @param currentPage 当前是第几页
   * @param express 表达式
   * @param dbId 数据库的ID
   * @returns {{data: Array, total: number, column: string[]}}
   */
  getDBTextSearchInfoByPage(param) {
    const {
      pageSize = 5,
      currentPage = 1,
      express = "",
      dbId = ""
    } = param2Obj(param.url);

    let firstItemIndex = (parseInt(currentPage) - 1) * parseInt(pageSize);
    let data = listTableData.data.slice(
      firstItemIndex,
      firstItemIndex + parseInt(pageSize)
    );
    //模拟表达式，只对第二列进行过滤
    data =
      express && express.length > 0
        ? data.filter(item => {
            return item[conf.column[1]].include(express);
          })
        : data;
    return {
      data,
      total: listTableData.data.length,
      column: conf.column,
      spendTime: conf.spendTime
    };
  },
  getDBTree(param) {
    return treeData;
  }
};
