var burger = [
  "A hamburger (also burger for short) is a food consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun. ",
"The patty may be pan fried, grilled, smoked[1] or flame broiled.",
" Hamburgers are often served with cheese, lettuce, tomato, onion, pickles, bacon, or chiles;",
"burgers are cheap.",
"Burger has a lot of fat content",
"everybody loves burger", "eat healthy burger"
];


function burgers()
{
  var i = Math.floor(Math.random() * burger.length);
  return i
}
 n = burgers()
	//console.log(n);
  console.log("See burger : " +burger[n]);
  console.log("\nrefresh to see burger");
