 var fishstyle;   
     
 fishstyle = document.getElementById("fish");     
 var i=fish.getBoundingClientRect().left;
    var id = setInterval(swim, 5);
 
   function swim() {      
   if(i==800){
	
	i=0;
	
	
	
	}
	else{
 	i++;
	fishstyle.style.left = i + "px";   

  }   
}
