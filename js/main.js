

function getNewTime(){
  newTime = new Date()
  document.getElementById('nowTime').innerHTML = dateToString(newTime)
}
function getSpaceTime(){
  var spaceTime = newTime.getTime() - startTime.getTime()
  document.getElementById('spaceTime').innerHTML = (spaceTime/3600000).toFixed(1) + ' hours'
  document.getElementById('spaceDate').innerHTML = (spaceTime/(24*3600000)).toFixed(1) + ' days'
}

function dateToString(time) {
  let date = new Date(time)
  let year = date.getFullYear()
  let month = date.getMonth()
  if (month < 10) {
    month = '0' + month
  }
  let day = date.getDate()
  if (day < 10) {
    day = '0' + day
  }
  let hour = date.getHours()
  if (hour < 10) {
    hour = '0' + hour
  }
  let min = date.getMinutes()
  if (min < 10) {
    min = '0' + min
  }
  let sec = date.getSeconds()
  if (sec < 10) {
    sec = '0' + sec
  }
  let dateText = year + '/' + month + '/' + day + ' \n ' + hour + ':' + min + ':' + sec
  return dateText
}
