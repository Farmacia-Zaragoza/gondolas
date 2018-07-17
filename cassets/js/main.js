/*
	main.js - V_0_0_2
	Date: 10-07-2018
*/


// event for add active class into link_description
document.querySelector('.other_links').addEventListener('mouseover', showLinkDescription);
document.querySelector('.photocasa').addEventListener('mouseover', showLinkDescription);
function showLinkDescription(e) {
	//console.log(e.target.parentElement.children[0].className);
	if(e.target.parentElement.children[0].className === 'link_description') {
		e.target.parentElement.children[0].classList.add('active');
	}
}
// event for remove active class from link_description
document.querySelector('.other_links').addEventListener('mouseout', hideLinkDescription);
document.querySelector('.photocasa').addEventListener('mouseout', hideLinkDescription);
function hideLinkDescription(e) {
	//console.log(e.target.parentElement.children[0].className);
	if(e.target.parentElement.children[0].className === 'link_description active') {
		e.target.parentElement.children[0].classList.remove('active');
	}
}

//event for window resize
window.addEventListener('resize', function() {
	window_reload();
});
function window_reload() {
	window.location.reload();
}

// remove first contact_link section from DOM
	if(window.innerWidth < 768) {
		remove_contact_link();
	}
	function remove_contact_link() {
		var contact_link = document.querySelector('.contact_link');
		if(contact_link.parentElement.children[3].className === 'contact_link mobile_invisible') {
			//console.log(contact_link.parentElement.children[3]);
			contact_link.parentElement.children[3].remove();
		}	
	}

// script for flex_caption visible when hover on slider area

var whole_caption_area = document.querySelector('.whole_caption_area');
var flex_caption = document.querySelector('.flex_caption');
var slider = document.getElementById('slider');

whole_caption_area.style.display = 'none';
flex_caption.style.display = 'none';
slider.addEventListener('mouseover', function() {
	whole_caption_area.style.display = 'block';
	flex_caption.style.display = 'block';	
});
slider.addEventListener('mouseleave', function() {
	whole_caption_area.style.display = 'none';
	flex_caption.style.display = 'none';	
});

// script for show caption marquee content for different truck

var marquee_content = document.querySelector('.marquee-content');
//console.log(marquee_content.parentElement.children[0]);
marquee_content_list = marquee_content.parentElement.children;
//console.log(marquee_content_list[0].className);

//var marquee_arr = Array.from(marquee_content_list);
//console.log(marquee_content_list[1].className);



var carousel_item = document.getElementById('carousel');
//console.log(carousel_item.children[0].children);

var carousel_item_list = carousel_item.children[0].children;
//console.log(carousel_item_list);

//var carousell_arr = Array.from(carousel_item_list);
//console.log(carousell_arr);

carousel_item_list[0].addEventListener('mouseover', function() {
	marquee_content_list[0].classList.add('active');
	marquee_content_list[1].classList.remove('active');
	marquee_content_list[2].classList.remove('active');
	marquee_content_list[3].classList.remove('active');
	marquee_content_list[4].classList.remove('active');
});
carousel_item_list[1].addEventListener('mouseover', function() {
	marquee_content_list[0].classList.remove('active');
	marquee_content_list[1].classList.add('active');
	marquee_content_list[2].classList.remove('active');
	marquee_content_list[3].classList.remove('active');
	marquee_content_list[4].classList.remove('active');
});
carousel_item_list[2].addEventListener('mouseover', function() {
	marquee_content_list[0].classList.remove('active');
	marquee_content_list[1].classList.remove('active');
	marquee_content_list[2].classList.add('active');
	marquee_content_list[3].classList.remove('active');
	marquee_content_list[4].classList.remove('active');
});
carousel_item_list[3].addEventListener('mouseover', function() {
	marquee_content_list[0].classList.remove('active');
	marquee_content_list[1].classList.remove('active');
	marquee_content_list[2].classList.remove('active');
	marquee_content_list[3].classList.add('active');
	marquee_content_list[4].classList.remove('active');
});
carousel_item_list[4].addEventListener('mouseover', function() {
	marquee_content_list[0].classList.remove('active');
	marquee_content_list[1].classList.remove('active');
	marquee_content_list[2].classList.remove('active');
	marquee_content_list[3].classList.remove('active');
	marquee_content_list[4].classList.add('active');
});
