<a name="Y044h"></a>
### 项目介绍
项目地址:[https://github.com/RonWang21/teamBlog](https://github.com/RonWang21/teamBlog)

<a name="5zYcG"></a>
### 项目环境（待补充）
**node.js v12.10.0**<br />**webpack 4.41.2**<br />**npm 6.13.1**
<a name="xbeIl"></a>
### 项目运行

  1. npm install
  1. npm start

<a name="aqmXb"></a>
### 功能描述（待补充）
<a name="6J4hn"></a>
#### 前端

- [ ] 登录、注册管理
- [ ] 用户信息展示
- [ ]  文章列表展示
- [ ] 文章详情页展示
<a name="Ln4Kl"></a>
#### 后端

- [ ]  mongoose数据库操作mongoose数据库操作
- [ ]  身份验证
- [ ]  基本的增删改查
<a name="E3D8I"></a>
### 前端技术栈（待补充）

- React全家桶
- Element-React([https://elemefe.github.io/element-react/#/zh-CN/quick-start](https://elemefe.github.io/element-react/#/zh-CN/quick-start))
- webpack
- less
- ES6

<a name="6uZm2"></a>
### 后端技术栈（待补充）

- node.js
- mongoess

<a name="uP7u2"></a>
### 项目结构（待补充）
.<br />├── README.md // 项目说明文件<br />├── config // webpack相关配置<br />├── package-lock.json // 依赖缓存<br />├── package.json // 依赖配置<br />├── public	<br />│   ├── favicon.ico // 网页图标<br />│   └── index.html	// 项目模板<br />├── scripts // webpack打包命令相关配置<br />│   ├── build.js<br />│   ├── start.js<br />│   └── test.js<br />├── src<br />│   ├── App.js // 项目<br />│   ├── api<br />│   │   ├── ajax.js // 封装请求接口<br />│   │   ├──	index.js // 配置请求/响应拦截器<br />│   ├── asset // 公共资源<br />│   ├── components // UI组件 <br />│   ├── containers // 容器组件<br />│   ├──└── AdminContainers // 后台UI界面<br />│   ├── config<br />│   │   └── routes.js // 路由配置文件<br />│   ├── index.js	// 入口文件（all in js）<br />│   ├── redux<br />│   │   ├── action-creator.js<br />│   │   ├── action-types.js<br />│   │   ├── reducers.js<br />│   │   └── store.js<br />│   └── utils // 其他函数/方法/工具<br />└── yarn.lock

