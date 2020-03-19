let fortune=function()
{
    let a=["good","bad","lucky","rich","poor"];
    let num=Math.random();
    let num1=parseInt(num);
    console.log(`The random number is ${num}`);
    let index=num1%5;
    console.log(`!!!Your fortune happens to be that you are ${a[index]}!!!`);
}
fortune();
