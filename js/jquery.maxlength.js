Y.use("jquery-ui", function(Y) {
/**
 * jQuery Maxlength plugin
 * @version		$Id: jquery.maxlength.js 18 2009-05-16 15:37:08Z emil@anon-design.se $
 * @package		jQuery maxlength 1.0.5
 * @copyright	Copyright (C) 2009 Emil Stjerneman / http://www.anon-design.se
 * @license		GNU/GPL, see LICENSE.txt
 */
 (function(A){A.fn.maxlength=function(B){var C=jQuery.extend({events:[],maxCharacters:10,status:true,statusClass:"status",statusText:"character left",notificationClass:"notification",showAlert:false,alertText:"You have typed too many characters.",slider:false},B);A.merge(C.events,["keyup"]);return this.each(function(){var G=A(this);var J=A(this).val().length;function D(){var K=C.maxCharacters-J;if(K<0){K=0}G.next("div").html(K+" "+C.statusText)}function E(){var K=true;if(J>=C.maxCharacters){K=false;G.addClass(C.notificationClass);G.val(G.val().substr(0,C.maxCharacters));I()}else{if(G.hasClass(C.notificationClass)){G.removeClass(C.notificationClass)}}if(C.status){D()}}function I(){if(C.showAlert){alert(C.alertText)}}function F(){var K=false;if(G.is("textarea")){K=true}else{if(G.filter("input[type=text]")){K=true}else{if(G.filter("input[type=password]")){K=true}}}return K}if(!F()){return false}A.each(C.events,function(K,L){G.bind(L,function(M){J=G.val().length;E()})});if(C.status){G.after(A("<div/>").addClass(C.statusClass).html("-"));D()}if(!C.status){var H=G.next("div."+C.statusClass);if(H){H.remove()}}if(C.slider){G.next().hide();G.focus(function(){G.next().slideDown("fast")});G.blur(function(){G.next().slideUp("fast")})}})}})(jQuery);
 });