export default {
  getTimeAgo(timestamp) {
    // 补全为13位
    var arrTimestamp = (timestamp + '').split('')
    for (var start = 0; start < 13; start++) {
      if (!arrTimestamp[start]) {
        arrTimestamp[start] = '0'
      }
    }
    timestamp = arrTimestamp.join('') * 1

    var minute = 1000 * 60
    var hour = minute * 60
    var day = hour * 24
    //var halfamonth = day * 15;
    var month = day * 30 //一个月按30天算
    var now = new Date().getTime()
    var diffValue = now - timestamp

    // 如果本地时间反而小于变量时间
    if (diffValue < 0) {
      return '不久前'
    }

    // 计算差异时间的量级
    var monthC = diffValue / month
    var weekC = diffValue / (7 * day)
    var dayC = diffValue / day
    var hourC = diffValue / hour
    var minC = diffValue / minute

    // 数值补0方法
    var zero = function(value) {
      if (value < 10) {
        return '0' + value
      }
      return value
    }

    // 使用
    if (monthC > 12) {
      // 超过1年，直接显示年月日
      return (function() {
        var date = new Date(timestamp)
        return (
          date.getFullYear() +
          '年' +
          zero(date.getMonth() + 1) +
          '月' +
          zero(date.getDate()) +
          '日'
        )
      })()
    } else if (monthC >= 1) {
      return parseInt(monthC) + '月前'
    } else if (weekC >= 1) {
      return parseInt(weekC) + '周前'
    } else if (dayC >= 1) {
      return parseInt(dayC) + '天前'
    } else if (hourC >= 1) {
      return parseInt(hourC) + '小时前'
    } else if (minC >= 1) {
      return parseInt(minC) + '分钟前'
    }
    return '片刻之前'
  },
  formateDate(time) {
    if (!time) return ''
    let date = new Date(time - 0)
    return (
      date.getFullYear() +
      '-' +
      (date.getMonth() + 1) +
      '-' +
      date.getDate() +
      ' ' +
      (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) +
      ':' +
      (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) +
      ':' +
      (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds())
    )
  }
  //     let date = new Date()
  //     var o = {
  //       'M+': date.getMonth() + 1, // month
  //       'd+': date.getDate(), // day
  //       'h+': date.getHours(), // hour
  //       'm+': date.getMinutes(), // minute
  //       's+': date.getSeconds(), // second
  //       'q+': Math.floor((date.getMonth() + 3) / 3), // quarter
  //       S: date.getMilliseconds()
  //       // millisecond
  //     }
  //     if (/(y+)/.test(format) || /(Y+)/.test(format)) {
  //       format = format.replace(
  //         RegExp.$1,
  //         (date.getFullYear() + '').substr(4 - RegExp.$1.length)
  //       )
  //     }
  //     for (var k in o) {
  //       if (new RegExp('(' + k + ')').test(format)) {
  //         format = format.replace(
  //           RegExp.$1,
  //           RegExp.$1.length == 1
  //             ? o[k]
  //             : ('00' + o[k]).substr(('' + o[k]).length)
  //         )
  //       }
  //     }
  //     return format
  //   }
}
