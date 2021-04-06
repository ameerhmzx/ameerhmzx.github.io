var animated = false;
function loadPage() {
    animationDuration = 3000;
    logo = document.getElementById('animated-logo');
    PrefixedEvent(logo, "animationiteration", ()=>{
        setTimeout(()=>{ logo.classList = "animate-fill"; animated=true;}, animationDuration/2);
    });
}

// fallBack
setTimeout(()=>{ if(!animated){logo.classList = "animate-fill"; animated=true;} }, 6000);


var pfx = ["webkit", "moz", "MS", "o", ""];
function PrefixedEvent(element, type, callback) {
	for (var p = 0; p < pfx.length; p++) {
		if (!pfx[p]) type = type.toLowerCase();
		element.addEventListener(pfx[p]+type, callback, false);
	}
}