// buat fungsi baru

jQuery.fn.center = function () {
    this.css("position","absolute")
    this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + $(window).scrollTop()) + "px")
    this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + $(window).scrollLeft()) + "px")
    return this
}

// cover

$('.cover').height($(window).height()).width($(window).width())
$('.cover-isi').center()
$('.navbar, .isi-aplikasi').hide()
$('.cover').click(function(){
	$(this).slideUp()
	$('.navbar, .isi-aplikasi').show()
})

// isi aplikasi

$('.arab p').hide()
lihat_menu = function(){
	if ($('.menu-cek').is(':checked')){
		$('.menu-teks').html('<span class="green-text">Terjemahan aktif</span>')
		$('.arab p').show()
	} else {
		$('.menu-teks').html('<span class="grey-text">Terjemahan mati</span>')
		$('.arab p').hide()
	}
}
lihat_menu()
$('.menu-cek').click(function(){
	lihat_menu()
})