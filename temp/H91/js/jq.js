$(function() {
	
	/*�汾�л�*/
	select_version();
	function select_version(){
		var tempWindowHeight = $(window).height();
		//alert(tempWindowHeight);
		var tempSelectTop = (tempWindowHeight - $("#select_version > .select_version").height())/2;
		$("#select_version > .select_version").css("top",tempSelectTop);
		$("#select_version_close").click(function(){
			$("#select_version").hide();
			$.ajax('/index.do?touchversion=sd&o=chooseTouchVersion&version=touch');
		});
	}
	//setTimeout('$("#select_version_close").click()',5000);
	
	

	/*�����л�*/
	$("#nav > li").hover(
		function(){
			$(this).addClass('cur');
			}, 
		function(){
			$(this).removeClass('cur');
			}
		);
	$("#nav > li").click(
		function(){
			var url = $(this).attr('title');
			window.location.href=url
			}
	);
	
	
	/*��������*/
	$(".modelList > ul > li").hover(
		function(){
			$(this).addClass('cur');
			},
		function(){
			$(this).removeClass('cur');
			}
	);
	$(".modelList > ul > li").click(
		function(){
			var url = $(this).attr('title');
			window.location.href=url;
			}
	);
	
	
	/*��Ŀ�л�*/
	$(".houseCol > .colTab").toggle(
		function(){
			$(this).find('h3').addClass('cur');
			$(this).next('.houseIntro').show();
			},
		function(){
			$(this).find('h3').removeClass('cur');
			$(this).next('.houseIntro').hide();
			}
		);
	
	/*�绰��λ*/
	$(window).bind("scroll", function(event){
		//alert("OK;");
		var tempWindowHeight = $(window).height();
		var tempWindowScrollTop = $(window).scrollTop();
		if($("#footer") && $("#footer").offset()){
			var tempFooterScrollTop = $("#footer").offset().top;
			if(tempWindowHeight+tempWindowScrollTop>=tempFooterScrollTop){
				$("#footerTel").css('position', 'relative');
			}else{
				$("#footerTel").css('position', 'fixed');
			}
		}
	});
	/*��Ѷ����*/
	$(".newsList > li").click(
		function(){
			var url = $(this).attr('title');
			window.location.href=url;
			}
	);
	
	/*��Ѷ������ť*/
	$("#searchInputBtn").click(function(){
		window.location.href="search.html";
	});
		
	/*�б�����*/	
	$(".colBtnbg1_y").hide();
	$(".colBtnbg2_y").hide();
	$(".colBtn1_y").click( function(){
		var r=$(this).css("border-top-color");
		if(r=="rgb(212, 212, 212)"){
			$(this).css("border-color","#a7a7a7");
			$(this).css("border-bottom-width","0");
			
			}
			else
			{
				$(this).css("border-color","#d4d4d4");
				$(this).css("border-bottom-width","1px");
				
				}
		
		$(".colBtnbg1_y").toggle();
		$(".colBtnbg2_y").toggle();
		});
	$("#newhouseSearchInputBtn,#secondSearchInputBtn").click(function(){
		window.location="./?key="+$("#searchInputTxt").val();
	});
});
