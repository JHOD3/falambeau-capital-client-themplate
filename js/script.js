var owl = $('.owl-carousel-1');
var owl2 = $('.owl-carousel-2');
var owl3 = $('.owl-carousel-3');
var owl4 = $('.owl-carousel-4');
owl.on('initialized.owl.carousel', function(event){
    console.log(event.item.count,event);
    let suma = event.item.index - 2;
    suma = (suma==0)?event.item.count:suma;
    $('.nav-carousel').html(suma+' de '+event.item.count);
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
    margin:20,
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

$(".next").click(function(){
    owl.find(".owl-next").click();
});
$(".prev").click(function() {
    owl.find(".owl-prev").click();
});
owl.ready('initialized.owl.carousel', function (event) {
    console.log(event);
});
owl.on('changed.owl.carousel', function(event) {
    let suma = event.property.value - 2;
    suma = (suma==0)?event.item.count:suma;
    $('.nav-carousel').html(suma+' de '+event.item.count);
});

$('.deploy').on('click', function (event) {
    let id = $(this).data('id');

    $(id).toggle();
});

$('.card-photo-carousel').on('mouseleave',function (event) {
    let id = $(this).data('id');
    $(id).css('display','none');
})