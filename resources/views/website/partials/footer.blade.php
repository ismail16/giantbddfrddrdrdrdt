{{-- <section>
    <hr>
    <div class="container-fluid mt-3">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="shadow-3dp">
                        <h6 class="card-header mt-0" style="background-color: #1f6065; color:#fff; text-align: center;">Our Certificates</h6>
                        <section class="customer-logos slider mt-4 mb-3">
                            @foreach(\App\Models\Certification::get() as $certification)
                                <div class="slide"><img alt="Certificates" src="{{asset('images/certifications/'.$certification->image)}}"></div>
                            @endforeach
                        </section>
                    </div>
                </div>
            </div>
        </div>

    </div>
</section> --}}
<section style="background-color: #dfe6ee;">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="shadow-3dp">
                    <div class="container" style="">
                        <div class="row">
                            <div class="col-md-12  pt-3 pb-3 pr-5 pl-5">
                                <div class="row d-flex flex-row-reverse">

                                    <div class="col-md-3">
                                        <h4><strong>Guidelines</strong></h4>
                                        <ul class="list-unstyled footer_link mt-3">
                                            <li>
                                                <i class="fas fa-hand-point-right"></i>
                                                <a title="Information For Authors" href="{{ route('authors') }}">Information For Authors</a>
                                            </li>

                                            <li>
                                                <i class="fas fa-hand-point-right"></i>
                                                <a title="Information Editorial Board" href="{{route('editors')}}">Information Editorial Board</a>
                                            </li>
                                            <li>
                                                <i class="fas fa-hand-point-right"></i> 
                                                <a title="Faq" href="{{ route('faq') }}">FAQ</a>
                                            </li>
                                        </ul>
                                    </div>

                                    <div class="col-md-3">
                                    </div>
                                    <div class="col-md-2">
                                    </div>



                                    <div class="col-md-4">
                                        <h4><strong>Further Information</strong></h4>
                                        <ul class="list-unstyled footer_link mt-3">
                                            <li>
                                                <i class="fas fa-hand-point-right"></i>
                                                <a href="{{route('apc')}}">Article Processing Charges</a>
                                            </li>
                                            <li>
                                                <i class="fas fa-hand-point-right"></i>
                                                <a href="{{route('open_access')}}">Open Access Policy</a>
                                            </li>

                                            <li>
                                                <i class="fas fa-hand-point-right"></i>
                                                <a href="{{route('terms_condition')}}">Terms and Conditions</a>
                                            </li>
                                            <li>
                                                <i class="fas fa-hand-point-right"></i>
                                                <a href="{{route('privacy_policy')}}">Privacy Policy</a>
                                            </li>
                                            <li>
                                                <i class="fas fa-hand-point-right"></i>
                                                <a href="{{route('create.feedback')}}">User Feedback</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <style>
                                    .footer_link li{
                                        padding: 3px 10px;
                                    }

                                    .footer_link li a{
                                        color: #1080d1;
                                        font-size: 13px;
                                        /*line-height: 2;*/
                                    }
                                    .footer_link li a:hover{
                                        color: red;
                                        font-size: 14px;
                                        /*line-height: 2;*/
                                    }
                                 /*   .footer_link li i{
                                        color: red;
                                        font-size: 13px;
                                        line-height: 2;
                                    }*/
                                </style>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section style="background-color: #28555a; color:#fff;">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="_shadow-3dp">
                    <div class="footer-copyright text-center py-3">Copyright © 2019-2020:
                        <a style="color: #73e831;" href="{{ route('index') }}"> The John Hopkins Medical Journal</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<a href="#0" class="cd-top js-cd-top">
    <span style=""><i class="fa fa-home"></i></span>
</a>

