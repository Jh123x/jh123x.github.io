//Javascript of About Us Page
//Includes: Hiding.


//For additional elements that require toggling, include the var and add event listener below
var gform = document.getElementById("googleformlink");
gform.addEventListener("click",toggle);


function toggle() {
	var toggleId = this.attributes["data-form"].value;
	var toggle = document.getElementById(toggleId);
	toggle.classList.toggle("toggle")

	
}
