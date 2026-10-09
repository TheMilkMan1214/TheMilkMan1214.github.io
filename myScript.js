document.addEventListener("DOMContentLoaded", function () {
	let color = prompt("Please enter the hexcode of the primary color you want", "#FFFFFF");
	let primary;
	let result;
	if (color == null || color == "" || typeof color != number) {
 		primary = "#FFFFFF";
	} else {
  		primary = color;
    	document.getElementById("demo").innerHTML = "I'm placeholding!" + primary;
	} 
});
