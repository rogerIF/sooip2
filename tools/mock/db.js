var Mock = require("mockjs");
module.exports = () => {
  // const data = { users:[]};
  const dbConfig={
      total :103,
  };
  const dbTableList = Mock.mock({
    ["dbTableList|"+dbConfig.total]: [
      {
        id:"@guid",
        thumbnail:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAUCAYAAADPym6aAAAB60lEQVRYR2O8yyD+n2EYAMZRjwyyWByNkUEWIQyjMTLsYkR0Ti8Db3I02F//P39h+H7gGAOXrxvD36fPGb7vO8LAE+4PlnvfOYXhfV0Xg2BTGYNgeQ4DAxsbw+e5SxlepxQzwMwA6XkVlwvWRyqgKGkhewLdYpCjPvTNZBAoSmdglpaEO1pyz2oGTmdbsPLvew8zPHcJZYCJwfikegKkniKPyF49yMCqpQ4OfVBIgoDYoslgh8PEBKrywQ7/fe0mw2NtewaQHhZZaQZGdjaGv6/fgvWJTG5lYFVRhMcaXT3C6WQDdzQsiYAcgJ5MeKICwUkPHEO90xmEGssYft++x8CqqgR274f+mQwChekM/z59JjtZURQjPLEhDKJTOxgYeXngyQabR5ilJSDq2NkYvu08wMDl7sDwefFqBg5LE3Bs/jh2moHDRJ/h95374BgjF5CdtJBjBF/SAmVcWBL89/YdAyMbG8Pr7AoGTntLcEyBxJiEhVACgxzPkO0R5NBHthjmMOQSCLlQgIlzOFjBSy9QaQfy3JfFa8jxA1gPRR4BGYBcCoEy9J/nr8CZG9kjyMkQVjJhi1Fyil2Yzyn2CHIQItcRlBSl5EQLRR7BVY9QI6mQ6hmqewRWX5DqEErVU+QRSi2npv5h4xEAECImIOAD2UEAAAAASUVORK5CYII=",
        dbName: "@word(10,15)",
        segmentNum: "@integer(1,10)",
        transcriptNum: "@integer(1,20)",
        fieldNum: "@integer(1,50)",
        recordNum: "@integer(1,50)",
        indexSpace: "@integer(1,500)MB",
        createTime: "@datetime('yyyy/MM/dd HH:mm:ss')",
        remark: "@sentence(1, 3)"
      }
    ]
  });
  // const dbTableListByPage = {
  //   list :dbTableList,
  //   page:
  //
  // };
  const users = Mock.mock({
    "users|10": [
      {
          id:"@guid",
        userName: "@cname",
        age: "@integer(1,50)"
      }
    ]
  });

  return Object.assign({},dbTableList,users);
};
