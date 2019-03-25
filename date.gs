function formatTime(time) {
  if (time == null) {
    time = new Date()
  }
  var hour   = ("0" + time.getHours()).slice(-2)
  var minute = ("0" + time.getMinutes()).slice(-2)
  var second = ("0" + time.getSeconds()).slice(-2)
  var milli  = ("0" + time.getMilliseconds()).slice(-2)
  return hour + "時" + minute + "分" + second + "秒" + milli
}
