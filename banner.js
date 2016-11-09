var ca=document.getElementById('carousel');
var interval=setInterval("change(ca)",3000);
var i=2;
function change(a) {
	a.style.background="url(images/pic"+i+".jpg)";
	i=(i==3)? 1 : i+1;
}

function pageScroll() {
	window.scrollBy(0,-100);
	scrolldelay=setTimeout('pageScroll()',1);
	if(document.documentElement.scrollTop==0) {
		clearTimeout(scrolldelay);
	}
}