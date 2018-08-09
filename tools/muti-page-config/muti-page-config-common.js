//生产环境需要的页面
var prodPage = {
  index: {
    // page 的入口
    entry: "src/pages/home/home-main.js",
    // 模板来源
    template: "public/home.html",
    // 在 dist/home.html 的输出
    filename: "home.html",
    //描述，不是vue-cli的配置项
    desc: "首页"
  },
  test: {
    entry: "src/pages/db/db-main.js",
    template: "public/db.html",
    filename: "db.html",
    desc: "数据库管理"
  },
  auth: {
    entry: "src/pages/auth/auth-main.js",
    template: "public/auth.html",
    filename: "auth.html",
    desc: "权限"
  }
};

//开发入口页面
var devPage = {
  devIndex: {
    entry: "src/main.js",
    template: "public/index.html",
    filename: "index.html",
    desc: "开发入口"
  }
};
var pages =
    process.env.NODE_ENV === "production"
        ? prodPage
        : Object.assign({},prodPage, devPage);

module.exports = pages ;