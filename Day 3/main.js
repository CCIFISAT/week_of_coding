function skelton(){
  var array=["You will become a millionare","You might get sick today","Today will be a good day",
  "Dont get out of home today","This year is going to affect you","Kindness will be repayed back to you today",
  "You will get a new pet","You will have fun today","You will meet someone unexpected today",
  "Something unexpected might happen","You will win the jackpot !!!"];
  var num = Math.floor((Math.random() * 10)+ 1);
  let element=array[num];
  console.log("Your fortune : "+(element));
}
skelton();
