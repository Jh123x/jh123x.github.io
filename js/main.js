//Main Javascript
var navbarhtml = document.getElementById("navbar.html");
var menubtn = document.getElementById("expandbtn");
menubtn.addEventListener("click", expandmenu );


function expandmenu(){
	console.log(menubtn);
	if(menubtn["aria-expanded"] == "true"){
		navbarhtml.style.height = "465px";
		console.log(navbarhtml.style.height);
	}

	else{
		navbarhtml.style.height = "167px";
	}
	
}