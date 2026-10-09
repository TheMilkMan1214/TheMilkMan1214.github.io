document.addEventListener("DOMContentLoaded", function () {
	let color = prompt("Please enter the hexcode of the primary color you want", "#FFFFFF");
	let primary;
	if (color == null || color == "" || typeof color != number) {
 		primary = "#FFFFFF";
	} else {
  		primary = color;
		const buttons = document.getElementByClassName("button");
		for (let i = 0; i < buttons.length; i++) {
			 buttons[i].style.color = primary;
		}
	} 
});
