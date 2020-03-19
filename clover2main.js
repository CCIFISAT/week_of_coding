console.log("Refresh if you want to know ur next fortune");

function skeleton(){

  var a=[ "You will be a billionaire!",
           "Watch for your health, more vitamins!",
            "Love of your life is on the way!",
            "soul go to the Mars!",
             "Nothing special..."];

  var number = Math.floor((Math.random() * 5)+ 1);

  var number = Math.floor((Math.random() * 5)+ 1); 

  let element=a[number];


  console.log("predicted fortune is : "+(element));
}
  
skeleton();
