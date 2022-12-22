window.onscroll = function () {
    if (window.pageYOffset > 70) {
        document.getElementById('header').style.backgroundColor = "#fff";
        document.getElementById('header').style.boxShadow = "0 3px 7px 0 rgb(0 0 0 / 10%)";
        document.getElementById('nav-icon').style.color = "black";
        document.getElementById('nav-border').style.border = "1px solid #a0a0a0";
        document.getElementById('logo-color').style.color = "#0c0467";
    }
    else {
        document.getElementById('header').style.backgroundColor = "transparent";
        document.getElementById('header').style.boxShadow = "none"
        document.getElementById('nav-icon').style.color = "#fff";
        document.getElementById('nav-border').style.border = "1px solid #dad6d6";
        document.getElementById('logo-color').style.color = "white";
    }
}