{{--sertification slider start--}}
<style>
    h2{
        text-align:center;
        padding: 20px;
    }
    .slick-slide {
        margin: 0px 20px;
    }
    .slick-slide img {
        width: 100%;
    }
    .slick-slider {
        position: relative;
        display: block;
        box-sizing: border-box;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        -webkit-touch-callout: none;
        -khtml-user-select: none;
        -ms-touch-action: pan-y;
        touch-action: pan-y;
        -webkit-tap-highlight-color: transparent;
    }
    .slick-list {
        position: relative;
        display: block;
        overflow: hidden;
        margin: 0;
        padding: 0;
    }
    .slick-list:focus {
        outline: none;
    }
    .slick-list.dragging {
        cursor: pointer;
        cursor: hand;
    }
    .slick-slider .slick-track.slick-slider .slick-list {
        -webkit-transform: translate3d(0, 0, 0);
        -moz-transform: translate3d(0, 0, 0);
        -ms-transform: translate3d(0, 0, 0);
        -o-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
    }

    .slick-track {
        position: relative;
        top: 0;
        left: 0;
        display: block;
    }
    .slick-track:before, .slick-track:after {
        display: table;
        content: '';
    }
    .slick-track:after {
        clear: both;
    }
    .slick-loading .slick-track {
        visibility: hidden;
    }

    .slick-slide {
        display: none;
        float: left;
        height: 100%;
        min-height: 1px;
    }
    [dir='rtl'] .slick-slide
    {
        float: right;
    }
    .slick-slide img
    {
        display: block;
    }
    .slick-slide.slick-loading img
    {
        display: none;
    }
    .slick-slide.dragging img
    {
        pointer-events: none;
    }
    .slick-initialized .slick-slide
    {
        display: block;
    }
    .slick-loading .slick-slide
    {
        visibility: hidden;
    }
    .slick-vertical .slick-slide
    {
        display: block;
        height: auto;
        border: 1px solid transparent;
    }
    .slick-arrow.slick-hidden {
        display: none;
    }
</style>

<script>
    $(document).ready(function(){
        $('.customer-logos').slick({
            slidesToShow: 6,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1500,
            arrows: false,
            dots: false,
            pauseOnHover: false,
            responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 4
                }
            }, {
                breakpoint: 520,
                settings: {
                    slidesToShow: 3
                }
            }]
        });
    });
</script>
{{--sertification slider start--}}
<style>
    .cd-top {

        position: fixed;
        right: 10px;
        bottom: 10px;
        cursor: pointer;
        width: 50px;
        height: 50px;
        background-color: #3498db;
        text-indent: -9999px;
        display: none;
        -webkit-border-radius: 60px;
        -moz-border-radius: 60px;
        border-radius: 60px;
        display: inline-block;
        height: 40px;
        width: 40px;
        position: fixed;
        bottom: 40px;
        right: 10px;
        -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
        overflow: hidden;
        text-indent: 100%;
    }

    .cd-top span{
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: -27px;
        margin-top: -14px;
        height: 0;
        width: 0;
        font-size: 20px;
        color: #FFF;
    }
</style>

<script data-cfasync="false" src="{{asset('frontend_assets/js/email-decode.min.js')}}"></script>
<script src="https://code.jquery.com/jquery-3.3.1.min.js" type="text/javascript"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js" type="text/javascript"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js" type="text/javascript"></script>

<script type="text/javascript" src="https://www.omicsonline.org/js/jquery.bootpag.min.js"></script>
<script type="text/javascript" src="{{asset('frontend_assets/js/jquery.matchHeight.js')}}"></script>
<script type="text/javascript" src="{{asset('frontend_assets/js/grids.min.js')}}"></script>

<script>
    function view_count_submit(id) {
        var token = $('meta[name="csrf-token"]').attr('content');
        $.ajax({
            type:'POST',
            url:'/view_count_submit',
            data: { _token : token, article_id : id },
            success:function(data){
                console.log(data);

            },
            error: function(){
                console.log('ggggg0000');

            }
        });
    }
</script>
<script type="text/javascript">
  $(function() {
    $('.equal-height').matchHeight({
      byRow: true,
      property: 'height',
      target: null,
    });
  });
