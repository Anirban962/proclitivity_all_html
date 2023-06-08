function CloseNav(){
    document.getElementById('mysidenav').style.width = '0px';
    
}

function OpenNav(){
    document.getElementById('mysidenav').style.width = '250px';
    
}

$(document).ready(function(){
    $('.slider_wrapper').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 2,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '20px',
                slidesToShow: 1
              }
            },
           
            {
                breakpoint: 480,
                settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: '20px',
                  slidesToShow: 1
            } 
        } 
        ]
    });
  
});
