//Search Bar Function

var search = document.getElementById("search");
var searchbtn = document.getElementById("searchbtn");
searchbtn.addEventListener("Click", search);



function search(){


	if(search.value == "Search"){
		search.value = "";
		search.placeholder = "Search";

	}
	else {
		
	}
}
