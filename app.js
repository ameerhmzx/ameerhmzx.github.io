var initialTime = (new Date()).getTime();

window.addEventListener("load", () => {
    delay = 3000;
    loadingTime = (new Date()).getTime() - initialTime;
    (loadingTime > delay) ?
        loadcss() :
        setTimeout(loadcss, delay - loadingTime);
});


function loadcss() {
    var link = document.getElementById('maincss');
    link.media = "screen,print";
}
