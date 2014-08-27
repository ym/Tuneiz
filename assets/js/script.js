// 滚动 Fixed
function scroll_top(){
	var scrollPos;
	if (typeof window.pageYOffset != 'undefined') {
		 scrollPos = window.pageYOffset;
	}
	else if (typeof document.compatMode != 'undefined' &&
		 document.compatMode != 'BackCompat') {
		 scrollPos = document.documentElement.scrollTop; 
	}
	else if (typeof document.body != 'undefined') {
		 scrollPos = document.body.scrollTop;
	}
	return scrollPos;
}

function scroll_nav() {
	if (scroll_top() > vhh) {
		nav.className = "main_nav_ctn main_nav_ctn_s";
	} else {
		nav.className = "main_nav_ctn";
	}
}

var nav = document.getElementById("nav");
var vh = window.screen.height;
var vhh = vh * 0.5;

window.onscroll = scroll_nav;

nav.onclick = function scrollTop() {
	document.body.scrollTop = document.documentElement.scrollTop = 0;
};

function sendTj() {
	var xmlhttp;
	if (window.XMLHttpRequest) { xmlhttp=new XMLHttpRequest(); } else { xmlhttp=new ActiveXObject("Microsoft.XMLHTTP"); };
	xmlhttp.open("GET","http://work.dimpurr.com/theme/theme_tj.php?theme_name=Tuneiz&blog_url=Test&t=" + Math.random(),true);
	xmlhttp.send();
}

sendTj();