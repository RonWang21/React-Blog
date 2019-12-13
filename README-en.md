# Personal blog(unfilled...)

[README in Chinese](README.md)

<a name="TXwq3"></a>
## About US ~

- [muChen](https://github.com/luckyMuChen)
- [Jing er]()
- [LeeJay](https://github.com/LeeJay9701)
- [Zheng dong](https://github.com/LD382549823)
- [Ron](https://github.com/RonWang21)

<a name="1TFk7"></a>
## Project Introduction
<a name="45lpm"></a>
### Project address: [ https://github.com/RonWang21/teamBlog ](https://github.com/RonWang21/teamBlog)


<a name="6oaFs"></a>
## Front-end technology stack

- React family bucket
- Element-React ( [ https://elemefe.github.io/element-react/#/zh-CN/quick-start ](https://elemefe.github.io/element-react/#/zh-CN/quick-start) )
- Webpack
- Less
- ES6

<a name="gO4Lz"></a>
## Backend technology stack

- node.js
- mongoess
- express
- jsonwebtoken
- md5 encrypt
- Common JS

<a name="04HHm"></a>
## Project Environment
**node.js v12.10.0**<br />**webpack 4.41.2**<br />**mongodb**<br />
<a name="JrZDi"></a>
## Run Project

1. **yarn install（recommend）**
1. **run mongodb**
1. **cd client & node server.js**
1. **yarn start**

<a name="P3fGj"></a>
## Functional Description
<a name="suTYK"></a>
### Font-end

- [ ] login、register manage
- [ ] show userinfo
- [ ] show article list
- [ ] shw article details

<a name="aHlev"></a>
### Backend

- [x]  mongoose data-base handle
- [x] login、register API achieved
- [x] encrypting user password
- [x] create user single token

<a name="jrpJw"></a>
## Project Structure（unfilled...）

<br />**we are using：**[**folder-explorer**](https://github.com/d2-projects/folder-explorer)

```
├─.DS_Store 
├─.babelrc                                    // babel config
├─.gitignore 
├─README.md                                    // 项目说明文件
├─README-en.md																// Project description file
├─client                                     
│ ├─config 
│ │ └─index.js                        // server/data-base config
│ ├─db 
│ │ └─index.js                               // data-base runner
│ ├─middleware 
│ │ └─verify.js                                  // route middleware
│ ├─models                                       // data-base Schema
│ │ ├─articles.js 
│ │ ├─tags.js 
│ │ └─users.js 
│ ├─router 
│ │ ├─index.js                               // router config
│ │ └─routes                                   // route config
│ │   └─user.js 
│ ├─schemas                              // data-base Schema config
│ │ ├─articleSchema.js 
│ │ ├─tagSchema.js 
│ │ └─userSchema.js 
│ ├─server.js                                // server runner
│ └─utils.js                                       // backend util
├─config                                    // webpack congig
│ ├─env.js 
│ ├─jest 
│ │ ├─cssTransform.js 
│ │ └─fileTransform.js 
│ ├─modules.js 
│ ├─paths.js 
│ ├─pnpTs.js 
│ ├─webpack.config.js 
│ └─webpackDevServer.config.js 
├─package.json                                     
├─public 
│ ├─favicon.ico                                    
│ └─index.html                                     // project template
├─scripts                           // webpack command
│ ├─build.js 
│ ├─start.js 
│ └─test.js 
├─src 
│ ├─App.jsx                                          // root component
│ ├─api 
│ │ ├─ajax.js                                  // request interface
│ │ └─index.js                          // get/response interceptor
│ ├─assets                                         // public asset
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
│ ├─components                                       // UI Components
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
│ ├─config                                     // font-end route config
│ │ ├─admin-routes.js 
│ │ ├─menus.js 
│ │ └─routes.js 
│ ├─containers                                     // container Components
│ │ ├─adminContainers                      
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
│ ├─index.js                          // main entry file(all in js)
│ ├─redux                                     // redux
│ │ ├─action-creator.js 
│ │ ├─action-types.js 
│ │ ├─reducers.js 
│ │ └─store.js 
│ └─utils                                          // font-end utils
├─yarn-error.log 
└─yarn.lock 
```
<br />
