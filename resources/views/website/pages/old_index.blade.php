<!DOCTYPE html>
<html lang="en-US">
<head>
    <!--<script src="js/triangle.js')}}"></script>-->
    <meta charset="UTF-8">
    <meta name="Description" CONTENT="One of the pioneers in Textile & Readymade garments since the mid eighties. A conglomerate of 100% export oriented companies, ensuring the highest quality">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="csrf-param" content="_csrf-frontend">
    <meta name="csrf-token" content="eW12OWFsTWQBLkYPVB1gHk4iBQECWyhUFhhPCDsfeAILVTRYIF0uHQ==">
    <meta name="msapplication-config" content="images/static/browserconfig.xml">
    <meta name="theme-color" content="#ffffff">
    <!--<link href="https://fonts.googleapis.com/css?family=Sofia" rel="stylesheet">-->

{{--    <link href="{{asset('frontend_assets/assets_front/fonts/Sofia-Pro-Medium.ttf')}}" rel="stylesheet">--}}
{{--    <link href="{{asset('frontend_assets/assets_front/fonts/Sofia-Pro-SemiBold.ttf')}}" rel="stylesheet">--}}
{{--    <link href="{{asset('frontend_assets/assets_front/fonts/sofiapro-light.otf')}}" rel="stylesheet">--}}
    <title>
        Giant Group
    </title>
    <link rel="stylesheet" id="MyStyle-css" href="{{asset('frontend_assets/assets_front/css/news_bootstrap.min.css')}}" type="text/css" media="all">
    <link rel="stylesheet" id="MyStyle1-css" href="{{asset('frontend_assets/assets_front/css/news_style.css')}}" type="text/css" media="all">
    <link rel="stylesheet" id="MyStyle2-css" href="{{asset('frontend_assets/assets_front/css/font.css')}}" type="text/css" media="all">
    <link rel="stylesheet" media="all" href="{{asset('frontend_assets/assets_front/css/style.min.css')}}">
    <link rel="stylesheet" media="all" href="{{asset('frontend_assets/assets_front/css/home.bundle.min.css')}}">
    <link rel="stylesheet" media="all" href="{{asset('frontend_assets/assets_front/css/circle.css')}}" >
    <link rel="stylesheet" media="all" href="{{asset('frontend_assets/assets_front/css/style.css')}}" >
    <link rel="stylesheet" href="{{asset('frontend_assets/assets_front/home_slider/slider.css')}}">
    <link href="http://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">

    <?php if('break' !="" && !'fbclid'){ ?>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <?php } ?>

    <?php if('break' =="")
//    {
    ?>
    <style type="text/css">
        @media screen and (max-width: 480px){
            .menu__item {
                font-size: 1.725rem !important;
            }
        }
    </style>
    <?php
//}
?>

<!-- <link rel="apple-touch-icon" sizes="60x60" href="imagesapple-touch-icon.png')}}"> -->
<!-- <link rel="icon" type="<?php //echo BASE; ?>/files/assets_front/image/png" sizes="32x32" href="<?php //echo BASE; ?>/files/assets_front/imagesfavicon-32x32.png')}}"> -->
<!-- <link rel="icon" type="<?php //echo BASE; ?>/files/assets_front/image/png" sizes="16x16" href="<?php //echo BASE; ?>/files/assets_front/images/favicon-16x16.png')}}"> -->
<!-- <link rel="mask-icon" href="<?php //echo BASE; ?>/files/assets_front/images/safari-pinned-tab.svg" color="#5bbad5"> -->
    <link rel="shortcut icon" href="{{asset('frontend_assets/assets_front/images/FaviconGiantGroup.png')}}">

    <link rel="manifest" href="{{asset('frontend_assets/assets_front/images/manifest.json')}}">
    <script src="{{asset('frontend_assets/assets_front/js/jquery_modernizr.bundle.min.js')}}"></script>
    <script src="{{asset('frontend_assets/assets_front/js/google_maps_api.js')}}"></script>

