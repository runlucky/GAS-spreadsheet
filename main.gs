function update(event) {
  var header = '<div style="text-align: center; font-size: 30px;">'
  var ranking = getResults().map(toHtml).reduce(reduce)
  var footer = "</div><div>" + formatTime() + "</div>"

  setContent(header + ranking + footer);  
}

function toHtml(row, index) {
  return getHeader(index + 1)
    + '<span style="display: inline-block; width: 100px">'  + (index + 1) + "位</span>"
    + '<span style="display: inline-block; width: 300px; text-align: left">' + row.name + " さん</span>"
    + '<span style="display: inline-block; width: 100px; text-align: right; margin-right: 20px">' + row.score + "点</span>"
    + '<span style="display: inline-block; width: 200px; font-size: 20px; color: gray;">' + formatTime(row.time) + '</span>'
    + '</div>';
}

function getHeader(index){
  if (index < 4) return '<div>'; // 8
  if (index < 5) return '<div style="font-size: 25px; color: gray; margin-top: 40px">';
  return '<div style="font-size: 25px; color: gray">';
}

function reduce(previous, current, index, array) {
  return previous + current;
}
