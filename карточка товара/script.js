        const range = RangeTouch.setup('input[type="range"]');
        $('summary.product_property_title').click(function() {
            $(this).find('.product_property_open').toggleClass('property_open');
            $('summary.product_property_title').not($(this)).find('.product_property_open').addClass('property_open')
        })
        $(document).ready(function() {
            $('.product-dtl-gallery .owl-carousel').owlCarousel({

                autoPlay: 3000,
                
                nav: false,
                loop: true,
                margin:0,
               
                items: 1,
                navText: ["<svg width='8' height='14' viewBox='0 0 8 14' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M5.172 6.99999L0.222 11.95L1.636 13.364L8 6.99999L1.636 0.635986L0.222 2.04999L5.172 6.99999Z' fill='#333333'/></svg>", "<svg width='8' height='14' viewBox='0 0 8 14' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M5.172 6.99999L0.222 11.95L1.636 13.364L8 6.99999L1.636 0.635986L0.222 2.04999L5.172 6.99999Z' fill='#333333'/></svg>"],
                responsive: {
                    0:{
                    dots: true,
                    dotsContainer: false,
                    },
                    576: {
                        nav: true,
                        items: 2,
                        dots: true,
                        loop: true,
                        margin: 10,
                        dotsEach: true,
                        dotsContainer: '.slider-nav .thumbs',
                        slideBy: 2, 
                    },
                    992: {
                        items: 1,
                        responsive: true,
                        nav: true,
                        dotsEach: true,
                        dotsContainer: '.slider-nav .thumbs',
                    }
                }
            });
            $('.similar_inner.owl-carousel').owlCarousel({
                items: 3,
                autoPlay: 3000,
                nav: false,
                loop: true,
                dots: true,
                dotsEach: 1,
                margin: 10,
                responsive: {
                   
                    480: {
                        dots: true,
                    },
                    650:{
                        margin: 20,
                    },
                    748:{
                        margin: 30,
                    },
                    1024: {
                        items: 5,
                        margin: 30,
                    }             
                }
            });
             $('.recommend_slider.owl-carousel').owlCarousel({
                items: 1,
                autoPlay: 3000,
                dots: false,
                nav: false,
                loop: true,
                responsive: {   
                    420: {
                        items: 2,
                        margin: 30,
                    },
                    650: {
                        items: 3,
                        margin: 20,
                    },
                    748:{
                        items: 3,
                        margin: 30,
                    },
                    1024: {
                        items: 4,
                        margin: 30,
                    },
                }
            });
            
            $('.thumb').click(function() {
                $('.product-dtl-gallery .owl-carousel').trigger('to.owl.carousel', [$(this).index(), 300]);
                
            });
       
       
        if($(window).width() < 992){
                 $('.product-dtl-gallery .owl-carousel').on('changed.owl.carousel', function(event) {       
                    $('.product-dtl-gallery  .thumb.active').each(function( key, item){              
                               $(this).next().addClass('active');
                              if($(this).next().length == 0) {
                                $('.product-dtl-gallery  .thumb').eq(0).addClass('active')
                              };
                              
                    });
                });
                $('.product-dtl-gallery  .thumb.active').next().addClass('active');
            }
        $(document).on('mouseenter', '.section-gallery-wrapper .section-gallery-wrapper__item', function() {
            $(this).siblings().removeClass('_active');
            $(this).addClass('_active');
        });
        $(document).on('mouseenter', '.section-gallery-wrapper .section-gallery-wrapper__item', function() {
            $(this).siblings().removeClass('_active');
            $(this).addClass('_active');
        });
        $(document).on('touchstart', '.section-gallery-wrapper .section-gallery-wrapper__item', function() {
            $(this).siblings().removeClass('_active');
            $(this).addClass('_active');
        });
        $('.reviews_button > button').click(function () {
                $('#main .wrapper1 .popup-form-wrap ').css('display', 'block');
                $("html,body").css("overflow", "hidden");
            })
        $('.popup-form-wrap .popup-close').click(function () {
                $('#main .wrapper1 .popup-form-wrap').css('display', 'none');
                $("html,body").css("overflow", "auto");
        })
    });