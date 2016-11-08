var ca=document.getElementById('carousel'),team = document.getElementById('teamIntro');
window.onload = function(){

};
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
document.body.addEventListener("DOMMouseScroll", function(event) {
    console.dir(event);	
    console.log(event.wheelDelta);
});
document.body.onmousewheel = function(event) {
    event = event || window.event;
    console.dir(event);	
    console.log(event.wheelDelta);
    team.style.top =0;
};