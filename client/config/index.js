let DB_CONFIG, SERVER_CONFIG

// 数据库链接配置
DB_CONFIG = {
  port: 27017,
  host: 'localhost'
}

// 服务器链接配置
SERVER_CONFIG = {
  port: 1998
}

// jsonwebpack插件需要的秘钥
const PRIVARE_KEY = 'Galaxy Defender'

module.exports = {
  DB_CONFIG,
  SERVER_CONFIG,
  PRIVARE_KEY
}
