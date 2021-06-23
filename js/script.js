var owl = $('.owl-carousel-1');
var owl2 = $('.owl-carousel-2');
var owl3 = $('.owl-carousel-3');
var owl4 = $('.owl-carousel-4');
var owl5 = $('.owl-carousel-5');

owl.on('initialized.owl.carousel', function(event){
    console.log(event)
    let suma = event.item.index + 1;
    suma = (suma==0 || event.item.index == event.item.count )?suma:suma;
    $('.nav-carousel').html(suma +' de '+event.item.count);
});
owl5.on('initialized.owl.carousel', function(event){
    let suma1 = event.item.index - 1;
    suma1 = (suma1==0 || event.item.index == event.item.count )?suma1:suma1;
    $('.nav-carousel2').html(suma1 +' de '+event.item.count);
});
owl.owlCarousel({
    loop:true,
    center: true,
    dots: false,
    margin:10,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:3
        }
    }
});
owl2.owlCarousel({
    loop:true,
    dots: false,
    margin:-40,
    itemClass: 'owl-item z-index-1',
    responsive:{
        0:{
            items:1
        },
        768:{
            items:4
        }
    }
});
owl3.owlCarousel({
    center: true,
    items:2,
    loop:true,
    margin:10,
    responsive:{
        0:{
            items:1,
            margin:20,
            itemClass: 'owl-item mx-2',
        },
        768:{
            items:3,
            margin:20,
            itemClass: 'owl-item z-index-1',
        }
    }
});

owl4.owlCarousel({
    center: true,
    items:1.5,
    loop:true,
    margin:20,
});
owl5.owlCarousel({
    loop:true,
    center: true,
    dots: false,
    margin:10,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:1
        }
    }
});
// Para el nav de carrusel 1
$(".next").click(function(){
    owl.find(".owl-next").click();
});
$(".prev").click(function() {
    owl.find(".owl-prev").click();
});
owl.on('changed.owl.carousel', function(event) {
    let suma = event.item.index + 1;
    suma = (suma==0)?event.item.count:suma;
    $('.nav-carousel').html(suma+' de '+event.item.count);
});


$(".next").click(function(){
    owl5.find(".owl-next").click();
});
$(".prev").click(function() {
    owl5.find(".owl-prev").click();
});
owl5.on('changed.owl.carousel', function(event) {
    let suma1 = event.item.index - 1;
    suma1 = (suma1==0)?event.item.count:suma1;
    $('.nav-carousel2').html(suma1+' de '+event.item.count);
});


var clicks = 0;
$('.deploy').on('click', function (event) {
    let id = $(this).data('id');
    if (clicks == 0){
        $(this).find('i').addClass('rotate-plus');
        ++clicks;
    } else{
        $(this).find('i').removeClass('rotate-plus');
        clicks = 0;
    }
    $(id).toggle();
});

$('.card-photo-carousel').on('mouseleave',function (event) {
    let id = $(this).data('id');
    $(this).find('i').removeClass('rotate-plus');
    $(id).css('display','none');
    clicks = 0;
})

$('.change-video').on('click', function (event) {
    let id_video = $(this).data('id-video');
    let iframe = $('#iframe-video-change');

    iframe.attr('src','https://www.youtube.com/embed/'+id_video);
})