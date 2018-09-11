$('.setting-search').click(function() {
	$('.setting-dialog').toggle(300);
	$('.triangle').slideUp(200);
	$('.catalog-application-catalog').slideUp(200);
});

$('.img-catalog-app').click(function () {
	$('.triangle').slideToggle(200);
	$('.catalog-application-catalog').slideToggle(200);
	$('.setting-dialog').slideUp(200);
});
$('.r-user').click(function () {
	$('.r-user-profile').slideToggle(150);
});