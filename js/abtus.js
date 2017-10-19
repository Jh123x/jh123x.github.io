//Javascript of About Us Page
//Edit with caution
//Includes: Hiding.


//For additional elements that require toggling, include the var and add event listener below
var gform = document.getElementById("googleformlink");
gform.addEventListener("click",toggle);


function toggle() {
	var toggleId = this.attributes["data-toggle"].value;
	var toggle = document.getElementById(toggleId);
	if (toggle.classList.contains("toggle")) {
		toggle.className -= " toggle";
	}
	
	else {
		toggle.className += " toggle";
	}
	
}
