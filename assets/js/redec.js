$(document).ready(function() {
	
	$('a[rel*=external]').click( function() {
        window.open(this.href);
        return false;
    });
    
    new gnMenu( document.getElementById( 'gn-menu' ) );
    
    // Active links
	$('.scroll').hover(function(){
		var link = $(this).attr('data-src');
		$('.gn-menu').find('.active').removeClass('active');
		$('#link-'+link).addClass('active');
	});
	
	// Frases
	$('.carousel').carousel({
		interval: 5500
	})
	$('.carousel').on('slide.bs.carousel', function () {
		var item = $(this).find('.active');
		var current = item.attr('data-current');
		var next = item.attr('data-next');
		$('#frases').removeClass('pic-'+current);
		$('#frases').addClass('pic-'+next);
	});
	
	// Proyectos
	$('.project-pic').each(function( index ) {
		var imgsrc = $(this).attr('data-src');
		$(this).css('background', 'url(assets/img/proyectos/'+imgsrc+'-small.png) no-repeat center top');
	});
	$('.project-line a').click(function(){
		return false;
	});
	$('.project-line a').tooltip({
		placement: 'top'
	});
	
	// Areas
	$('.hex a').click(function(){
		return false;
	});
	$('.hex a').tooltip({
		placement: 'bottom'
	});
    
	ww = $(window).width();
	wh = $(window).height();

	// Window height - frases div
	$('#lared-div').height(wh-210);
	$('#ideologia-div').height(wh);
	$('#proyectos-div').height(wh);
	$('#areas-div').height(wh);
	$('#redec-div').height(wh);
	
	//$('.full-height').css('display', 'block');
	$('html, body').animate({ scrollTop: $('#lared-div').offset().top }, 0);
	
});
