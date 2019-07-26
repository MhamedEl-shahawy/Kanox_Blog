 $(document).on('ready', function() {

$('.lazy').slick({
  lazyLoad: 'ondemand',
     dots: false,
     infinite: true,
     centerMode: true,
     slidesToShow: 4,
     autoplay: true,
     slidesToScroll: 2,
     arrows: false,
     responsive: [{

     breakpoint: 1024,
     settings: {
          slidesToShow: 2,
          infinite: true
     }

}, {

     breakpoint: 600,
     settings: {
          slidesToShow: 1,
          dots: true
     }

}, {

     breakpoint: 300,
     settings: "unslick" //destroy slick

}]

});

});