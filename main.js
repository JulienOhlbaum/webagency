$('a[href^="#ancre_logo"]').click(function(){
	$('html, body').animate({
		scrollTop:$('#acceuil').offset().top
	}, 'slow');
});

$('a[href^="#acceuil"]').click(function(){
	$('html, body').animate({
		scrollTop:$('#acceuil').offset().top
	}, 'slow');
});

$('a[href^="#services"]').click(function(){
	$('html, body').animate({
		scrollTop:$('#services').offset().top
	}, 'slow');
});

$('a[href^="#projets"]').click(function(){
	$('html, body').animate({
		scrollTop:$('#projets').offset().top
	}, 'slow');
});

$('a[href^="#contact"]').click(function(){
	$('html, body').animate({
		scrollTop:$('#contact').offset().top
	}, 'slow');
});

$('#bouton_gauche').on('click', function(){
	$('#toggle').fadeToggle('slow');
});

$('#bouton_droit').on('click', function(){
	$('#toggle').fadeToggle('slow');
});
			