{{--    <script src="https://jssors8.azureedge.net/script/jssor.slider-27.5.0.min.js"></script>--}}

    <?php if('break'=="giant_future" || 'break'=="our_pride_bangladesh" || 'break'=="profile"){ ?>
    <link rel="stylesheet" href="{{asset('frontend_assets/assets_front/vip_css/vip_swiper.min.css')}}">
    <link rel="stylesheet" href="{{asset('frontend_assets/assets_front/vip_css/vip_style.css')}}" />
    <?php } ?>

    <?php if('break'=="job_anouncement"){ ?>
    <link rel="stylesheet" href="{{asset('frontend_assets/assets_front/css/job_acounce.css')}}">
    <?php } ?>

    <?php if('break'=="join_us"){ ?>
    <link rel="stylesheet" href="{{asset('frontend_assets/assets_front/css/join_us.css')}}">
    <?php } ?>

    <?php if('break'=="profile"){ ?>
    <link rel="stylesheet" href="{{asset('frontend_assets/assets_front/carousel_slider/docs.theme.min.css')}}">
    <link rel="stylesheet" href="{{asset('frontend_assets/assets_front/carousel_slider/owl.carousel.min.css')}}">
    <link rel="stylesheet" href="{{asset('frontend_assets/assets_front/carousel_slider/owl.theme.default.min.css')}}">
    <script src="{{asset('frontend_assets/assets_front/carousel_slider/owl.carousel.js')}}"></script>

    <!-- profile slider -->
    <link href="{{asset('frontend_assets/assets_front/css/profile_4_0_0_bootstrap.min.css')}}" rel="stylesheet">
    <script src="{{asset('frontend_assets/assets_front/js/profile_4_0_0_bootstrap.min.js')}}"></script>
    <link href="{{asset('frontend_assets/assets_front/css/profile.css')}}" rel="stylesheet">
    <?php } ?>

    <?php if('break'=="take_a_tour"){ ?>
    <link rel="stylesheet" href="{{asset('frontend_assets/assets_front/css/take_a_tour.css')}}">
    <link href="https://cdn.jsdelivr.net/lightgallery/1.3.9/css/lightgallery.min.css" rel="stylesheet">
    <script src="{{asset('frontend_assets/assets_front/js/bootstrap_4_1_1.min.js')}}"></script>
    <script type="text/javascript">
        $(document).ready(function(){
            load_data();

            function load_data(page)
            {
                $.ajax({
                    url: 'base/gallery_pagination',
                    method:"POST",
                    data:{page:page},
                    success:function(data){
                        $('#pagination_data').html(data);
                    }
                })
            }
            function load_data(page, cat){
                $.ajax({
                    url: 'base/gallery_pagination',
                    method:"POST",
                    data:{page:page, filter: cat},
                    success:function(data){
                        $('#pagination_data').html(data);
                    }
                })
            }
            $(document).on('click', '.giant_pagination_link', function(){
                var page = $(this).attr("id");
                var cat = $(".giant_pagination_link").attr('class');
                cat = cat.split(" ");
                if(cat[1] !=""){
                    load_data(page, cat[1]);
                }else{
                    load_data(page);
                }
            });
        });
    </script>
    <?php } ?>

    <?php if('break'=="our_concerns"){ ?>
    <style type="text/css">
        .menu__item{
            padding-top: .14rem !important;
            margin-bottom: 4px !important;
        }
        .scrollup{
            padding-top: 8px !important;
        }
        .scrolldown{
            padding-top: 12px !important;
        }
        .social_list{
            margin-bottom: 5px !important;
        }
    </style>
    <?php } ?>

    <link rel="stylesheet" href="{{asset('frontend_assets/assets_front/css/responsive.css')}}">
    <style type="text/css">

        .font-sofia-light{
            font-family: sofia-pro, sans-serif;
            font-style: normal;
            /*Sofia Pro Light*/
            font-weight: 300;
        }
        .font-sofia-medium{
            font-family: sofia-pro, sans-serif;
            font-style: normal;
            /*Sofia Pro Medium*/
            font-weight: 500;
        }
        .font-sofia-bold{
            font-family: sofia-pro, sans-serif;
            font-style: normal;
            /*Sofia Pro Semi Bold*/
            font-weight: 600;
        }
        body{
            font-family: 'Sofia Pro',Helvetica Neue,Helvetica,Arial,sans-serif;
            font-style: normal;
            /*Sofia Pro Light*/
            font-weight: 500;

        }

        .scrollup{
            font-size: 18px;
            color: #fff;
            background-color: #0066cc;
            border: 1px solid #A2A2A2;
            text-align: center;
            padding: 12px;
            width: 50px;
            height: 50px;
            position: fixed;
            bottom: 30px;
            right: 30px;
            cursor: pointer;
            z-index: 999;
            border-radius: 60px;
        }

        .scrolldown{
            font-size: 18px;
            color: #ffffff;
            /* background-color: #0066cc; */
            border: 3px solid #fff;
            text-align: center;
            padding: 14px 0px;
            width: 35px;
            height: 60px;
            position: absolute;
            bottom: 20px;
            cursor: pointer;
            z-index: 999;
            border-radius: 60px;
            opacity: .8;
        }
    </style>
    <style type="text/css">
        @media (max-width: 450px){
            .scrolldown{
                display: none !important;
            }
        }
    </style>
</head>

{{--<?php--}}
{{--if('break'=="single_news"){--}}

{{--}else{--}}
{{--?>--}}
{{--<div class="text-center" style="margin-right: 30px;">--}}
{{--    <a class="scrolldown" href="#next_section">--}}
{{--        <i class="fa fa-arrow-down"></i>--}}
{{--    </a>--}}
{{--</div>--}}
{{--<?php--}}
{{--}--}}
{{--?>--}}



<body class="home-page">
<script type="text/javascript">
    var site_url_info = {
        baseUrl: 'http://test.com',
        themeUrl: 'http://test.com/themes/real_estate'
    }
</script>

<div class="site-main-wrapper">

    <!-- preloader -->
{{--    <div class="loader ">--}}
{{--        <div class="custom-progress"></div>--}}
{{--        <div class="loader-logo">--}}
{{--            <h2 class="heading-secondary">--}}
{{--                        <span>--}}
{{--                            <span>LIVE TODAY, THINK BEYOND...</span>--}}
{{--                        </span>--}}
{{--            </h2>--}}
{{--        </div>--}}
{{--    </div>--}}

    <header>
        <div class="page _page_loading" id="root">
            <div class="mobile-menu-bar"></div>
            <a class="ui-logo " href="base">
                <img src="{{asset('frontend_assets/assets_front/images/logo.png')}}">
            </a>
            <span class="ui-menu">
                        <span class="ui-menu__bar"></span>
                        <span class="ui-menu__bar"></span>
                        <span class="ui-menu__bar"></span>
                    </span>
            <nav class="menu">
                <i class="menu__close">
                    <img src="{{asset('frontend_assets/assets_front/icons/hamburger-close.png')}}" alt="">
                </i>
                <div class="menu-inner-wrapper">
                            <span class="menu-svg-animation-holder">

                                <svg id="home-giant" version="1.1" class="svg-animation" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                    <image x="0" y="60" width="700" height="133" xlink:href="{{asset('frontend_assets/assets_front/icons/giant/home-giant.png')}}"
                                    />
                                </svg>

                                <svg id="profile-icon" version="1.1" class="svg-animation" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                    <image x="0" y="0" width="700" height="264" xlink:href="{{asset('frontend_assets/assets_front/icons/giant/profile-giant-final.png')}}"
                                    />
                                </svg>

                                <svg id="sustainability-icon" version="1.1" class="svg-animation" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                    <image x="0" y="0" width="700" height="264" xlink:href="{{asset('frontend_assets/assets_front/icons/giant/sustainability-icon.png')}}"
                                    />
                                </svg>

                                <svg id="take-a-tour-giant" version="1.1" class="svg-animation" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                    <image x="0" y="0" width="700" height="264" xlink:href="{{asset('frontend_assets/assets_front/icons/giant/Take_a_Tour.png')}}"
                                    />
                                </svg>

                                <svg id="our-concerns" version="1.1" class="svg-animation" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                    <image x="0" y="0" width="700" height="264" xlink:href="{{asset('frontend_assets/assets_front/icons/giant/our-concerns.png')}}"
                                    />
                                </svg>

                                <svg id="future-icon" version="1.1" class="svg-animation" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                    <image x="0" y="0" width="700" height="264" xlink:href="{{asset('frontend_assets/assets_front/icons/giant/Giant_Future.png')}}"
                                    />
                                </svg>

                                <svg id="career-icon" version="1.1" class="svg-animation" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                    <image x="0" y="0" width="700" height="264" xlink:href="{{asset('frontend_assets/assets_front/icons/giant/Career.png')}}"
                                    />
                                </svg>

                                <svg id="pride-bangladesh" version="1.1" class="svg-animation" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                    <image x="0" y="0" width="700" height="300" xlink:href="{{asset('frontend_assets/assets_front/icons/giant/map-bangladesh-giant.png')}}"
                                    />
                                </svg>

                                <svg id="contact-icon" version="1.1" class="svg-animation" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                    <image x="0" y="0" width="700" height="264" xlink:href="{{asset('frontend_assets/assets_front/icons/giant/take-a-tour-giant.png')}}"
                                    />
                                </svg>
                            </span>

                    <menu class="menu__content" style="margin-top: 7%;">
                        <div class="row">
                            <div class="col-md-2"></div>
                            <?php
