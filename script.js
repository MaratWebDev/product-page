$( document ).ready(function() {
    $('li.color').each(function() {
        $(this).mouseover(function(){
            $(this).children('span').show();
        });
        $(this).mouseleave(function(){
            $(this).children('span').hide();
        })
    });
});