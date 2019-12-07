// $(document).ready(function () {
// 	$(".video_div_area").hover(function () {
// 		$(this).children("video")[0].play();
// 	}, function () {
// 		var el = $(this).children("video")[0];
// 		el.pause();
// 		el.currentTime = 0;
// 	});
// });




jQuery(document).ready(function () {
	var counterLoaded = false;
	var oTop = $('#section-counter').offset().top - window.innerHeight;
	$(window).scroll(function () {
		var pTop = $(window).scrollTop();
		if (pTop > oTop) {
			if (counterLoaded) {
				return;
			}
			counterLoaded = true;
			$('.counter-count').each(function () {
				$(this).prop('Counter', 0).animate({
					Counter: $(this).text()
				}, {
					duration: 5000,
					easing: 'swing',
					step: function (now) {
						$(this).text(Math.ceil(now));
					}
				});
			});
		}
	});

	$(".main-menu-item").hover(function () {
		var menu = {
			// "home": [
			// {name: "", link: ''}
			// ],
			// "profile": [
			// {name: 'Our Leaders', link: 'our_leaders.html'},
			// {name: 'Our Story (Circtificates)', link: 'our_story.html'},
			// {name: 'Our Belief', link: 'our_belief.html'},
			// {name: 'Our Capacity', link: 'our_capacity.html'},
			// {name: 'Our Success Story', link: 'our_success_story.html'}
			// ],
			// "take_a_tour": [
			// {name: '', link: ''},
			// ],
			// "sustainability_strategy": [
			// {name: 'Giving back to the society/people', link: 'bact_to_society.html'},
			// {name: 'Caring for the environment', link: 'environment.html'}
			// ],
			// "our_concerns": [
			// {name: 'GIANT BUSINESS TOWER ', link: 'gbt.html'},
			// {name: 'Giant Agro', link: 'giant_agro.html'}
			// ],
			// "our_pride_bangladesh": [
			// {name: "", link: ''}
			// ],
		}
		var item_selected = $(this).html().replace(/\s+/g, '_').toLowerCase();
		var sub_menu_items = eval("menu." + item_selected);
		var text = "";
		for (i = 0; i < sub_menu_items.length; i++) {
			text += '<a data-target="home" class="menu__item sub-menu-item" href="'+sub_menu_items[i].link+'">' + sub_menu_items[i].name +'</a>';
		}

		var margin_top = (parseInt(sub_menu_items[0]) * 42) + 'px';
		text = '<h1 style = "margin-top: ' + margin_top + ';"></h1>' + text;
		$("#sub-menu").html(text);
	});

	$(document).delegate('.dynamic_submit_btn', 'click', function (event, jqXHR, settings) {
		var form = $(this).closest('form');
		var form_id = form.attr('id');

		if (form.find('.has-error').length) {
			return false;
		}

		$.ajax({
			url: form.attr('action'),
			type: 'post',
			data: form.serialize(),
			beforeSend: function (request) {
				$('.success_wrapper_' + form_id).addClass('hide');
				$('.error_wrapper_' + form_id).addClass('hide');
			},

			success: function (data) {
				if (data.result == 'success') {
					form[0].reset();
					$('.success_wrapper_' + form_id).removeClass('hide');
					$('.error_wrapper_' + form_id).addClass('hide');
					$('.success_container_' + form_id).html(data.msg);
					$('.error_container_' + form_id).html('');

				} else {
					$('.error_container_' + form_id).html(data.msg);
					$('.success_container_' + form_id).html('');
					$('.success_wrapper_' + form_id).addClass('hide');
					$('.error_wrapper_' + form_id).removeClass('hide');
				}
			}
		});
		return false;
	});
});


function openNav(element) {
	// alert(element.getAttribute('data-video-src'));return;
	document.getElementById("circle-video-frame").src = element.getAttribute('data-video-src');
	document.getElementById("video-player-overlay").style.display = "block";
}

/* Close */
function closeNav() {
	document.getElementById("video-player-overlay").style.display = "none";
	document.getElementById("circle-video-frame").src = "";

}


// gallary
/*profile page slide*/

$(document).ready(()=> {
  'use strict';

    var owl = $('.owl-carousel'),
        item,
        itemsBgArray = [], // to store items background-image
        itemBGImg;
  
    owl.owlCarousel({  
        items: 1,
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 8000,
        autoplaySpeed: 1000,
        loop: true,
        nav: true,
        navText: false,
        onTranslated: function () {
            changeNavsThump();
        }
    });
  
    $('.active').addClass('anim');
  
    var owlItem = $('.owl-item'),
        owlLen = owlItem.length;
    /* --------------------------------
      * store items bg images into array
    --------------------------------- */
    $.each(owlItem, function( i, e ) {
        itemBGImg = $(e).find('.owl-item-bg').attr('src');
        itemsBgArray.push(itemBGImg);
    });
    /* --------------------------------------------
      * nav control thump
      * nav control icon
    --------------------------------------------- */
    var owlNav = $('.owl-nav'),
        el;
    
    $.each(owlNav.children(), function (i,e) {
        el = $(e);
        // append navs thump/icon with control pattern(owl-prev/owl-next)
        el.append('<div class="'+ el.attr('class').match(/owl-\w{4}/) +'-thump">');
        el.append('<div class="'+ el.attr('class').match(/owl-\w{4}/) +'-icon">');
    });
    
    /*-------------------------------------------
      Change control thump on each translate end
    ------------------------------------------- */
    function changeNavsThump() {
        var activeItemIndex = parseInt($('.owl-item.active').index()),
            // if active item is first item then set last item bg-image in .owl-prev-thump
            // else set previous item bg-image
            prevItemIndex = activeItemIndex != 0 ? activeItemIndex - 1 : owlLen - 1,
            // if active item is last item then set first item bg-image in .owl-next-thump
            // else set next item bg-image
            nextItemIndex = activeItemIndex != owlLen - 1 ? activeItemIndex + 1 : 0;
        
        $('.owl-prev-thump').css({
            backgroundImage: 'url(' + itemsBgArray[prevItemIndex] + ')'
        });
        
        $('.owl-next-thump').css({
            backgroundImage: 'url(' + itemsBgArray[nextItemIndex] + ')'
        });
    }
    changeNavsThump();
});


