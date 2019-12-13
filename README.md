# 基于React框架开发的博客(未完结)

[README in English](README-en.md)

<a name="TXwq3"></a>
## 关于我们~

- [纪法](https://github.com/luckyMuChen)
- 景儿
- [诗杰](https://github.com/LeeJay9701)
- [政东](https://github.com/LD382549823)
- [老王](https://github.com/RonWang21)

<a name="1TFk7"></a>
## 项目介绍
<a name="45lpm"></a>
  ### 项目地址:[https://github.com/RonWang21/teamBlog](https://github.com/RonWang21/teamBlog)


<a name="6oaFs"></a>
## 前端技术栈

- React全家桶
- Element-React([https://elemefe.github.io/element-react/#/zh-CN/quick-start](https://elemefe.github.io/element-react/#/zh-CN/quick-start))
- webpack
- less
- ES6

<a name="gO4Lz"></a>
## 后端技术栈

- node.js
- mongoess
- express
- jsonwebtoken
- md5加密
- Common JS

<a name="04HHm"></a>
## 项目环境
  **node.js v12.10.0**<br />**webpack 4.41.2**<br />**mongodb**<br />
<a name="JrZDi"></a>
## 项目运行

1. **yarn install（推荐）**
1. **启动mongodb**
1. **cd client & node server.js**
1. **yarn start**

<a name="P3fGj"></a>
## 功能描述
  <a name="suTYK"></a>
  ### 前端

  - [ ] 登录、注册管理
  - [ ] 用户信息展示
  - [ ]  文章列表展示
  - [ ] 文章详情页展示

  <a name="aHlev"></a>
  ### 后端

  - [x]  mongoose数据库操作
  - [x] 登录、注册API实现
  - [x] 用户密码加密
  - [x] 生成用户唯一token

<a name="jrpJw"></a>
## 项目结构

  <br />[**扫描目录**](123)**，导出带注释的树形文本和其它多种数据格式请看**：[folder-explorer](https://github.com/d2-projects/folder-explorer)

  ```
  ├─.DS_Store 
  ├─.babelrc                                    // babel配置文件
  ├─.gitignore 
  ├─README.md                                    // 项目说明文件
  ├─doc                                       // 项目使用说明文件
  ├─client                                     // 服务器相关文件
  │ ├─config 
  │ │ └─index.js                        // 服务器/数据库配置文件
  │ ├─db 
  │ │ └─index.js                               // 数据库启动文件
  │ ├─middleware 
  │ │ └─verify.js                                  // 路由中间件
  │ ├─models                                       // 数据库集合
  │ │ ├─articles.js 
  │ │ ├─tags.js 
  │ │ └─users.js 
  │ ├─router 
  │ │ ├─index.js                               // 路由器配置文件
  │ │ └─routes                                   // 路由配置文件
  │ │   └─user.js 
  │ ├─schemas                              // 数据库集合配置文件
  │ │ ├─articleSchema.js 
  │ │ ├─tagSchema.js 
  │ │ └─userSchema.js 
  │ ├─server.js                                // 服务器启动文件
  │ └─utils.js                                       // 后端工具
  ├─config                                    // webpack相关配置
  │ ├─env.js 
  │ ├─jest 
  │ │ ├─cssTransform.js 
  │ │ └─fileTransform.js 
  │ ├─modules.js 
  │ ├─paths.js 
  │ ├─pnpTs.js 
  │ ├─webpack.config.js 
  │ └─webpackDevServer.config.js 
  ├─package.json                                     // 依赖配置
  ├─public 
  │ ├─favicon.ico                                    // 网页图标
  │ └─index.html                                     // 项目模板
  ├─scripts                           // webpack打包命令相关配置
  │ ├─build.js 
  │ ├─start.js 
  │ └─test.js 
  ├─src 
  │ ├─App.jsx                                          // 根组件
  │ ├─api 
  │ │ ├─ajax.js                                  // 封装请求接口
  │ │ └─index.js                          // 配置请求/响应拦截器
  │ ├─assets                                         // 公共资源
  │ │ └─css 
  │ │   ├─iconfont 
  │ │   │ ├─iconfont.css 
  │ │   │ ├─iconfont.eot 
  │ │   │ ├─iconfont.js 
  │ │   │ ├─iconfont.json 
  │ │   │ ├─iconfont.svg 
  │ │   │ ├─iconfont.ttf 
  │ │   │ ├─iconfont.woff 
  │ │   │ └─iconfont.woff2 
  │ │   ├─logo.png 
  │ │   ├─mixin.less 
  │ │   ├─reset.styl 
  │ │   └─zhihu_logo.jpg 
  │ ├─components                                       // UI组件
  │ │ ├─adminComponent 
  │ │ │ └─adminMain 
  │ │ │   └─AdminHeader.jsx 
  │ │ ├─adminContent 
  │ │ │ ├─adminEssay 
  │ │ │ │ ├─AdminEssay.jsx 
  │ │ │ │ └─NewText.jsx 
  │ │ │ ├─adminMain 
  │ │ │ │ └─AdminMain.jsx 
  │ │ │ └─adminUser 
  │ │ │   └─AdminUser.jsx 
  │ │ ├─header 
  │ │ │ ├─Header.jsx 
  │ │ │ └─Header.less 
  │ │ └─notMath 
  │ │   └─NotMath.jsx 
  │ ├─config                                     // 前端路由配置
  │ │ ├─admin-routes.js 
  │ │ ├─menus.js 
  │ │ └─routes.js 
  │ ├─containers                                     // 容器组件
  │ │ ├─adminContainers                      // 后台管理容器组件
  │ │ │ └─admin 
  │ │ │   └─Admin.jsx 
  │ │ ├─home 
  │ │ │ ├─Home.jsx 
  │ │ │ └─Home.less 
  │ │ ├─login 
  │ │ │ └─Login.jsx 
  │ │ └─sideNav 
  │ │   ├─SideNav.jsx 
  │ │   ├─img 
  │ │   │ └─nav.01.png 
  │ │   └─index.css 
  │ ├─index.js                          // 主入口文件(all in js)
  │ ├─redux                                     // redux相关文件
  │ │ ├─action-creator.js 
  │ │ ├─action-types.js 
  │ │ ├─reducers.js 
  │ │ └─store.js 
  │ └─utils                                          // 前端工具
  ├─yarn-error.log 
  └─yarn.lock 
  ```
  <br />
