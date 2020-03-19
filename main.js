my_array = ["you are going to have 100 dollars","you are going to have girl child","you are going to have boy child","you are going to have house","you are going to have car","you are going to have scooty","you are going to have twins","you are going to have lollipop","you are going to have a happy life","you are going to have a family","you are going to be married"];
function getinteger(min,max)
{
	return Math.floor((Math.random()*(max-min))+min);
}
let var1 = getinteger(0,10);
console.log(my_array[var1]);
