var menu1 = document.querySelector(".menu1");
menu1.addEventListener("click", manage);
function manage(){
    location.href="page1.html";
    
}
var logout = document.querySelector(".logout");
logout.addEventListener("click", out);
function out(){
    location.href="index.html";
    
}

var menu3 = document.querySelector(".menu3");
menu3.addEventListener("click", daily);
function daily(){
    location.href="page3.html";
    
}

var popup = document.querySelector(".open");
popup.addEventListener("click", pop);
function pop(){
    window.open("popup.html","_parent");
    
}

