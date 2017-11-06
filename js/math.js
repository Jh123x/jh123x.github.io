//This is the Javascript for the Math.html Page

 var a = document.getElementById("quada");
 var b = document.getElementById("quadb");
 var c = document.getElementById("quadc");
 var quadans = document.getElementById("quad-ans");

 quada.addEventListener("input",quad);
 quadb.addEventListener("input",quad);
 quadc.addEventListener("input",quad);

function quad() {
	var aa = parseFloat(a.value) || 0;
	var bb = parseFloat(b.value) || 0;
	var cc = parseFloat(c.value) || 0;
	

		var dis = ((bb*bb)-(4*aa*cc));
		var a2 = 2*aa
		var quad1 = (- bb + Math.sqrt(dis));
		var quad2 = (- bb - Math.sqrt(dis));
		var quadans1 = -quad1/a2;
		var quadans2 = -quad2/a2;

		if ( quadans1 === quadans2 ) {
			quadans.innerHTML = "There is only 1 root " + quadans2;
		}

		if ( aa === 0 ) {
		quadans.innerHTML = "The is equation is not quadratic"
	}
		
		else { 
			quadans.innerHTML = "First Root = " + quadans1 + "   Second Root = " + quadans2 ;
		}
	
}

var qeqn = document.getElementById("quadeqnlink");
qeqn.addEventListener("click",toggle);

function toggle () {
	var toggleid = this.attributes["data-eqn"].value;
	var toggle = document.getElementById(toggleid);
	if (toggle.classList.contains("toggle")){
		toggle.classList -= " toggle";
	}
	else {
		toggle.classList += " toggle";
	}
}