$(document).ready(function(){
   $("#buttonMore").on("click","a", function (event) {
       event.preventDefault();
       var id  = $(this).attr('href'),
           top = $("#render").offset().top;
       $('body,html').animate({scrollTop: top}, 1500);
   });
});
