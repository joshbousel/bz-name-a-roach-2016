Y.use("jquery-ui", function(Y) {
	jQuery(function() {
		jQuery('#tribute_honoree_namename').maxlength({ maxCharacters: 22, slider: true }); 
		jQuery('#tribute_honoree_first_namename').maxlength({ maxCharacters: 30, slider: true }); 
		jQuery('#tribute_message_bodyname').maxlength({ maxCharacters: 220, slider: true }); 
		
		if (jQuery('#ecard_send_date_MONTH').length) {
			jQuery('#ecard_send_date_MONTH').val('2');
			jQuery('#ecard_send_date_DAY').val('13');
		}
	});
});