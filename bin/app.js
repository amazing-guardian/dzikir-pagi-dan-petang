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