$(document).ready(function() {
	$('.menu-showmenu').click(function(event) {
		$('.menu ul').toggleClass('active');
	});
	$('.content-order-menu-commodity-love').click(function(event) {
		event.preventDefault();
		$(this).toggle().siblings('.content-order-menu-commodity-love-chack').show();
	});
		$('.content-order-menu-commodity-love-chack').click(function(event) {
		event.preventDefault();	
		$(this).toggle().siblings('.content-order-menu-commodity-love').show();
	});
});