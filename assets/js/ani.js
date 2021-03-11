//LODING
$(window).load(function(){
    $(".loding-page").fadeOut(4);
});

//CODE-VIEW-BTN HOVER ANI
$(function(){
  $('.code-btn-inner').mouseenter(function(){ 
    $(this).children('.btn-circle').addClass('hover')
    $(this).children('.code-hover').addClass('hover')
    $(this).children('.btn-p').addClass('hover')
  });

$('.code-btn-inner').mouseleave(function(){
    $(this).children('.btn-circle').removeClass('hover')
    $(this).children('.code-hover').removeClass('hover')
    $(this).children('.btn-p').removeClass('hover')
  });
}); 

let x = 0,
    y = 0,
    mouseX = 0,
    mouseY = 0,
    angleX = 0,
    angleY = 0,
    fmouseX = 0,
    fmouseY = 0;

$(".last").mousemove(function(e){
    //전역변수의 값을 바꾸어줌 (-> let생략)
     x = e.pageX;    //마우스 X축 좌표값
     y = e.pageY;    //마우스 Y축 좌표값

    //let mouseX = $(window).width()/2 - x    
    //마우스의 X축 좌표값을 가운데로 설정
            
    //let mouseY = $(window).height()/2 - y   
    //마우스의 Y축 좌표값을 가운데로 설정

    //마우스의 x축 y축 쵯소값 -50 쵯대값 50으로 설정
    //mouseX와 mouseY값에 제한을 건다.
    /*
        let max = Math.max(100, 200) //200
        let min = Math.min(100, 200) //100
    */
    mouseX = Math.max(-50, Math.min(50, $(".last").width()/2 - x));
    mouseY = Math.max(-50, Math.min(50, $(".last").height()/2 - y));
    //Math.min(50, $(window).width()/2 - x)의 최대로 나올수 있는 수는 50

    angleX = (12 * mouseX) / 100;
    angleY = (12 * mouseY) / 100;

    fmouseX += (angleX - fmouseX) * 2/10;
    fmouseY += (angleY - fmouseY) * 2/10; //+= 은 기본의 값을 살린 상태에서 더해주는 것이다. 
    //pageX,Y 값을 계속 가공하여 나온 값.

    //움직임
    //속성이 두개이상이면 {}가 들어감
    $(".photo").css({"transform": "perspective(600px) rotateX("+ fmouseY +"deg) rotateY("+ -fmouseX +"deg)" });
})


//클릭시 nav 나타나기
$(".nav-btn").click(function(){
    $("#nav").toggle(0.4)
})
//nav 페이지 이동
//$(document).ready(function(){
//    $('.nav-list.list01').click(function(){
//        var offset = $('#section04').offset(); //선택한 태그의 위치를 반환
//        
//                //animate()메서드를 이용해서 선택한 태그의 스크롤 위치를 지정해서 0.4초 동안 부드럽게 해당 위치로 이동함 
//
//	        $('html').animate({scrollTop : offset.top}, 400);
//            console.log(offset)
//		});
//
//	});
//

$(".nav-list").click(function() {
let scrollLocation = document.documentElement.scrollTop;
  var scrollPosition = $($(this).attr("data-target")).offset().left;
  $("body").animate({
        scrollTop: scrollPosition
  }, 500);
})


//SECTIOM04 - 클릭시 프로필 이미지 나타나기
let active = 0;
const imgs = document.querySelectorAll('.profile-img-wrap .profile-img');
document.querySelector('#img-btn').addEventListener('click', () => {
  imgs[active].classList.remove('active');
  active = active < imgs.length - 1 ? active + 1 : 0;
  imgs[active].classList.add('active');
});