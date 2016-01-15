Y.use("jquery-ui", function(Y) {
	jQuery(function() {
		jQuery('#tribute_honoree_namename').maxlength({ maxCharacters: 30, slider: true }); 
		jQuery('#tribute_honoree_first_namename').maxlength({ maxCharacters: 22, slider: true }); 
		jQuery('#tribute_message_bodyname').maxlength({ maxCharacters: 250, slider: true }); 
	});
});