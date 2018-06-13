// buat fungsi baru

// sumber: https://stackoverflow.com/questions/210717/using-jquery-to-center-a-div-on-the-screen

jQuery.fn.center = function () {
    this.css("position","absolute")
    this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2)) + "px")
    this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2)) + "px")
    return this
}

// cover

$('.cover').height($(window).height()).width($(window).width())
$('.cover-isi').center()
$('.cover').click(function(){
	$(this).css({
		top: function(){
			return 0 - $(window).height()
		}
	})
	$('html, body').animate({
		scrollTop: 0
	}, 0)
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