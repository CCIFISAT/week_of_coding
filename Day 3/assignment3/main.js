console.log("please refresh for next fortune");
var answers = ["Someone in your life needs a letter from you","if you eat something and nobody sees you eat it,it has no calories","About time I got out of that cookies","Your heart will skip a beat ","Don't be afraid."];
function fortune() {
     var num = Math.floor((answers.length - 1) * Math.random());
     return num;}
     u = fortune()  
     console.log( "Fortune:" +answers[u]);