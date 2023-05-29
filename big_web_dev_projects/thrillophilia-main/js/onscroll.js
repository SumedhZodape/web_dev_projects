window.onscroll = function () {
    if (window.pageYOffset >= 100) {
        document.getElementById('header').style.backgroundColor = '#fff';
        document.getElementById('header').style.borderBottom = '1px solid #eae7e7';
        document.getElementById('header').style.boxShadow = '0 1px 1px 0 rgb(65 69 73 / 30%), 0 1px 3px 1px rgb(65 69 73 / 15%)';
        document.getElementById('logo-height').style.backgroundPositionY = "-220px";
        document.getElementById('header-line').style.borderBottom = "none";
        document.getElementById('log').style.color = "#000";
        document.getElementById("searchbar").style.backgroundColor = "rgba(0,0,0,0.1)";
        document.getElementById("search-icon").style.color = "#505050";
        document.getElementsByClassName("bar-icon")[0].style.backgroundColor = "#424242"
        document.getElementsByClassName("bar-icon")[1].style.backgroundColor = "#424242"
        document.getElementsByClassName("bar-icon")[2].style.backgroundColor = "#424242"
    } else {
        document.getElementById('header').style.backgroundColor = 'transparent'
        document.getElementById('header').style.borderBottom = 'none';
        document.getElementById('header').style.boxShadow = 'none';
        document.getElementById('logo-height').style.backgroundPositionY = "-186px";
        document.getElementById('header-line').style.borderBottom = "1px solid #8a8a8a";
        document.getElementById('log').style.color = "#fff";
        document.getElementById("searchbar").style.backgroundColor = "none";
        document.getElementById("search-icon").style.color = "#fff";
        document.getElementsByClassName("bar-icon")[0].style.backgroundColor = "#fff"
        document.getElementsByClassName("bar-icon")[1].style.backgroundColor = "#fff"
        document.getElementsByClassName("bar-icon")[2].style.backgroundColor = "#fff"
    }
}
