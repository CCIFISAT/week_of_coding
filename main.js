console.log("Refresh to know ur next fortune");

function skeleton(){
  var a=["YOU WILL GET WHAT YOU WISH FOR!!!","ENEMIES ARE AOUND YOU.BEWARE!!!!!!","ENJOY LIFE AS MUCH AS YOU CAN!!!"];
  var no = Math.floor((Math.random() * 3)+ 1);
  var no = Math.floor((Math.random() * 3)+ 1); 
  let element=a[no];
  console.log("predicted fortune is : "+(element));

}
skeleton();
