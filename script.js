const $btnLike = $('.js-btn-like');

$btnLike.on('click', function (event){
    const $btn = $(event.currentTarget);
    
    $btn.toggleClass('is-liked');
});