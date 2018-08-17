let mutilPageConfig = require('./tools/muti-page-config/muti-page-config-common');
module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
      ? process.env.CONTEXT_PATH
      : '/',
  pages:mutilPageConfig
};