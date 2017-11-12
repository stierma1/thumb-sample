
function buildThumbSample(title, displayUrl, resolutionList){
  var res = [];
  for(var i in resolutionList){
    res.push("<li class='thumb-sample-resolution-item'><a href='" + resolutionList[i] + "' target='_blank'>" + i + "</a></li>")
  }

  return "<div class='thumb-sample'>" +
    "<h3 class='thumb-sample-title'>" + title + "</h3>" +
    "<img src='" + displayUrl + "' /><div>" +
    "<ol class='thumb-sample-resolution-list'>" + res.join("") + "</ol></div>" +
  "</div>"
}

if(module){
  module.exports = buildThumbSample;
}
