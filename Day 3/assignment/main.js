var fortune = [
  "keep your head down if you want to find money on the sidewalk.",
"be ready to open the door when opportunity knocks.",
"when your only tool is a hammer, every problem begins to look like a thumb.",
"patience is a virtue.",
"watch your step.",
"somebody loves you", "somebody hates you"
];


function fortunes()
{
  var i = Math.floor(Math.random() * fortune.length);
  return i
}
 n = fortunes()
	//console.log(n);
  console.log("Your Fortune : " +fortune[n]);
  console.log("\nRefresh for next fortune");