//                            if ('break'=="") {
                            ?>
                            <style type="text/css">
                                .all_page_menu{
                                    margin-left: -35px !important;
                                    margin-top: 5px !important;
                                    font-weight: normal !important;
                                }

                            </style>
                            <?php
//                            }
                            if ('break'=="profile") {
                            ?>
                            <style type="text/css">
                                .all_page_menu{
                                    margin-left: 44px !important;
                                }
                                @media (max-width: 450px){
                                    .all_page_menu{
                                        margin-left: 0px !important;
                                        margin-top: 5px !important;
                                        font-weight: normal !important;
                                    }
                                    .owl-stage{
                                        height: 150px !important;
                                    }
                                    .owl-carousel{
                                        height: 150px !important;
                                        margin-left: -12px !important;
                                        width: 378px !important;
                                    }
                                    .modal-body{
                                        overflow: auto !important;
                                    }
                                }
                                .menu__item{
                                    font-weight: 400 !important;
                                    margin-bottom: 10px !important;
                                }
                                .navbar_socail_link{
                                    margin-left: -14px !important;
                                }
                                .heading-secondary{
                                    font-size: 14px !important;
                                }
                            </style>
                            <?php
                            }

                            if ('break' == "sustainable_strategy") {
                            ?>
                            <style type="text/css">
                                .menu__item{
                                    padding-top: 0px !important;
                                    margin-bottom: 6px !important;
                                }
                                .glyphicon-triangle-top{
                                    padding-top: 9px !important;
                                }
                                .scrolldown{
                                    padding-top: 12px !important;
                                }
                                .social_list{
                                    margin-bottom: 5px !important;
                                }
                                .heading-secondary{
                                    font-size: 14px !important;
                                }
                            </style>
                            <?php
                            }

                            if ('break' == "take_a_tour" || 'break' == "giant_future" || 'break' == "our_pride_bangladesh" || 'break' == "join_us" || 'break' == "contact") {
                            ?>
                            <style type="text/css">
                                @media (max-width: 450px){
                                    .menu__item{
                                        font-size: 18px !important;
                                    }
                                    .margin_left_right{
                                        margin: 0px 20px !important;
                                    }
                                }
                            </style>
                            <?php
                            }

                            if ('break' == "job_announcement") {
                            ?>
                            <style type="text/css">
                                @media (max-width: 450px){
                                    .menu__item{
                                        font-size: 18px !important;
                                    }
                                    .featured-jobs {
                                        margin-top: 50px !important;
                                    }
                                    .feature-link{
                                        display: -webkit-inline-box !important;
                                    }

                                    .apply_btn{
                                        margin-top: 70px !important;
                                    }
                                }
                            </style>
                            <?php
                            }


                            if ('break' == "our_concerns") {
                            ?>
                            <style type="text/css">
                                .heading-secondary{
                                    font-size: 14px !important;
                                }
                            </style>
                            <?php
                            }
                            ?>

                            <div class="col-md-4 all_page_menu">

                                <a data-target="home-giant" class="menu__item main-menu-item" href="base">Home</a>

                                <a data-target="profile-icon" class="menu__item main-menu-item" href="base/profile">Profile</a>

                                <a data-target="sustainability-icon" class="menu__item main-menu-item" href="base/sustainable_strategy">Sustainability Strategy</a>

                                <a data-target="take-a-tour-giant" class="menu__item main-menu-item" href="base/take_a_tour">Take a tour</a>

                                <a data-target="our-concerns" class="menu__item main-menu-item" href="base/our_concerns">Our Concerns</a>

                                <a data-target="future-icon" class="menu__item main-menu-item" href="base/giant_future">Giant future</a>

                                <a data-target="career-icon" class="menu__item main-menu-item" href="base/join_us">Career</a>

                                <a data-target="pride-bangladesh" class="menu__item main-menu-item" href="base/our_pride_bangladesh">Bangladesh - Our Pride</a>

                                <a data-target="contact-icon" class="menu__item main-menu-item" href="base/contact">Contact Us</a>

                                <a data-target="contact-icon" class="menu__item main-menu-item" href="http://mail.giantbd.com">Mail</a>

                                <div class="navbar_socail_link">
                                    <ul>
                                        <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                        <!-- <li><a href="#"><i class="fa fa-twitter"></i></a></li> -->
                                        <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                                        <li><a href="#"><i class="fa fa-youtube"></i></a></li>
                                        <li><a href="#"><i class="fa fa-linkedin-square"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-6" id="sub-menu">
                            </div>
                        </div>
                    </menu>
                </div>
            </nav>
            <noindex>

                <div class="rotate">

                    <i class="rotate__logo"></i>

                    <i class="rotate__icon"></i>

                    <div class="rotate__text">Please rotate your&nbsp;device for&nbsp;better experience</div>

                </div>

            </noindex>

            <?php
