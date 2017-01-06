Y.use("jquery-ui", function(Y) {
	jQuery(function() {
		var selectedCard;
		
		jQuery('#tribute_honoree_namename').maxlength({ maxCharacters: 22, slider: true }); 
		jQuery('#tribute_honoree_first_namename').maxlength({ maxCharacters: 30, slider: true }); 
		jQuery('#tribute_message_bodyname').maxlength({ maxCharacters: 200, slider: true }); 
		
		if (jQuery('#ecard_send_date_MONTH').length) {
			jQuery('#ecard_send_date_MONTH').val('2');
			jQuery('#ecard_send_date_DAY').val('13');
		}
	
		if (jQuery("#taf_send").length) {
			jQuery("#taf_send").attr('value', 'Send');
			jQuery("#taf_popup_preview").attr('value', 'Preview');
			
			selectedCard = jQuery('input[name=stationery_layout_id]:checked').val();
			selectCard();
		}
		
		jQuery('.roach-ecard-selection__thumbs__image').bind('click',function(){
			selectedCard = jQuery(this).attr("data-id");
			selectCard();
		});
		
		function selectCard() {
			var selectedClass = 'roach-ecard-selection__thumbs__image--selected';
			var selectedSrc;
			
			jQuery('.roach-ecard-selection__thumbs__image').each(function(){
				var $img = jQuery(this);
				
				$img.removeClass(selectedClass);
								
				if ($img.attr("data-id") == selectedCard) {
					$img.addClass(selectedClass);
					selectedSrc = jQuery('img',$img).attr('src');
				}
			});
			
			jQuery('.roach-ecard-selection__preview img').attr('src',selectedSrc);
		}
	});
});