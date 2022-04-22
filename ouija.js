//board typing mechanism
var html = '';
var c;
for (var i = 65; 90 >= i; i++) {// A-65, Z-90
  c = String.fromCharCode(i);
  html += '<button id="letters" onclick="setLetter(\'' + c + '\');">' + c + '</button>';
}
document.getElementById('box').innerHTML = html;

var setLetter = function(x) {
  document.getElementById('display').innerHTML += x;
};

// pointer planchette
$(document).mousemove(function (e) {
	$(".pointer").css({ left: e.pageX, top: e.pageY });
  });

//goodbye page refresh
function refreshPage(){
    window.location.reload();
} 