//            if('break' =="" || 'fbclid' )
//            {
            ?>
            <section class="promo">
                <div class="promo__content">
                    <img style="width: 100%; height: inherit;" src="{{asset('frontend_assets/assets_front/images/Home-Page.jpg')}}">
                    <div class="circle-container header-circle" data-video-src="https://www.youtube.com/embed/23mbiZqrOoU?autoplay=1" onclick="openNav(this)"
                         style="cursor: pointer; z-index: 99999999999 !important">
                        <div id="circle" style="z-index: 99999;">
                            <div class="circle0 sub-border res_circle_1" style="position: absolute; width: 250px; height: 250px; top: 0px; left: 0px; animation: spin2 10s linear infinite; z-index: 99999;"></div>
                            <div class="circle1 sub-border res_circle_2" style="position: absolute; width: 234px; height: 234px; top: 8px; left: 8px; animation: spin 12s linear infinite; z-index: 99999;"></div>
                            <div class="circle2 sub-border res_circle_3" style="position: absolute; width: 218px; height: 218px; top: 15px; left: 15px; animation: spin2 15s linear infinite; z-index: 99999;"></div>
                        </div>
                        <div class="video_div_area">
                            <video src="{{asset('frontend_assets/assets_front/video/Giant.mp4')}}" autoplay muted type="video/mp4"></video>
                        </div>
                    </div>
                </div>
            </section>

            <style type="text/css">
                @media (max-width: 450px){
                    .res_circle_1 {
                        position: absolute !important;
                        width: 65px !important;
                        height: 65px !important;
                        top: 153px !important;
                        left: 153px !important;
                    }

                    .res_circle_2 {
                        position: absolute !important;
                        width: 80px !important;
                        height: 80px !important;
                        top: 145px !important;
                        left: 145px !important;
                    }

                    .res_circle_3 {
                        position: absolute !important;
                        width: 90px !important;
                        height: 90px !important;
                        top: 140px !important;
                        left: 140px !important;
                    }

                    .res_circle_1:after {
                        width: 20px !important;
                        height: 20px !important;
                        top: 42px !important;
                    }

                    .res_circle_2:after {
                        width: 20px !important;
                        height: 20px !important;
                        top: 52px !important;
                    }

                    .res_circle_3:after {
                        width: 20px !important;
                        height: 20px !important;
                        top: 62px !important;
                    }

                    .video_div_area{
                        position: absolute !important;
                        width: 70px !important;
                        height: 70px !important;
                        top: 133px !important;
                        left: 133px !important;
                        border-radius: 125px !important;
                        -webkit-mask-image: -webkit-radial-gradient(circle, #d7c2a7 100%, black 100%);
                    }


                }
            </style>

            <?php if('break' =="join_us"){ ?>
            <section class="promo">
                <div class="promo__content">
                    <video autoplay loop muted style="width: 100%;">
                        <source src="{{asset('frontend_assets/Videos/Career-Giant-Group.mp4" type="video/mp4">
                    </video>
                    <div class="promo_tour_con_h1">
                        <h1 class="promo_tour_con_header" style="font-size: 26px; padding-left: 16%; padding-right: 16%; line-height: 25px;">"We believe the people that call Giant Group home are the ones who shape our present and design our future. And their future is what inspires us to do our best everyday and realize our dreams for a better tomorrow"<br><span style="font-size: 17px;">Azfar Hassan</span></h1>
                    </div>
                </div>
            </section>

            <style type="text/css">

                @media (max-width: 450px){

                    .promo_tour_con_header{
                        padding-left: 8% !important;
                        padding-right: 6% !important;
                        line-height: 18px !important;
                    }
                }
            </style>

            <?php }else if('break' =="sustainable_strategy"){ ?>
            <section class="promo">
                <div class="promo__content">
                    <video autoplay loop muted style="width: 100%;">
                        <source src="{{asset('frontend_assets/Videos/Sustainable-Strategy.mp4" type="video/mp4">
                    </video>
                    <div class="promo_tour_con_h1">
                        <h1 style="font-size: 26px; padding-left: 16%; padding-right: 16%; line-height: 25px;">"The greatest threat to our planet is the belief that someone else will save it"&nbsp;<br><span style="font-size: 17px;">Robert Swan</span></h1>
                    </div>
                </div>
            </section>
            <style type="text/css">
                .scrollup{
                    padding: 3px !important;
                }
            </style>
            <?php }else if('break' =="profile"){ ?>
            <section class="promo">
                <div class="promo__content">
                    <video autoplay loop muted style="width: 100%;">
                        <source src="{{asset('frontend_assets/Videos/Profile.mp4" type="video/mp4">
                    </video>
                    <div class="promo_tour_con_h1">
                        <h1 style="font-size: 26px; padding-left: 16%; padding-right: 16%; line-height: 25px;">"Growth is never by mere chance; it is the result of forces working together"&nbsp;&nbsp;<br><span style="font-size: 17px;">James Cash Penney</span></h1>
                    </div>
                </div>
            </section>

            <?php }else if('break' =="contact"){ ?>

            <section class="promo">
                <div class="promo__content">
                    <video autoplay loop muted style="width: 100%;">
                        <source src="{{asset('frontend_assets/Videos/contact.mp4" type="video/mp4">
                    </video>
                    <div class="promo_tour_con_h1">
                        <h1 style="font-size: 26px; padding-left: 16%; padding-right: 16%; line-height: 25px;">"The Future is in the Details"&nbsp;<br><span style="font-size: 17px;">Feroz M. Hassan</span></h1>
                    </div>
                </div>
            </section>

            <?php }else if('break' =="take_a_tour"){ ?>

            <section class="promo">
                <div class="promo__content">
                    <video autoplay loop muted style="width: 100%;">
                        <source src="{{asset('frontend_assets/Videos/Take-a-tour.mp4" type="video/mp4">
                    </video>
                    <div class="promo_tour_con_h1">
                        <h1 style="font-size: 26px; padding-left: 16%; padding-right: 16%; line-height: 25px;">"We truly believe the bigger the challenges, the bigger the opportunities"&nbsp;<br><span style="font-size: 17px;">Majedur Rahim</span></h1>
                    </div>
                </div>
            </section>

            <?php }else if('break' =="giant_future"){ ?>

            <section class="promo">
                <div class="promo__content">
                    <video autoplay loop muted style="width: 100%;">
                        <source src="{{asset('frontend_assets/Videos/Giant-Future.mp4" type="video/mp4">
                    </video>
                    <div class="promo_tour_con_h1">
                        <h1 style="font-size: 26px; padding-left: 16%; padding-right: 16%; line-height: 25px;">Small Stories, Giant Future<br><span style="font-size: 15px;"></span></h1>
                    </div>
                </div>
            </section>

            <?php }else if('break' =="our_concerns"){ ?>

            <section class="promo">
                <div class="promo__content">
                    <video autoplay loop muted style="width: 100%;">
                        <source src="{{asset('frontend_assets/Videos/Our-Concern.mp4" type="video/mp4">
                    </video>
                    <div class="promo_tour_con_h1">
                        <h1 style="font-size: 26px; padding-left: 16%; padding-right: 16%; line-height: 25px;">“As a group, we try not to make any decisions that we’re not excited about”<br><span style="font-size: 17px;">Mehrin Hassan</span></h1>
                    </div>
                </div>
            </section>

            <?php }else if('break' =="our_pride_bangladesh"){ ?>

            <section class="promo">
                <div class="promo__content">
                    <video autoplay loop muted style="width: 100%;">
                        <source src="{{asset('frontend_assets/Videos/Bangladesh-our-pride.mp4" type="video/mp4">
                    </video>
                    <div class="promo_tour_con_h1">
                        <h1 style="font-size: 32px; padding-left: 16%; padding-right: 16%; line-height: 25px;">বাংলাদেশ- আমাদের গর্ব &nbsp;&nbsp;<br><span style="font-size: 15px;">Bangladesh - Our Pride</span></h1>
                    </div>
                </div>
            </section>

        <?php } ?>
        <!-- <section class="promo"> -->
            <!-- <div class="promo__content"> -->
        <!-- <img style="width: 100%; height: inherit;" src="<?php //echo BASE; ?>/files/assets_front/images/Giant-Textile-Building.jpg')}}"> -->
            <!-- <div class="promo_tour_con_h1"> -->
            <!--  <h1 style="font-size: 20px; padding-left: 10%; padding-right: 10%;">“WE BELIEVE THE PEOPLE THAT CALL GIANT GROUP HOME ARE THE ONES WHO SHAPE OUR PRESENT AND DESIGN OUR FUTURE. AND THEIR FUTURE IS WHAT INSPIRES US TO DO OUR BEST EVERYDAY AND REALIZE OUR DREAMS FOR A BETTER TOMORROW”</h1> -->
            <!-- </div> -->
            <!-- </div> -->
            <!-- </section> -->

        </div>
    </header>

    <script>
        $(document).ready(function(){
            // Add smooth scrolling to all links
            $("a").on('click', function(event) {

                // Make sure this.hash has a value before overriding default behavior
                if (this.hash !== "") {
                    // Prevent default anchor click behavior
                    event.preventDefault();

                    // Store hash
                    var hash = this.hash;

                    // Using jQuery's animate() method to add smooth page scroll
                    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
                    $('html, body').animate({
                        scrollTop: $(hash).offset().top
                    }, 800, function(){

                        // Add hash (#) to URL when done scrolling (default click behavior)
                        window.location.hash = hash;
                    });
                } // End if
            });
        });
    </script>












    <div id="video-player-overlay">
        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
        <div id="video-player-overlay-content">
            <iframe id="circle-video-frame" frameborder="0" width="560" height="315" src=""></iframe>
        </div>
    </div>

    <!-- Who we are section -->
    <section id="next_section" class="side-bg-content-container">
        <div class="clearfix">
            <div class="col-sm-6 col-sm-push-0 side-bg">
                <ul class="rslides slider1">
                    <li><img style="width: 508px; height: 446px !important;" src="{{asset('frontend_assets/assets_front/images/WhoWeAre/1.jpg')}}"></li>
                    <li><img style="width: 508px; height: 446px !important;" src="{{asset('frontend_assets/assets_front/images/WhoWeAre/2.jpg')}}"></li>
                    <li><img style="width: 508px; height: 446px !important;" src="{{asset('frontend_assets/assets_front/images/WhoWeAre/3.jpg')}}"></li>
                    <li><img style="width: 508px; height: 446px !important;" src="{{asset('frontend_assets/assets_front/images/WhoWeAre/4.jpg')}}"></li>
                </ul>
            </div>
        </div>

        <div class="container" id="section-counter">
            <div class="row margin_left_0" style="background-image:url('/frontend_assets/assets_front/images/done/who_we_are/who_we_are_background.jpg'); margin-left: 22%; width: 100%;">
                <div class="col-sm-7 col-sm-push-6 side-content" style="margin-left: 13%;">
                    <div class="side-content__inner pl-40" style="padding-top: 59px;">
                        <div class="child-stagger-up" data-scrollmagic>
                            <h2 class="heading-secondary" style="color: #ff224d;">Who we are </h2><br>
                            <p class="text-yellow">We are a family | Knitting large dreams | Sewing a Giant future<br><br>
                                We started our journey back in 1984 with the dream of being the best company in the industry. We have managed to sustain in this industry because of our hard work and dedication towards continuous improvement. Giant Group considers itself as an end-to-end apparel solution provider. Over the years, our size has changed, but one underlying idea has stayed the same – the customer and the environment are at the center of everything we do. We consider our skilled workforce to be our greatest asset. We take great pride in our people, our Giant family who we consider to be committed, talented and experts at what they do.<br>
                                <a href="http://giantbd.com/profile">See more...</a> </p>
                            <div class="mt-90">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Sustainability strategy section -->
    <section class="side-bg-content-container bg-dark">
        <div class="clearfix">
            <div class="col-sm-6 col-sm-push-0 side-bg side-bg--left">
                <ul class="rslides slider1 take_a_tour_absolute">
                    <li><img style="width: 508px; height: 407px !important;" src="{{asset('frontend_assets/assets_front/images/SustainableStrategy/1.jpg')}}"></li>
                    <li><img style="width: 508px; height: 407px !important;" src="{{asset('frontend_assets/assets_front/images/SustainableStrategy/2.jpg')}}"></li>
                    <li><img style="width: 508px; height: 407px !important;" src="{{asset('frontend_assets/assets_front/images/SustainableStrategy/3.jpg')}}"></li>
                    <li><img style="width: 508px; height: 407px !important;" src="{{asset('frontend_assets/assets_front/images/SustainableStrategy/4.jpg')}}"></li>
                </ul>
            </div>
        </div>

        <div class="container">
            <div class="row">
                <div class="col-sm-7 col-sm-push-6 side-content side-content--right">
                    <div class="side-content__inner pt-125 pb-20 pl-40 pt-60">
                        <div class="child-stagger-up" data-scrollmagic>
                            <h2 class="heading-secondary" style="color:green;">Sustainability strategy</h2><br>
                            <p class="text-yellow">Dream it | Believe it | Achieve it<br><br>
                                Our organization seeks to minimize waste, promote recycling, reduce energy consumption, reduce harmful emissions and, where possible, to work with suppliers who are committed to caring and protecting for the environment. The organization ensures that all its activities are carried out in conformance with the relevant environmental legislation and the requirements of Ministry of Environment and Forest, Directorate of Environment, Government of the People’s Republic of Bangladesh. <a href="http://giantbd.com/sustainable_strategy">See more...</a> </p>
                            <div class="mt-90">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- out capacity section -->
    <section class="side-bg-content-container our_capacity_run">
        <div class="clearfix">
            <div class="col-sm-6 col-sm-push-0 side-bg">
                <ul class="rslides slider1">
                    <li><img style="width: 508px; height: 385px !important;" src="{{asset('frontend_assets/assets_front/images/Capacity/1.jpg')}}"></li>
                    <li><img style="width: 508px; height: 385px !important;" src="{{asset('frontend_assets/assets_front/images/Capacity/2.jpg')}}"></li>
                    <li><img style="width: 508px; height: 385px !important;" src="{{asset('frontend_assets/assets_front/images/Capacity/3.jpg')}}"></li>
                    <li><img style="width: 508px; height: 385px !important;" src="{{asset('frontend_assets/assets_front/images/Capacity/4.jpg')}}"></li>
                </ul>
            </div>
        </div>
        <div class="row margin_left_0" style="background-image:url('/frontend_assets/assets_front/images/done/our_capacity/our_capacity_background.jpg'); margin-left: 30%; width: 100%;">
            <div class="col-sm-7 col-sm-push-6 side-content" style="margin-bottom: 35px; margin-left: 25px;">
                <div class="side-content__inner p pl-40 pb-60" style="min-height: 350px; padding-top: 25px;">
                    <div class="text-center count_capacity_wrapper child-stagger-up" data-scrollmagic>
                        <div class="col-lg-2 col-md-2 col-sm-2 col-xs-6">
                            <div class="counter-div">
                                <div class="count_capacity_p">
                                    <p class="icon_img">
                                        <img src="{{asset('frontend_assets/assets_front/images/fabrics-icon.png')}}">
                                    </p>
                                    <p class="counter_title counter-title"><span class="our_capacity"></span>k+</p>
                                </div>
                                <p class="counter_title p counter-title">Fabric</p>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-2 col-sm-2 col-xs-6">
                            <div class="counter-div">
                                <div class="count_capacity_p">
                                    <p class="icon_img">
                                        <img src="{{asset('frontend_assets/assets_front/images/done/our_capacity/garments.png')}}">
                                    </p>
                                    <p class="counter_title counter-title"><span class="our_garment"></span>k+</p>
                                </div>
                                <p class="counter_title p counter-title">Garment</p>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-2 col-sm-2 col-xs-6">
                            <div class="counter-div">
                                <div class="count_capacity_p">
                                    <p class="icon_img">
                                        <img src="{{asset('frontend_assets/assets_front/images/done/our_capacity/embroidery.png')}}">
                                    </p>
                                    <p class="counter_title counter-title"><span class="our_Embroidery"></span>k+</p>
                                </div>
                                <p class="counter_title p counter-title">Embroidery</p>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-2 col-sm-2 col-xs-6">
                            <div class="counter-div">
                                <div class="count_capacity_p">
                                    <p class="icon_img">
                                        <img src="{{asset('frontend_assets/assets_front/images/done/our_capacity/printing.png')}}">
                                    </p>
                                    <p class="counter_title counter-title"><span class="our_printing"></span>k+</p>
                                </div>
                                <p class="counter_title p counter-title">Printing</p>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-2 col-sm-2 col-xs-6">
                            <div class="counter-div">
                                <div class="count_capacity_p">
                                    <p class="icon_img">
                                        <img src="{{asset('frontend_assets/assets_front/images/done/our_capacity/washing.png')}}">
                                    </p>
                                    <p class="counter_title counter-title"><span class="washing"></span>k+</p>
                                </div>
                                <p class="counter_title p counter-title">Washing</p>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-2 col-sm-2 col-xs-6">
                            <div class="counter-div">
                                <div class="count_capacity_p">
                                    <p class="icon_img">
                                        <img src="{{asset('frontend_assets/assets_front/images/done/our_capacity/employee.png')}}">
                                    </p>
                                    <p class="counter_title counter-title"><span class="employee"></span>.5k+</p>
                                </div>
                                <p class="counter_title p counter-title">Employee</p>
                            </div>
                        </div>
                        <div class="mt-90" style="opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Take a tour section -->
    <section class="side-bg-content-container bg-dark">
        <div class="clearfix">
            <div class="col-sm-6 col-sm-push-0 side-bg side-bg--left">
                <ul class="rslides slider1 take_a_tour_absolute">
                    <li><img style="width: 508px; height: 387px !important;" src="{{asset('frontend_assets/assets_front/images/Take_a_Tour/1.jpg')}}"></li>
                    <li><img style="width: 508px; height: 387px !important;" src="{{asset('frontend_assets/assets_front/images/Take_a_Tour/2.jpg')}}"></li>
                    <li><img style="width: 508px; height: 387px !important;" src="{{asset('frontend_assets/assets_front/images/Take_a_Tour/3.jpg')}}"></li>
                    <li><img style="width: 508px; height: 387px !important;" src="{{asset('frontend_assets/assets_front/images/Take_a_Tour/4.jpg')}}"></li>
                </ul>
            </div>
        </div>

        <div class="container">
            <div class="row">
                <div class="col-sm-7 col-sm-push-6 side-content side-content--right">
                    <div class="side-content__inner pt-125 pb-40 pl-40 pt-60">
                        <div class="child-stagger-up" data-scrollmagic>
                            <h2 class="heading-secondary" style="color:green;">Take a tour</h2><br>
                            <p class="text-yellow">Giant was born in a country that struggled through a hard-won Independence;
                                We give back to the society more than what we take from it. We make textiles, and we foster people. Where social and environmental impact are as important as growth. Where people’s enterprise & creativity are more valuable than the machines they work with. Where the well-being of employees extends to caring for their loved ones as well. We are Giant. Several victories, countless memories. And this is our story, through pictures. <a href="http://giantbd.com/take_a_tour">See more...</a> </p>
                            <div class="mt-90">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- News and publication section -->
    <section class="home-news" style="background-color: #c1c1c1; padding-top: 50px; padding-bottom: 50px;">
        <div class="container">
            <div class="row">
                <h2 style="margin-left: 85px;" class="heading-secondary text-yellow mb-60">News &amp; Publications </h2>
                <div class="col-xs-12 col-sm-12 col-md-8">
                    <div class="row">
                        <div class="col-xs-12 col-sm-6 col-md-6">
                            <div class="news-box">
                                <figure>
                                    <a href="base/single_news/">
                                        <img class="img-responsive" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM7fA7uCGQwMP_pqd9uoKaqW6V4usQ-U_NBh84eeHCKVP9pYZb&s"
                                             alt="news"> </a>
                                </figure>
                                <div class="news-content">
                                    <span>date</span>
                                    <h2>
                                        <a style="color: white;" href="base/single_news/"></a>
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p style="margin-left: 34px;">
                        <a href="base/news_details" class="view-all view_all_margin"> View all news</a>
                    </p>
                </div>
                <div class="col-sm-12 col-xs-12 col-md-4">
                    <div class="event">
                        <ul class="nav nav-justified" role="tablist">
                            <li role="presentation" class="active">
                                <a href="#" class="active" aria-controls="home" role="tab" data-toggle="tab">News</a>
                            </li>
                            <li role="presentation">
                                <a href="#" aria-controls="profile" role="tab" data-toggle="tab">Publications</a>
                            </li>
                        </ul>
                        <div class="tab-content">
                            <div style="height: 283px; overflow: auto;" role="tabpanel" class="tab-pane in fade active" id="testTalk">

                                <div class="media">

                                    <div class="media-left">

                                        <div class="event-date">

                                            <strong>date</strong>

                                            <b>date</b>

                                        </div>

                                    </div>

                                    <div class="media-body">

                                        <a  href="base/single_news/aaaa">

                                            <h4 class="media-heading">lll</h4>

                                            <p>date</p>

                                        </a>

                                    </div>

                                </div>
                            </div>
                        </div>
                        <p>
                            <a href="base/news_details" class="view-all"> view all Publications</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <script type="text/javascript">
        jQuery(document).ready(function ($) {

            var jssor_1_options = {
                $AutoPlay: 1,
                $Idle: 0,
                $SlideDuration: 2000,
                $SlideEasing: $Jease$.$Linear,
                $PauseOnHover: 4,
                $SlideWidth: 210,
                $Align: 0
            };
            var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

            var MAX_WIDTH = 1400;
            function ScaleSlider() {
                var containerElement = jssor_1_slider.$Elmt.parentNode;
                var containerWidth = containerElement.clientWidth;

                if (containerWidth) {

                    var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);
                    jssor_1_slider.$ScaleWidth(expectedWidth);
                }
                else {
                    window.setTimeout(ScaleSlider, 30);
                }
            }
            ScaleSlider();
            $(window).bind("load", ScaleSlider);
            $(window).bind("resize", ScaleSlider);
            $(window).bind("orientationchange", ScaleSlider);
        });
    </script>
    <style>
        /*jssor slider loading skin spin css*/
        .jssorl-009-spin img {
            animation-name: jssorl-009-spin;
            animation-duration: 1.6s;
            animation-iteration-count: infinite;
            animation-timing-function: linear;
        }

        @keyframes jssorl-009-spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
    </style>

    <section class="parners_section">
        <br><h2 class="text-center heading-secondary">Our Partners </h2><br>

        hello
{{--        <div  id="jssor_1" style="position:relative;margin:0 auto;top:0px;left:0px;width:1200px;height:100px;overflow:hidden;visibility:hidden;">--}}
{{--            <div data-u="slides" style="cursor:default;position:relative;width:1200px;height:100px;">--}}

