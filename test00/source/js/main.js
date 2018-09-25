$(document).ready(function() {
	$(document).on("input", "#val", function() {
    this.value = this.value.replace(/\D/g,'');

});

	Fort.sections("#023102", "#2b982b","#75ee75" );

	$('#progress').progressbar({value:0});
	$('.but').click(function(e) {
            	
            	var val = parseInt($('#val').val());
            	$('#progress').progressbar('option', 'value', val);
            	console.log(val);
            })

});

