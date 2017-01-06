Y.use("jquery-ui", function(Y) {
	jQuery(function() {
		jQuery('#tribute_honoree_namename').maxlength({ maxCharacters: 22, slider: true }); 
		jQuery('#tribute_honoree_first_namename').maxlength({ maxCharacters: 30, slider: true }); 
		jQuery('#tribute_message_bodyname').maxlength({ maxCharacters: 220, slider: true }); 
		
		if (jQuery('#ecard_send_date_MONTH').length) {
			jQuery('#ecard_send_date_MONTH').val('2');
			jQuery('#ecard_send_date_DAY').val('13');
		}
	
		if (jQuery("#taf_send").length) {
			jQuery("#taf_send").attr('value', 'Send');
			jQuery("#taf_popup_preview").attr('value', 'Preview');
		}
		
		jQuery('.roach-ecard-selection__thumbs__image').bind('click',function(){
			var $selectedCard = jQuery(this);
			var selectedSrc = $selectedCard.attr('src');
			
			jQuery('.roach-ecard-selection__preview img').attr('src',selectedSrc);
			
			jQuery('.roach-ecard-selection__thumbs__image').each(function(){
				jQuery(this).removeClass('roach-ecard-selection__thumbs__image--selected');
			});
			
			$selectedCard.addClass('roach-ecard-selection__thumbs__image--selected');
			
		});
	});
});