</script>
<script type="text/javascript">
	// Equal Height
	var EqualHeight = function () {
		"use strict";

		// Handle Equal Height
		var handleEqualHeight = function () {
			$( function ( $ ) {
				for ( var count = 1; count < 17; count++ ) {
					$( '.equal-height-' + count ).responsiveEqualHeightGrid();
				}
			} );
		}

		return {
			init: function () {
				handleEqualHeight(); // initial setup for equal height
			}
		}
	}();

	$( document ).ready( function () {
		"use strict";
		EqualHeight.init();
	} );
</script>
<script type="text/javascript">
	$( function () {
		$( document ).on( 'scroll', function () {
			if ( $( window ).scrollTop() > 100 ) {
				$( '.scroll-top-wrapper' ).addClass( 'show' );
			} else {
				$( '.scroll-top-wrapper' ).removeClass( 'show' );
			}
		} );
		$( '.scroll-top-wrapper' ).on( 'click', scrollToTop );
	} );

	function scrollToTop() {
		verticalOffset = typeof ( verticalOffset ) != 'undefined' ? verticalOffset : 0;
		element = $( 'body' );
		offset = element.offset();
		offsetTop = offset.top;
		$( 'html, body' ).animate( {
			scrollTop: offsetTop
		}, 500, 'linear' );
	}

	$( document ).ready( function () {
		$( "#display" ).click( function () {
			$.ajax( { //create an ajax request to load_page.php
				type: "GET",
				url: "index.php",
				dataType: "html", //expect html to be returned
				success: function ( response ) {
					$( "#responsecontainer" ).html( response );
					//alert(response);
				}
			} );
		} );
	} );
</script>
<script type="text/javascript">

$(document).ready(function(){
$("#Article p a").click(function(event){
	event.preventDefault();
	activaTab('References');

var idhash = this.hash;
      $('html, body').animate({
        scrollTop: $(idhash).offset().top + 0
      }, 800, function(){

        window.location.hash = idhash;
      });

});
});

function activaTab(tab){
  $('.nav-tabs a[href="#' + tab + '"]').tab('show');
};
</script>

<script type="text/javascript">
  $(function() {
    $('.equal-height').matchHeight({
      byRow: true,
      property: 'height',
      target: null,
    });
  });
</script>
<script type="text/javascript">
	// Equal Height
	var EqualHeight = function () {
		"use strict";

		// Handle Equal Height
		var handleEqualHeight = function () {
			$( function ( $ ) {
				for ( var count = 1; count < 17; count++ ) {
					$( '.equal-height-' + count ).responsiveEqualHeightGrid();
				}
			} );
		}

		return {
			init: function () {
				handleEqualHeight(); // initial setup for equal height
			}
		}
	}();

	$( document ).ready( function () {
		"use strict";
		EqualHeight.init();
	} );
</script>
<script type="text/javascript">
	$( function () {
		$( document ).on( 'scroll', function () {
			if ( $( window ).scrollTop() > 100 ) {
				$( '.scroll-top-wrapper' ).addClass( 'show' );
			} else {
				$( '.scroll-top-wrapper' ).removeClass( 'show' );
			}
		} );
		$( '.scroll-top-wrapper' ).on( 'click', scrollToTop );
	} );

	function scrollToTop() {
		verticalOffset = typeof ( verticalOffset ) != 'undefined' ? verticalOffset : 0;
		element = $( 'body' );
		offset = element.offset();
		offsetTop = offset.top;
		$( 'html, body' ).animate( {
			scrollTop: offsetTop
		}, 500, 'linear' );
	}

	$( document ).ready( function () {
		$( "#display" ).click( function () {
			$.ajax( { //create an ajax request to load_page.php
				type: "GET",
				url: "index.php",
				dataType: "html", //expect html to be returned
				success: function ( response ) {
					$( "#responsecontainer" ).html( response );
					//alert(response);
				}
			} );
		} );
	} );
</script>
<script type="text/javascript">

$(document).ready(function(){
$("#Article p a").click(function(event){
	event.preventDefault();
	activaTab('References');

var idhash = this.hash;
      $('html, body').animate({
        scrollTop: $(idhash).offset().top + 0
      }, 800, function(){

        window.location.hash = idhash;
      });

});
});

