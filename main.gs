function update(event) {
  var header = '<div style="font-size:50px; margin-bottom: 30px;text-align: center;">結果発表！</div><div style="font-size: 30px;text-align: center;margin-bottom:50px;">'
  var ranking = getRanking()
  var footer = "</div><div>" + formatTime() + "</div>"

  setContent(header + ranking + footer);  
}

function getRanking(){
  var temp = getResults()
  if (temp.length == 0) { return "<div>まだ誰も回答していません…</div>" }
  var ranking = results.map(toHtml).reduce(reduce)
  return ranking
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
  if (index < 8) return '<div>'; // 8
  if (index < 9) return '<div style="font-size: 25px; color: gray; margin-top: 40px">';
  return '<div style="font-size: 25px; color: gray">';
}

function reduce(previous, current, index, array) {
  return previous + current;
}
