function onEdit(event) {
  var result = getResults().map(function(x, i) {
    return toRow(x, i + 1)
  })
  
  var header = '<div style="text-align: center;">'
  var footer = "</div><div>" + time(new Date()) + "</div>"

  setContent(header + results(result) + footer);  
}


function results(result) {
  return result.reduce(function(previous, current, index, array) {
    return previous + current;
  });
}

function toRow(row, index) {
  return '<div style="font-size: 30px;">'
  + '<span style="display: inline-block; width: 100px">'  + index + "位</span>"
    + '<span style="display: inline-block; width: 300px; text-align: left">' + row.name + " さん</span>"
    + '<span style="display: inline-block; width: 100px; text-align: right; margin-right: 20px">' + row.score + "点</span>"
    + '<span style="display: inline-block; width: 200px; font-size: 20px; color: gray;">' + time(row.time) + '</span>'
    + '</div>';
}

function time(v) {
  var hour   = ("0" + v.getHours()).slice(-2)
  var minute = ("0" + v.getMinutes()).slice(-2)
  var second = ("0" + v.getSeconds()).slice(-2)
  var milli  = ("0" + v.getMilliseconds()).slice(-2)
  return hour + "時" + minute + "分" + second + "秒" + milli
}
