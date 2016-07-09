var menuIcon = document.getElementById("menuIcon");
var allLis = document.getElementsByTagName("li");
var mainHeader = document.getElementById("mainHeader");
var mainNav = document.getElementById("mainNav");
var menuIcon = document.getElementById("menuIcon");
var logo = document.getElementById("logo");
var allAs = document.getElementsByTagName("a");
var iconNum = 1;
var scrollNum = 0;

window.onload = position;

function position() {
    resize();
    if (window.innerWidth < 599) {
        mainNav.style.position = "absolute";
        mainNav.style.marginTop = "0";
    }
}

menuIcon.addEventListener("click", function() {
    for (var i = 0; i < allLis.length; i++) {
        allLis[i].classList.toggle("displayTabs");
    }
    if (iconNum === 1) {
        menuIcon.setAttribute("src", "css/images/mobile-menu-close-icon.png");
        iconNum++;
    } else {
        menuIcon.setAttribute("src", "css/images/mobile-menu-icon.png");
        iconNum--;
    }
});

window.onresize = resize;

function resize() {
    checkMarginTop();
    checkPadding();
    if (window.innerWidth > 599) {
        for (var i = 0; i < allLis.length; i++) {
        allLis[i].classList.remove("displayTabs");
        }
        menuIcon.setAttribute("src", "css/images/mobile-menu-icon.png");
        iconNum = 1;
        mainNav.style.position = "absolute";
        mainNav.style.marginTop = "0";
    } else {
        mainNav.style.position = "relative";
    }
    if (scrollNum === 0) {
        mainNav.style.position = "absolute";
        mainNav.style.marginTop = "0";
    }
}

window.onscroll = scroll;

function checkMarginTop() {
    if (window.pageYOffset <= 50 && window.innerWidth < 599) {
        mainNav.style.marginTop = "-5px";
        mainNav.style.position = "relative";
    } else {
        mainNav.style.marginTop = "0";
    }
}

function scroll() {
    scrollNum++;
    checkMarginTop();
    checkPadding();
    if (window.pageYOffset >= 50) {
        mainHeader.classList.add("smallHeader");
        logo.classList.remove("bigLogo");
        logo.classList.add("smallLogo");
        mainNav.style.top = "6px";
        menuIcon.style.margin = "18px";
    } else {
        mainHeader.classList.remove("smallHeader");
        logo.classList.remove("smallLogo");
        logo.classList.add("bigLogo");
        mainNav.style.top = "16px";
        menuIcon.style.margin = "26px";
    }
}

function checkPadding() {
    if (window.innerWidth > 599 && window.pageYOffset < 50) {
        setPadding("extraPadding");
    } else if (window.innerWidth > 599 && window.pageYOffset >= 50) {
        setPadding("lessPadding");
    } else if (window.innerWidth < 599) {
        setPadding("tinyPadding");
    }
}

function setPadding(className) {
    for (var i = 0; i < allAs.length; i++) {
        allAs[i].setAttribute("class", className);
    }
}