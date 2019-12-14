# 接口文档

## 目录：
[1、登录](#1登录)<br/>
[2、注册](#2注册)<br/>
[3、获取一次性验证码 (未完成)](#3获取一次性验证码)<br/>
[4、获取标签](#4获取标签)<br/>

## 1、登录
     
### 请求URL：
	http://localhost:1998/api/login

### 请求方式：
	POST

### 参数类型：

	|参数		 |是否必选 |类型     |说明
	|username |Y       |string   |用户名
	|password |Y       |string   |密码

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
## 2、注册

### 请求URL：
	http://localhost:1998/api/register

### 请求方式：
	POST

### 参数类型：

	|参数		        | 是否必选 |类型     |说明
	|username       |Y        |string   |用户名
  |email       |Y        |string   | 邮箱
	|password       |Y        |string   |密码
	|rePassword     |Y        |string   |重复密码
	

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
## 3、获取一次性验证码 
### (未完成)
     
### 请求URL：
	http://localhost:1998/login_sms

### 请求方式：
	POST

### 参数类型: 请求体

	|参数		|是否必选 |类型     |说明
	|phone       |Y       |string   |手机号
	|code        |Y       |string   |验证码

### 返回示例：
```
    * 登陆成功
      {
        "code": 0,
        "data": {
          "_id": "5a9cd9c6ad5b2d34d42b385d",
          "phone": "13716962779"
        }
      }
    * 登陆失败
      {
        "code": 1,
        "msg": "手机号或验证码不正确"
      }
      
```
## 4、获取标签
### 请求URL：
	http://localhost:1998/api/getTags

### 请求方式：
	GET

### 参数类型: 请求体

	|参数		|是否必选 |类型     |说明
	|无       |       |   |

### 返回示例：
```
    {
    "status": 0,
    "msg": "获取标签成功"
    "data": {
        "tags": [
            {
                "_id": "5df442627332a888dd445d7c",
                "name": "vue",
                "__v": 0
            },
            {
                "_id": "5df442757332a888dd445d7d",
                "name": "react",
                "__v": 0
            }
        ]
    }
  }
      
```
## 5、增添标签
### 请求URL：
	http://localhost:1998/api/addTag

### 请求方式：
  POST

### 参数类型: 请求体

	|参数		|是否必选 |类型     |说明
	|tagname       |  Y     | String  |标签名

### 返回示例：
```
    {
    "status": 0,
    "msg": "添加标签成功",
    "data": {
        "tags": [
            {
                "_id": "5df442627332a888dd445d7c",
                "name": "vue",
                "__v": 0
            },
            {
                "_id": "5df442757332a888dd445d7d",
                "name": "react",
                "__v": 0
            }
        ]
      }
      
```
## 删除标签
### 请求URL：
	http://localhost:1998/api/delTag

### 请求方式：
  POST

### 参数类型: 请求体

	|参数		|是否必选 |类型     |说明
	|tagname       |  Y     | String  |标签名

### 返回示例：
```
    {
    "status": 0,
    "msg": "删除标签成功",
    "data": {
        "tags": [
            {
                "_id": "5df442757332a888dd445d7d",
                "name": "react",
                "__v": 0
            }
        ]
    }
  }
```
