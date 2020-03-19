function urfortune(){
let fortunes = new Array("riches awaits you but for a price","death at your doorstep","love has found its way to you","demons of disease has spared you"," the universe didn't know you existed","your past mistake has gained new life","go ahead with your new venture, the universe is with you","the good deeds of your past has made its way back to you ");
let choice = Math.floor(Math.random()*8);
return fortunes[choice];
}
console.log(urfortune());