{{--                <div class="single_image_div">--}}
{{--                    <img data-u="image" class="single_image"  src="http://127.0.0.1:8000/frontend_assets/assets_front/images/Capacity/1.jpg" />--}}
{{--                </div>--}}

{{--            </div>--}}
{{--        </div>--}}
    </section>







</div>
<div class="scrollup" style="display: none;" href="#">
    <span class="glyphicon glyphicon-triangle-top" aria-hidden="true"></span>
</div>

<!-- footer section -->
<footer class="site-main-footer bg-color-3">
    <div class="container">
        <div class="row footer-top-big-padding">
            <div class="child-stagger-up" data-scrollmagic data-from="30px">
                <div class="row text-center ">
                    <ul class="social-list list-inline social_list" style="font-size: 14px !important;">
                        <li><a href="base/contact">FIND US</a></li>
                        <li><a href="base/join_us">CAREER</a></li>
                    </ul>
                    <ul class="social-list list-inline">
                        <li><p style="color: #bfbfbf; text-transform: uppercase; font-size: 14px !important;">© GIANT GROUP 2018. DEVELOPED BY <a style="color: #ff7800; text-transform: capitalize;" class="all_right_reserve_a" href="http://webxltd.com/">WebX</a></p></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</footer>

<!-- script added -->
<script type="text/javascript">
    $(document).ready(function(){
        // Add smooth scrolling to all links
        $(".mouse").on('click', function(event) {
            // Make sure this.hash has a value before overriding default behavior
            if (this.hash !== "") {
                // Prevent default anchor click behavior
                event.preventDefault();
                // Store hash
                var hash = this.hash;
                // Using jQuery's animate() method to add smooth page scroll
                // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 800, function(){
                    // Add hash (#) to URL when done scrolling (default click behavior)
                    window.location.hash = hash;
                });
            } // End if
        });
    });
    //bottom to top
    // fadeIn fadeOut
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    // scrolltop
    $('.scrollup').click(function (){
        $("html,body").animate({
            scrollTop: 0
        }, 1500);
        return false;
    });
