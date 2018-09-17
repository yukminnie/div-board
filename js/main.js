var div = document.getElementById('canvas')

div.onmousedown = function(a){
  console.log('点击了')
  var x = a.clientX
  var y = a.clientY
  var divA = document.createElement('div')
  divA.className = 'dot'
  divA.style = 'left: ' + (x-3) + 'px;'  + 'top: ' + (y-3) + 'px;'
  div.appendChild(divA)
}

div.onmousemove = function(b){

}

div.onmouseup = function(c){

}
