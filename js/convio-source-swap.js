var $ = require('jquery');

$(function(){
	$.urlParam = function(name){
		var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
		
		if (results==null){
			return null;
		} else {
			return results[1] || 0;
		}
	}
	
	$('.ken-burns-hover a').each(function(){
		var anchor = $(this);
		var url = anchor.attr('href');
		var src = $.urlParam('s_src');
		var subsrc = $.urlParam('s_subsrc');
		
		url = src != null ? url.replace('s_src=CAMP_Name-a-Roach','s_src='+src) : url;
		url = subsrc != null ? url.replace('s_subsrc=CAMP_Name-a-Roach','s_subsrc='+subsrc) : url;
			
		anchor.attr('href',url);
	});
});