function activaTab(tab){
  $('.nav-tabs a[href="#' + tab + '"]').tab('show');
};
</script>
<script type="text/javascript" src="{{asset('frontend_assets/bootstrap/bootstrap-select.min.js')}}"></script>
<script type="text/javascript" src="{{asset('frontend_assets/js/scroll-to-top.js')}}"></script>
<script type="text/javascript" src="{{asset('frontend_assets/js/grids.min.js')}}"></script>
<script type="text/javascript">
  // Equal Height
  var EqualHeight = function() {
  "use strict";

  // Handle Equal Height
  var handleEqualHeight = function() {
	$(function($) {
		$('.equal-height-1').responsiveEqualHeightGrid();
		$('.equal-height-2').responsiveEqualHeightGrid();
		$('.equal-height-3').responsiveEqualHeightGrid();
		$('.equal-height-4').responsiveEqualHeightGrid();
		$('.equal-height-5').responsiveEqualHeightGrid();
		$('.equal-height-6').responsiveEqualHeightGrid();
		$('.equal-height-7').responsiveEqualHeightGrid();
		$('.equal-height-8').responsiveEqualHeightGrid();
	});
  }

  return {
	init: function() {
		handleEqualHeight(); // initial setup for equal height
	}
  }
  }();

  $(document).ready(function() {
  EqualHeight.init();
  });
</script>
<script type="text/javascript" src="{{asset('frontend_assets/js/jquery.matchHeight.js')}}"></script>
<script type="text/javascript">
  $(function() {
	$('.equal-height').matchHeight({
	  byRow: true,
	  property: 'height',
	  target: null,
	});
  });
</script>
<script type="text/javascript" src="{{asset('frontend_assets/slick/slick.min.js')}}"></script>
<script type="text/javascript">
  $( document ).ready( function () {
    $( '.testimonials' ).slick( {
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 500,
      adaptiveHeight: true,
      vertical: true,
    } );
  } );
  $( document ).ready( function () {
    $( '.initiatives' ).slick( {
      arrows: true,
      autoplay: true,
      autoplaySpeed: 2000,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 500,
      adaptiveHeight: true,
      vertical: true,
    } );
  } );
</script>
<script type="text/javascript">
	// Equal Height
	var EqualHeight = function () {
		"use strict";

		// Handle Equal Height
		var handleEqualHeight = function () {
			$( function ( $ ) {
				for(var eh=1;eh<17;eh++){
					$('.equal-height-'+eh).responsiveEqualHeightGrid();
				}
			} );
		};

		return {
			init: function () {
				handleEqualHeight(); // initial setup for equal height
			}
		};
	}();

	$( document ).ready( function () {
		"use strict";
		EqualHeight.init();
	} );
</script>
<script type="text/javascript">
	$( function () {
		$( document ).on( 'scroll', function () {
			if ( $( window ).scrollTop() > 100 ) {
				$( '.scroll-top-wrapper' ).addClass( 'show' );
			} else {
				$( '.scroll-top-wrapper' ).removeClass( 'show' );
			}
		} );
		$( '.scroll-top-wrapper' ).on( 'click', scrollToTop );
	} );

	function scrollToTop() {
		verticalOffset = typeof ( verticalOffset ) != 'undefined' ? verticalOffset : 0;
		element = $( 'body' );
		offset = element.offset();
		offsetTop = offset.top;
		$( 'html, body' ).animate( {
			scrollTop: offsetTop
		}, 500, 'linear' );
	}
</script>
{{-- <script type="text/javascript">
    window.NREUM||(NREUM={});NREUM.info={"beacon":"bam.nr-data.net","licenseKey":"3f3e310de7","applicationID":"35703331","transactionName":"NQRRMksCC0oEBUxbWwxOZhRQTAxXAQNAHEQKEQ==","queueTime":0,"applicationTime":48,"atts":"GUNSRAMYGEQ=","errorBeacon":"bam.nr-data.net","agent":""}
</script> --}}
<script src="{{asset('frontend_assets/js/rocket-loader.min.js')}}" data-cf-settings="07e35d7c53b1c1629ff9e681-|49" defer=""></script>
</body>
</html>
