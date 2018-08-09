//通过扫描view下的省略授权的vue文件，自动生成路由
import lazyLoading from './lazyLoading';

function getRouter() {
    //todo require.context的参数不能变成变量，第一个参数需要和 fileToRouter方法里的懒加载路径一致
    //webpack的专有方法，require.context(directory:String, includeSubdirs:Boolean /* 可选的，默认值是 true */, filter:RegExp /* 可选的 */)
    let context = require.context("@/views/omitAuth/", true, /.+\.vue/);
    let fileNames= context.keys();//文件名数组，形如["./login/login.vue", "./notFound/notFound.vue"]的数组
    let routers =[];
    fileNames.forEach(item=>{
        routers.push(fileToRouter(item));
    });
    return routers;
}

function fileToRouter(fileName) {
    let path = fileName.substring(fileName.indexOf('/'),fileName.lastIndexOf('.'));//形如"/login/login"
    let name = path.substring(1).replace(/\//g,'_');//形如：login_login
    const component = lazyLoading('views/omitAuth'+path+'.vue');
    return {
        path,
        name,
        component
    }
}

export default getRouter;