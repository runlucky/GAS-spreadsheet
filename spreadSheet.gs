function getResults() {
  var list = getRecords("A2:C100").map(toResult);
  list.sort(sort);
  return list;
}
function getRecords(range) {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getSheetByName("フォームの回答 1");
  var records = sheet.getRange(range).getValues();

  return records.filter(function(x) {
    return x[2] != "";
  });
}

function toResult(record) {
  return {
    time: record[0],
    score: record[1],
    name: record[2]
  };
}

function sort(lhs, rhs) {
  if (lhs.score < rhs.score) return 1;
  if (lhs.score > rhs.score) return -1;
  if (lhs.time < rhs.time) return -1;
  if (lhs.time > rhs.time) return 1;
  return 0;
}

