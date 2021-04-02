window.addEventListener("load", () => {
    setTimeout(loadcss, 3000);
});


function loadcss() {
    var link = document.createElement("link");
    link.href = "main.css";
    link.type = "text/css";
    link.rel = "stylesheet";
    link.media = "screen,print";
    document.getElementsByTagName("head")[0].appendChild(link);
}