</script>

<script type="text/javascript">
    (function($) {
        $.fn.countTo = function(options) {
            // merge the default plugin settings with the custom options
            options = $.extend({}, $.fn.countTo.defaults, options || {});
            // how many times to update the value, and how much to increment the value on each update
            var loops = Math.ceil(options.speed / options.refreshInterval),
                increment = (options.to - options.from) / loops;
            return $(this).each(function() {
                var _this = this,
                    loopCount = 0,
                    value = options.from,
                    interval = setInterval(updateTimer, options.refreshInterval);

                function updateTimer() {
                    value += increment;
                    loopCount++;
                    $(_this).html(value.toFixed(options.decimals));
                    if (typeof(options.onUpdate) == 'function') {
                        options.onUpdate.call(_this, value);
                    }

                    if (loopCount >= loops) {
                        clearInterval(interval);
                        value = options.to;
                        if (typeof(options.onComplete) == 'function') {
                            options.onComplete.call(_this, value);
                        }
                    }
                }
            });
        };

        $.fn.countTo.defaults = {
            from: 0,  // the number the element should start at
            to: 100,  // the number the element should end at
            speed: 1000,  // how long it should take to count between the target numbers
            refreshInterval: 100,  // how often the element should be updated
            decimals: 0,  // the number of decimal places to show
            onUpdate: null,  // callback method for every time the element is updated,
            onComplete: null,  // callback method for when the element finishes updating
        };
    })(jQuery);

    jQuery(function($) {
        $('.our_capacity').countTo({
            from: 10,
            to: 50,
            speed: 2000,
            refreshInterval: 2,
            onComplete: function(value) {
                console.debug(this);
            }
        });

        $('.our_garment').countTo({
            from: 10,
            to: 50,
            speed: 2000,
            refreshInterval: 2,
            onComplete: function(value) {
                console.debug(this);
            }
        });

        $('.our_Embroidery').countTo({
            from: 5,
            to: 20,
            speed: 2000,
            refreshInterval: 2,
            onComplete: function(value) {
                console.debug(this);
            }
        });

        $('.our_printing').countTo({
            from: 5,
            to: 35,
            speed: 2000,
            refreshInterval: 2,
            onComplete: function(value) {
                console.debug(this);
            }
        });

        $('.washing').countTo({
            from: 2,
            to: 8,
            speed: 2000,
            refreshInterval: 2,
            onComplete: function(value) {
                console.debug(this);
            }
        });

        $('.employee').countTo({
            from: 1,
            to: 4,
            speed: 2000,
            refreshInterval: 2,
            onComplete: function(value) {
                console.debug(this);
            }
        });
    });

    $(document).ready(function () {
        $(".our_capacity_run").hover(function () {
            $('.our_capacity').countTo({
                from: 5,
                to: 25,
                speed: 2000,
                refreshInterval: 2,
                onComplete: function(value) {
                    console.debug(this);
                }
            });

            $('.our_garment').countTo({
                from: 10,
                to: 50,
                speed: 2000,
                refreshInterval: 2,
                onComplete: function(value) {
                    console.debug(this);
                }
            });

            $('.our_Embroidery').countTo({
                from: 5,
                to: 20,
                speed: 2000,
                refreshInterval: 2,
                onComplete: function(value) {
                    console.debug(this);
                }
            });

            $('.our_printing').countTo({
                from: 5,
                to: 35,
                speed: 2000,
                refreshInterval: 2,
                onComplete: function(value) {
                    console.debug(this);
                }
            });

            $('.washing').countTo({
                from: 2,
                to: 8,
                speed: 2000,
                refreshInterval: 2,
                onComplete: function(value) {
                    console.debug(this);
                }
            });

            $('.employee').countTo({
                from: 1,
                to: 4,
                speed: 2000,
                refreshInterval: 2,
                onComplete: function(value) {
                    console.debug(this);
                }
            });
        });
    });

    $(function () {
        $(".slider1").responsiveSlides({
            speed: 800
        });
    });
