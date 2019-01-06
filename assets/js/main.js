$(document).ready(function () {
    $('.lightbox-trigger:lt(12)').show();
    $('.less').hide();
    var items =  24;
    var shown =  12;
    $('.more').click(function () {
        $('.less').show();
        shown = $('.lightbox-trigger:visible').length+12;
        if(shown< items) {
          $('.lightbox-trigger:lt('+shown+')').show(300);
        } else {
          $('.lightbox-trigger:lt('+items+')').show(300);
          $('.more').hide();
        }
    });
});

$(document).ready(function(){
    $('.modal').modal();
});
