Y.use("jquery-ui", function(Y) {
	jQuery(function() {
		jQuery('#tribute_honoree_namename').maxlength({ maxCharacters: 22, slider: true }); 
		jQuery('#tribute_honoree_first_namename').maxlength({ maxCharacters: 30, slider: true }); 
		jQuery('#tribute_message_bodyname').maxlength({ maxCharacters: 220, slider: true }); 
	
		if (jQuery("#taf_send").length) {
			jQuery("#taf_send").attr('value', 'Send');
			jQuery("#taf_popup_preview").attr('value', 'Preview');
		}
	});
});