﻿if (!ismobile()) {
	// location.href = "../../kfc24hr.qq.com/default.htm";
}

function ismobile() {
	var u = navigator.userAgent.toLowerCase();
	if (u.indexOf('android') > -1 || u.indexOf('linux') > -1) {
		return true;
	}
	if (u.indexOf('dalvik') > -1) {
		return true;
	}
	if (u.indexOf('iphone') > -1 || u.indexOf('ipod') > -1 || u.indexOf('ipad') > -1) {
		return true;
	}
	if (u.indexOf('windows phone') > -1 || u.indexOf('windows mobile') > -1) {
		return true;
	}
	if (u.indexOf('uc ') > -1 || u.indexOf('ucweb') > -1) {
		return true;
	}
	if (u.indexOf('qqbrowser') > -1) {
		return true;
	}
	if (u.indexOf('opera') > -1 && u.indexOf('mobi') > -1) {
		return true;
	}
	return false;
}


//首页PV
track(channel,4236);


$(function(){
				
				
	$('.ptop').click(function(){
		$(this).find('.txt').toggleClass('on');
		$(this).siblings('.banner').fadeToggle();
		
	});
	
	$('#navlist').click(function(ev){
		$('#listcon').toggle();
		ev.stopPropagation();
	});
	

	
})