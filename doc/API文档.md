# API文档

<a name="062d05a4"></a>
# 接口文档（v1.0）

<a name="cfeff30d"></a>
## 目录：

[1、登录](#1%E7%99%BB%E5%BD%95)

[2、注册](#2%E6%B3%A8%E5%86%8C)

[3、获取分类](#3%E8%8E%B7%E5%8F%96%E5%88%86%E7%B1%BB)

[4、增添分类](#4%E5%A2%9E%E6%B7%BB%E5%88%86%E7%B1%BB)

[5、更新分类](#5%E6%9B%B4%E6%96%B0%E5%88%86%E7%B1%BB%5D)

[6、删除分类](#6%E5%88%A0%E9%99%A4%E5%88%86%E7%B1%BB)

[7、获取分类标签](#7%E8%8E%B7%E5%8F%96%E5%88%86%E7%B1%BB%E6%A0%87%E7%AD%BE)

[8、增加分类标签](#8%E5%A2%9E%E5%8A%A0%E5%88%86%E7%B1%BB%E6%A0%87%E7%AD%BE)

[9、更新分类标签](#9%E6%9B%B4%E6%96%B0%E5%88%86%E7%B1%BB%E6%A0%87%E7%AD%BE)

[10、删除分类标签](#10%E5%88%A0%E9%99%A4%E5%88%86%E7%B1%BB%E6%A0%87%E7%AD%BE)

[11、删除分类标签](#11%E8%8E%B7%E5%8F%96%E6%96%87%E7%AB%A0)

[12、添加文章](#12%E6%B7%BB%E5%8A%A0%E6%96%87%E7%AB%A0)

[13、更新文章](#13%E5%88%A0%E9%99%A4%E5%88%86%E7%B1%BB%E6%A0%87%E7%AD%BE)

[14、删除文章](#14%E5%88%A0%E9%99%A4%E5%88%86%E7%B1%BB%E6%A0%87%E7%AD%BE)<br />


<a name="acc893be"></a>
## 1、登录

<a name="d6a46a98"></a>
### 请求URL：


```
http://localhost:1998/api/v1.0/login
```


<a name="6777a7c8"></a>
### 请求方式：

```
POST
```

<a name="5123cc04"></a>
### 参数类型：



| 参数 | 是否必选 | 类型 | 说明 |
| --- | --- | --- | --- |
| username | Y | string | 用户名 |
| password | Y  | string | 密码 |



<a name="ec2d684e"></a>
### 返回示例：

```
{
    "status": 0,
    "data": {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZjNiYThkZmQ2NGVjN2FkZmU4MjE1YiIsImlhdCI6MTU3NjI1ODg4MCwiZXhwIjoxNTc2ODYzNjgwfQ.ZPYQVe78Px48X5_rIcJVPHCowToFOVWt_PIzpyFHXMw",
        "user": {
            "username": "admin",
            "email": "admin@gmail.com",
            "usertype": "admin",
            "createTime": "1576254093842"
        }
    }
}
```

<a name="8d2b7a3b"></a>
## 2、注册

<a name="d6a46a98-1"></a>
### 请求URL：

```
http://localhost:1998/api/v1.0/register
```

<a name="6777a7c8-1"></a>
### 请求方式：

```
POST
```

<a name="5123cc04-1"></a>
### 参数类型：

| 参数 | 是否必选 | 类型 | 说明 |
| --- | --- | --- | --- |
| username | Y | string | 用户名 |
| email | Y | string | 邮箱 |
| password | Y | string | 密码 |
| rePassword | Y | string | 重复密码 |



<a name="ec2d684e-1"></a>
### 返回示例：

```
{
      "status": 0,
      "msg": "注册成功！"
  }

	{
    "status": 1,
    "msg": "用户名已存在！"
  }
  {
    "status": 1,
    "msg": "邮箱已被注册！"
  }
  {
    "status": 1,
    "msg": "用户名密码格式错误！请输入4-16位（中、英文）用户名及6-16位（字母、数字、下划线）"
  }
```

<a name="1ba3b8ac"></a>
## 3、获取分类

<a name="d6a46a98-3"></a>
### 请求URL：

```
http://localhost:1998/api/v1.0/getCategories
```

<a name="6777a7c8-3"></a>
### 请求方式：

```
GET
```



<a name="ec2d684e-3"></a>
### 返回示例：

```
{
    "status": 0,
    "data": {
        "categories": [
            {
                "tags": [],
                "_id": "5df5e904c4c5e4c9004d5cee",
                "name": "前端",
                "__v": 0
            }
        ]
    }
}
```

<a name="8464c96a"></a>
## 4、增添分类

<a name="d6a46a98-4"></a>
### 请求URL：

```
http://localhost:1998/api/v1.0/addCategory	
```

<a name="6777a7c8-4"></a>
### 请求方式：



```
POST
```


<a name="a74b08d1-2"></a>
### 参数类型: 请求体

| 参数 | 是否必选 | 类型 | 说明 |
| --- | --- | --- | --- |
| categoryname | Y | string | 分类名 |
| tags | N | Array/String | 分类标签名 |




<a name="ec2d684e-4"></a>
### 返回示例：

```
{
    "status": 0,
    "data": {
        "categories": [
            {
                "tags": [],
                "_id": "5df5e904c4c5e4c9004d5cee",
                "name": "前端",
                "__v": 0
            },
            {
                "tags": [
                    "集群"
                ],
                "_id": "5df5f2319608bdca21111e3d",
                "name": "JAVA",
                "__v": 0
            }
        ]
    }
}
```

<a name="8c3fcd48"></a>
## 5、更新分类

<a name="d6a46a98-5"></a>
### 请求URL：

```
http://localhost:1998/api/v1.0/delCategory
```

<a name="6777a7c8-5"></a>
### 请求方式：


```
POST
```


<a name="a74b08d1-3"></a>
### 参数类型: 请求体

| 参数 | 是否必选 | 类型 | 说明 |
| --- | --- | --- | --- |
| id | Y | string | 分类id |


<a name="ec2d684e-5"></a>
### 返回示例：   

```
{
    "status": 0,
    "data": {
        "categories": [
            {
                "tags": [
                    "集群"
                ],
                "_id": "5df5f2319608bdca21111e3d",
                "name": "大数据",
                "__v": 0
            }
        ]
    }
}
```

<a name="zltxj"></a>
## 6、删除分类

<a name="gesZ6"></a>
### 请求URL：

```
http://localhost:1998/api/v1.0/delCategory
```

<a name="OF1zc"></a>
### 请求方式：


```
POST
```


<a name="CoGkL"></a>
### 参数类型: 请求体

| 参数 | 是否必选 | 类型 | 说明 |
| --- | --- | --- | --- |
| id | Y | string | 分类id |


<a name="Pbf66"></a>
### 返回示例：   

```
{
    "status": 0,
    "data": {
        "categories": []
    }
}
```

<a name="z3ab4"></a>
## 7、获取分类标签

<a name="axcyZ"></a>
### 请求URL：

```
http://localhost:1998/api/v1.0/getTags
```

<a name="5vLUE"></a>
### 请求方式：


```
GET
```


<a name="93CRG"></a>
### 参数类型: 请求体

| 参数 | 是否必选 | 类型 | 说明 |
| --- | --- | --- | --- |
| id | Y | string | 分类id |


<a name="5xirN"></a>
### 返回示例：   

```
{
    "status": 0,
    "data": {
        "tags": [
            "集群"
        ],
        "categoryName": "大数据"
    }
}
```

<a name="9Lhuc"></a>
## 8、增加分类标签

<a name="ADAdo"></a>
### 请求URL：

```
http://localhost:1998/api/v1.0/addTag
```

<a name="vRxSt"></a>
### 请求方式：


```
POST
```


<a name="FYANY"></a>
### 参数类型: 请求体

| 参数 | 是否必选 | 类型 | 说明 |
| --- | --- | --- | --- |
| id | Y | string | 分类id |
| tagname | Y |  |  |


<a name="wj5Mu"></a>
### 返回示例：   

```
{
    "status": 0,
    "data": {
        "tags": [
            "区域集群",
            "分布式集群"
        ],
        "categoryId": "5df5f2319608bdca21111e3d"
    }
}
```
<a name="oaEy9"></a>
## 
<a name="Q8GWw"></a>
## 9、更新分类标签

<a name="YaePO"></a>
### 请求URL：

```
http://localhost:1998/api/v1.0/updateTags
```

<a name="CFNjz"></a>
### 请求方式：


```
POST
```


<a name="EmLgb"></a>
### 参数类型: 请求体

| 参数 | 是否必选 | 类型 | 说明 |
| --- | --- | --- | --- |
| id | Y | string | 分类id |
| targetTag | Y | string | 目标标签名 |
| tagName | Y | string | 新标签名 |


<a name="Htjpg"></a>
### 返回示例：   

```
{
    "status": 0,
    "data": {
        "tags": [
            "集群",
            "分布式集群"
        ],
        "categoryId": "5df5f2319608bdca21111e3d"
    }
}
```
<a name="3E8ot"></a>
## 
<a name="IZ79v"></a>
## 10、删除分类标签

<a name="Q1F1f"></a>
### 请求URL：

```
http://localhost:1998/api/v1.0/delTag
```

<a name="51P8W"></a>
### 请求方式：


```
POST
```


<a name="G3W9r"></a>
### 参数类型: 请求体

| 参数 | 是否必选 | 类型 | 说明 |
| --- | --- | --- | --- |
| id | Y | string | 分类id |
| targetTag | Y | string | 目标标签名 |


<a name="MHf8U"></a>
### 返回示例：   

```
{
    "status": 0,
    "data": {
        "tags": [
            "分布式集群"
        ],
        "categoryName": "大数据"
    }
}
```
<a name="aoO5K"></a>
## 
<a name="46Puc"></a>
## 11、获取文章

<a name="XfcTg"></a>
### 请求URL：

```
http://localhost:1998/api/v1.0/getArticles
```

<a name="xzarg"></a>
### 请求方式：


```
GET
```


<a name="jVnX8"></a>
### 参数类型: 

| 参数 | 是否必选 | 类型 | 说明 |
| --- | --- | --- | --- |
| _id | N | string | 文章id |
| title | N | string | 文章标题 |
| author | N | string | 作者 |
| tag | N | string | 标签 |
| category | N | string | 分类 |
| isPublish | N | Boolean | 已发布 |
| isDeleted | N | Boolean | 已删除 |
| pageNum | N | Number | 页码 |
| pageSize | N | Number | 当页数量 |


<a name="U6hr1"></a>
### 返回示例：   

```
{
    "status": 0,
    "data": {
        "total": 4,
        "articles": [
            {
                "_id": "5df56032b5b4ecb8bc66f5c4",
                "title": "vuex",
                "content": "vuex",
                "author": "admin",
                "category": "前端",
                "isPublish": true,
                "tag": "vue",
                "coverImg": "",
                "viewCount": 0,
                "likes": 0,
                "createTime": "1576362034941",
                "isDeleted": false,
                "__v": 0
            }
        ]
    }
}
```
<a name="5yS38"></a>
## 
<a name="hvkle"></a>
## 12、添加文章

<a name="jwAtP"></a>
### 请求URL：

```
http://localhost:1998/api/v1.0/addArticle
```

<a name="iho8Y"></a>
### 请求方式：


```
POST
```


<a name="cwMZh"></a>
### 参数类型: 

| 参数 | 是否必选 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- | --- |
| title | Y | string | 文章标题 |  |
| content | Y | string | 文章内容 |  |
| author | Y | string | 作者 |  |
| category | Y | string | 分类 |  |
| isPublish | Y | Boolean | 是否已发布 |  |
| tag | N | string | 标签 | "" |
| coverImg | N | string | 文章配图 | "" |
| viewCount | N | Number | 阅读次数 | 0 |
| likes | N | Number | 点赞次数 | 0 |
| isDeleted | N | Boolean | 是否已删除 | false |
| createTime | N | string | 创建时间 | Date.now() |


<a name="MoYsj"></a>
### 返回示例：   

```
{
    "status": 0,
    "data": {
        "total": 5,
        "articles": [
            {
                "_id": "5df6026938ff43cdf6d1c5b6",
                "title": "从0到1：node服务器搭建",
                "content": "今天我们来说说如何使用node搭建服务器...",
                "author": "ron",
                "category": "Node.js",
                "isPublish": true,
                "tag": "",
                "coverImg": "",
                "viewCount": 0,
                "likes": 0,
                "isDeleted": false,
                "createTime": "1576403561966",
                "__v": 0
            }
        ]
    }
}
```

<a name="db7KO"></a>
## 13、更新文章

<a name="mBr04"></a>
### 请求URL：

```
http://localhost:1998/api/v1.0/updateAricle
```

<a name="4Vn5L"></a>
### 请求方式：


```
POST
```


<a name="6mBe9"></a>
### 参数类型: 

| 参数 | 是否必选 | 类型 | 说明 |
| --- | --- | --- | --- |
| id | Y | string | 文章id |
| title | N | string | 文章标题 |
| content | N | string | 文章内容 |
| author | N | string | 作者 |
| category | N | string | 分类 |
| isPublish | N | Boolean | 是否已发布 |
| tag | N | string | 标签 |
| coverImg | N | string | 文章配图 |
| viewCount | N | Number | 阅读次数 |
| likes | N | Number | 点赞次数 |
| isDeleted | N | Boolean | 是否已删除 |
| createTime | N | string | 创建时间 |


<a name="R12L5"></a>
### 返回示例：   

```
{
    "status": 0,
    "data": {
        "article": {
            "_id": "5df6026938ff43cdf6d1c5b6",
            "title": "从0到1：node服务器搭建...",
            "content": "今天我们来说说如何使用node搭建服务器...",
            "author": "admin",
            "category": "后端",
            "isPublish": false,
            "tag": "",
            "coverImg": "",
            "viewCount": 0,
            "likes": 0,
            "isDeleted": false,
            "createTime": "1576403561966",
            "__v": 0
        }
    }
}
```

<a name="PRXEU"></a>
## 14、删除文章

<a name="ltpAF"></a>
### 请求URL：

```
http://localhost:1998/api/v1.0/delArticle
```

<a name="bF4rt"></a>
### 请求方式：


```
POST
```


<a name="gzB02"></a>
### 参数类型: 

| 参数 | 是否必选 | 类型 | 说明 |
| --- | --- | --- | --- |
| id | Y | string | 文章id |


<a name="kanvs"></a>
### 返回示例：   

```
{
    "status": 0,
    "total": 1,
    "articles": [
        {
            "_id": "5df6066dac32b7cf20ba0eef",
            "title": "从0到1：node服务器搭建...",
            "content": "今天我们继续来说说如何使用node搭建服务器...",
            "author": "ron",
            "category": "后端",
            "isPublish": true,
            "tag": "",
            "coverImg": "",
            "viewCount": 0,
            "likes": 0,
            "isDeleted": false,
            "createTime": "1",
            "lastModifiedTime": "1576404701230",
            "__v": 0
        }
    ]
}
```
