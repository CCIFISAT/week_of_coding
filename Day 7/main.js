
var k = document.getElementsByTagName("LI");
var i;
for (i = 0; i < k.length; i++) {
  var s = document.createElement("SPAN");
  var t = document.createTextNode("\u00D7");
  s.className = "close";
  s.appendChild(t);
  k[i].appendChild(s);
}
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var d = this.parentElement;
    d.style.display = "none";
  }
}
 var l = document.querySelector('ul');
l.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false); 

function addnew() {
  var li = document.createElement("li");
  var inputvalue = document.getElementById("add").value;
  var ty = document.createTextNode(inputvalue);
  li.appendChild(ty);
  if (inputvalue === '') {
    alert("Invalid");
  } else {
    document.getElementById("todo").appendChild(li);
  }
  document.getElementById("add").value = "";

  var s = document.createElement("SPAN");
  var t = document.createTextNode("\u00D7");
  s.className = "close";
  s.appendChild(t);
  li.appendChild(s);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var d = this.parentElement;
      d.style.display = "none";
    }
  }
} 
