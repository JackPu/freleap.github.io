function writeLog(str) {
    var el = document.createElement("P")
    var now = Date.now()
    console.log(str + ':' + now + ' (+' + (now - startDate) + ')')
    el.innerText = str + ':' + now + ' (+' + (now - startDate) + ')'
    var wrap = document.querySelector('#js-contents')
    wrap.appendChild(el)
}
document.addEventListener('readystatechange', function() {
  if (document.readyState == 'loading') {
      writeLog("readystatechange-loading")
  } else if (document.readyState == 'interactive') {
      writeLog("readystatechange-interactive")
  } else if (document.readyState == 'complete') {
      writeLog("readystatechange-complete")
  }
})
window.onload = function() {
  writeLog("window onLoad")
}