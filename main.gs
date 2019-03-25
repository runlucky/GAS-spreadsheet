function onEdit(event) {
  var result = getRecords().map(function(x, i) {
    return toRow(x, i + 1)
  })
  
  var header = '<div style="text-align: center;">'
  var footer = "</div>"

  var page = SitesApp.getPageByUrl(getUrl());
  page.setHtmlContent(header + results(result) + footer);
}


function getAllRecords() { 
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getSheetByName('フォームの回答 1');
  var range = sheet.getRange('A2:C100').getValues();
  
  return range.filter(function(x){
    return x[2] != ""
  })
}

function getRecords() { 
  var list = getAllRecords().map(function(x){
    return toRecord(x)
  })
  
  list.sort(function(a, b) {
    if (a.score < b.score) return 1;
    if (a.score > b.score) return -1;
    if (a.time < b.time) return -1;
    if (a.time > b.time) return 1;
    return 0;
  })

  return list
}

function results(result) {
  return result.reduce(function (previous, current, index, array) {
    return previous + current;
  })
}

function toRecord(row) {
  return {
    time:  row[0],
    score: row[1],
    name:  row[2] 
  };
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
