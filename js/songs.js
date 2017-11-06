//javascript for songs page

var meaning1 = document.getElementById("meaningbtn1");
meaning1.addEventListener("click",toggle);
var lyric1 = document.getElementById("lyricsbtn1");
lyric1.addEventListener("click", toggle);
var meaning2 = document.getElementById("meaningbtn2");
meaning2.addEventListener("click",toggle);
var englishsong = document.getElementById("engsongbtn");
englishsong.addEventListener("click",toggle);
var lyric2 = document.getElementById("lyricsbtn2");
lyric2.addEventListener("click",toggle);

function toggle (){
	var toggleid = this.attributes["data-toggle"].value;
	var toggle = document.getElementById(toggleid);
	toggle.classList.toggle("toggle");

}