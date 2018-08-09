const path = require('path');
module.exports = {
  //解决webstorm 无法根据路径别名进行源码跳转的问题
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../../src'),
    }
  }
};