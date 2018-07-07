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
	window.location.reload();
});