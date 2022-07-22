// var menu1 = document.querySelector(".menu1");
// menu1.addEventListener("click", manage);
// function manage(){
//     location.href="page1.html";
    
// }
// var menu3 = document.querySelector(".menu3");
// menu3.addEventListener("click", daily);
// function daily(){
//     location.href="page3.html";
    
// }
// $(function(){
//     $(".menu2").click(function(){
//         location.href="page2.html";
//     });
// });


document.addEventListener('DOMContentLoaded', function() {
    $(function(){
        $(".menu1").click(function(){
            $('.right').load('list1.html');
        });
    });
}, false);

document.addEventListener('DOMContentLoaded', function() {
    $(function(){
        $(".menu2").click(function(){
            $('.right').load('calendarload.html');
        });
    });
}, false);

document.addEventListener('DOMContentLoaded', function() {
    $(function(){
        $(".menu3").click(function(){
            $('.right').load('list3.html');
        });
    });
}, false);
$(document).ready(function () {
    $(".menu").each(function () {
        $(this).click(function () {
            $(this).addClass("on");
            $(this).siblings().removeClass("on");
        });
    });
});


// var logout = document.querySelector(".logout");
// logout.addEventListener("click", out);
// function out(){
//     location.href="index.html";

// $(".ham").click(
//     function(){
//         $(".bar").toggleClass("on");
//         $(".m_menu").stop().SlideToggle()
//     }
// )

// var popup = document.querySelector(".open");
// popup.addEventListener("click", pop);
// function pop(){
//     window.open("modal1.html","_parent");
    
// }

$(function(){
    $(".logout").click(function(){
        location.href="index.html";
    });
});
$(function(){
    $(".info3").click(function(){
        location.href="index.html";
    });
});
  
$(".ham").click(function(){
    $(".m_menu").toggleClass("on");
})