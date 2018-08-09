## 路由目录

注意：无关权限的路由都有createRouter.js自动生成，无需手动配置

生成规则：`path` 为`@views/omitAuth/`之后的目录名称，`name` 是将path去掉开头的 `/` 后把剩下所有 `/` 替换成 `_`;

如：

```@view/omitAuth/notFound/notFound.vue```

对应的路由为：

```{path:'/notFound/notFound',name:'notFound_notFound'}```

如需跳转路由，按照上述规则配置即可。
