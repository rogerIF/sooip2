const opn = require('opn');
const path = require('path');
let db = require('./db');
let jsondb = require('./db.json');
const jsonServer = require('json-server');
const server = jsonServer.create();

const router = jsonServer.router(jsondb);
const middlewares = jsonServer.defaults();
const port = 3099;//自定义端口

server.use(middlewares);
server.use(router);

console.log("router",router)

server.listen(port, () => {
    console.log('JSON Server is running,port is ',port);
    //自动打开浏览器
   // opn('http://localhost:'+port);
});