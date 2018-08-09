//生产环境需要的页面
const prodPageArray = [
    {
      config:{
        index: {
          // page 的入口
          entry: "src/pages/home/home-main.js",
          // 模板来源
          template: "public/home.html",
          // 在 dist/home.html 的输出
          filename: "home.html",
          //描述，不是vue-cli的配置项
          desc: "首页",
        },
        test: {
          entry: "src/pages/db/db-main.js",
          template: "public/db.html",
          filename: "db.html",
          desc: "文本检索"
        }
      },
      desc:"数据库管理",
      icon:'fa fa-camera-retro'
    },
  {
    config:{
      auth: {
        // page 的入口
        entry: "src/pages/auth/auth-main.js",
        // 模板来源
        template: "public/auth.html",
        // 在 dist/home.html 的输出
        filename: "auth.html",
        //描述，不是vue-cli的配置项
        desc: "权限设置"
      },
    },
    desc:"权限管理",
    icon:'fa fa-rebel'
  },

];

//开发入口页面
const devPage = {
  config:{
    devIndex: {
      entry: "src/main.js",
      template: "public/index.html",
      filename: "index.html",
      desc: "开发入口"
    }
  },
  desc:"开发管理"

};
process.env.NODE_ENV === "production" && prodPageArray.push(devPage);
export default prodPageArray;
