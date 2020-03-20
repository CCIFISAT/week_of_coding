var elem = document.getElementById("animate");
var pos=200;
var id = setInterval(frame, 8);
function frame(){
  if(pos==1000){
    pos=10;
  }else{
    pos++;
    elem.style.right = pos + "px";
  }
}
