
$(document).ready(function () {
  $(".gallery-img").click(function(){
    var t = $(this).attr("src");
    $(".modal-body").html("<img src='"+t+"' class='modal-img'>");
    $("#myModal").modal();
  });
});



$(document).keydown(function(event) {
    if (event.keyCode == 27) {
      $("#myModal").modal('hide');
    }
});

$(window).load(function() {
  $('.post-module').hover(function() {
    $(this).find('.description').stop().animate({
      height: "toggle",
      opacity: "toggle"
    }, 300);
  });
});


// LOAD MORE

$(document).ready(function () {
    $('.gallery li:lt(3)').show();
    $('.less').hide();
    var items =  9;
    var shown =  3;
    $('.more').click(function () {
        $('.less').show();
        shown = $('.gallery li:visible').size()+3;
        if(shown< items) {$('.gallery li:lt('+shown+')').show(300);}
        else {$('.gallery li:lt('+items+')').show(300);
             $('.more').hide();
             }
    });
    $('.less').click(function () {
        $('.gallery li').not(':lt(3)').hide(300);
        $('.more').show();
        $('.less').hide();
    });
});

document.addEventListener('touchmove', function (event) {
  if (event.scale !== 1) { event.preventDefault(); }
}, false);

var lastTouchEnd = 0;
document.addEventListener('touchend', function (event) {
  var now = (new Date()).getTime();
  if (now - lastTouchEnd <= 500) {
    event.preventDefault();
  }
  lastTouchEnd = now;
}, false);