</script>

<?php if('break'=="giant_future" || 'break'=="our_pride_bangladesh" || 'break'=="profile"){ ?>

<!-- image slider -->
<script type="text/javascript" src="{{asset('frontend_assets/assets_front/vip_js/vip_swiper.min.js')}}"></script>
<script type="text/javascript" src="{{asset('frontend_assets/assets_front/vip_js/vip_main.js')}}"></script>
<?php } ?>

<?php if('break'=="take_a_tour"){ ?>
<script>
    $(document).ready(function(){
        $('#lightgallery').lightGallery();
    });
</script>
<?php } ?>

<script type="text/javascript" src="{{asset('frontend_assets/assets_front/js/home.bundle.js')}}"></script>
<script type="text/javascript" src="{{asset('frontend_assets/assets_front/js/script.min.js')}}"></script>
<script src="{{asset('frontend_assets/assets_front/home_slider/responsiveslides.min.js')}}"></script>
<script type="text/javascript" src="{{asset('frontend_assets/assets_front/js/main_script.js')}}"></script>

<?php if('break'=="profile"){ ?>
<!-- profile slider -->
<script type="text/javascript">
    $('#carouselExample').on('slide.bs.carousel', function (e) {
        var $e = $(e.relatedTarget);
        var idx = $e.index();
        var itemsPerSlide = 4;
        var totalItems =  $('.carousel-item').length;

        if (idx >= totalItems-(itemsPerSlide-1)) {
            var it = itemsPerSlide - (totalItems - idx);
            for (var i=0; i<it; i++) {
                // append slides to end
                if (e.direction=="left") {
                    $('.carousel-item').eq(i).appendTo('.carousel-inner');
                }
                else {
                    $('.carousel-item').eq(0).appendTo('.carousel-inner');
                }
            }
        }
    });

    $('#carouselExample').carousel({
        interval: 5000
    });

    $(document).ready(function() {
        $('a.thumb').click(function(event){
            event.preventDefault();
            var content = $('.modal-body');
            content.empty();
            var title = $(this).attr("title");
            $('.modal-title').html(title);
            content.html($(this).html());
            $(".modal-profile").modal({show:true});
        });
    });
</script>
<!-- start certificate and machines slider? -->
<script src="{{asset('frontend_assets/assets_front/carousel_slider/highlight.js')}}"></script>
<script src="{{asset('frontend_assets/assets_front/carousel_slider/app.js')}}"></script>
<!-- end certificate and machines slider? -->
<?php } ?>

<?php if('break'=="take_a_tour"){ ?>
<script src="{{asset('frontend_assets/assets_front/js/lightGallery_min.js')}}"></script>
<?php } ?>

</body>
</html>

