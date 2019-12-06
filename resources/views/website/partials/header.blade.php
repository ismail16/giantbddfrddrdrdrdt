<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-150903828-1"></script>
    <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'UA-150903828-1');
    </script>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="text/html; charset=utf-8" />
    <meta name="csrf-token" content="{{ csrf_token() }}" />
    <title>@yield('title')</title>
    {{-- @yield('meta') --}}
    <meta name="keywords" content="The John Hopkins Medical Journal, Medical Journal, Medical Research, The John Hopkins Medical Journals, medical research journals, top 10 Medical journals, Medical Education, Health related journals, international journal of medical, the The John Hopkins Medical Journal, journal of international medical, online The John Hopkins Medical Journals, online The John Hopkins Medical Journal, international journal of medical research, international journal of medicine, medicine journal, health science, pharmaceutical science, pharmacy Journal, IMJ The John Hopkins Medical Journal." />
    <meta name="description" content="The John Hopkins Medical Journal (ISSN:0021-7263) is a peer reviewed medical journal that aims to publish the quality of medical, pharmaceutical and health science research paper" />
    <meta name="robots" content="all" />
    <link rel="shortcut icon" href="{{asset('images/logos/imjlogo.png')}}">
    <link rel="stylesheet" href="{{asset('frontend_assets/bootstrap/bootstrap.min.css')}}">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i|Noto+Sans:400,400i,700,700i|Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i|Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i">
    <link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Ubuntu:300,300i,400,400i,500,500i,700,700i">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css">
    <link rel="stylesheet" href="{{asset('frontend_assets/slick/slick.css')}}">
    <link rel="stylesheet" href="{{asset('frontend_assets/slick/slick-theme.css')}}">
    <link rel="stylesheet" href="{{asset('frontend_assets/css/jquery.mCustomScrollbar.min.css')}}">
    <link rel="stylesheet" href="{{asset('frontend_assets/css/global.css')}}">
    <link rel="stylesheet" href="{{asset('frontend_assets/css/styles.css')}}">

    <link rel="stylesheet" href="{{asset('frontend_assets/bootstrap/bootstrap-select.min.css')}}">

    <link rel="stylesheet" href="{{asset('frontend_assets/css/bootstrap-social.css')}}" type="text/css">
    <link rel="stylesheet" href="{{asset('frontend_assets/css/main-coolautosuggest.css')}}" type="text/css">

    <script src="{{asset('frontend_assets/js/jquery-3.3.1.min.js')}}" type="text/javascript"></script>
    <script src="{{asset('frontend_assets/js/jquery.coolautosuggest.js')}}" type="text/javascript"></script>
    <script src="{{asset('frontend_assets/js/jquery.coolfieldset.js')}}" type="text/javascript"></script>


<script type='application/ld+json'> 
    {
      "@context": "http://www.schema.org",
      "@type": "WebSite",
      "name": "The John Hopkins Medical Journal",
      "alternateName": "IMJ",
      "url": "https://www.seronijihou.com/",
      "description": "The John Hopkins Medical Journal is a peer reviewed medical journal that aims to publish the quality of medical, pharmaceutical and health science research paper",
    }
 </script>

    


    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
    <script type="text/javascript">
        function jumptolink( what ) {
            var selectedopt = what.options[ what.selectedIndex ]
            if ( document.getElementById || selectedopt.getAttribute( "target" ) == "blank" )
                window.open( selectedopt.value )
            else
                window.location = selectedopt.value
        }
    </script>
</head>
<body>
<style>
    #mainNavbar .navbar-nav .nav-link{
        padding-left: .7rem;
        padding-right: 0.7rem;
    }
</style>
