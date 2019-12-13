let DB_CONFIG, SERVER_CONFIG

// 数据库链接配置
DB_CONFIG = {
  port : 27017,
  host:'localhost'
}

// 服务器链接配置
SERVER_CONFIG = {
  port : 1998
}

module.exports = {
  DB_CONFIG,
  SERVER_CONFIG
}