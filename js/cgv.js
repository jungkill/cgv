$(function(){
   
    //배너팝업닫기 
    $('#top-banner button').click(function(){
        $('#top-banner').slideUp();            
     })




     var slide = new Swiper('.slide .swiper-container', {
        navigation: {
           nextEl: '.next',
           prevEl: '.prev',
        },
        loop:true,
        pagination: {
           el: '.pagination',
           clickable: true,         
        },
        effect:'fade',
        autoplay: {
           delay: 2500,
           disableOnInteraction: true,
        },
     });






    //  .product-list.swiper-container
    // .swiper-wrapper .swiper-slide
     var productSlide = new Swiper('.product-list.swiper-container', {
        slidesPerView: 1,
      //   spaceBetween: 30,
        loop:true,
        // effect:'fade',
        autoplay: {
           delay: 2500,
           disableOnInteraction: false,
        },
        //1개로 보이게 추가
        breakpoints: {
         // when window width is >= 640px

         // 반응 사이즈 바꾸고 싶으면 여기
      



         // 반응 사이즈 바꾸고 싶으면 여기
         360: {
           slidesPerView: 2,
           spaceBetween: 1
         },
         720: {
            slidesPerView: 3,
            spaceBetween: 1
          }

         
       }
      });

      $('.product-list').on({
         'mouseenter':function () { 
            productSlide.autoplay.stop();
         },
         'mouseleave':function () { 
            productSlide.autoplay.start();
         },
      });




      




    
    
 })


