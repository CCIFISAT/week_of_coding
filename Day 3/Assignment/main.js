console.log("Lets us tell your fortune");
let myArray = ["Good","Bad","Unlucky","Lucky","Happy","Sad"];
console.log(myArray);

result = Math.floor(Math.random() * 6);  //finds a random value between 0(inclusive) and 6(exclusive)
console.log(result);
myArray.forEach(fortune);

function fortune(item,index)
{
if(index==result)  
    console.log(item);
}



