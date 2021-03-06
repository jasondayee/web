// JavaScript Document
//---------- 搜索表单验证
$( function() {
	var searchTxt = $("#search input:text[name='SeaStr']").val();
	$("#search").submit( function() {
		var s_searchTxt = $(this).find("input:text[name='SeaStr']").val();
		if ( s_searchTxt == "" || s_searchTxt == searchTxt || s_searchTxt == "请输入搜索关键词" ) {
			$(this).find("input:text[name='SeaStr']").val("请输入搜索关键词");
			return false;
		}
	} ).find("input:text[name='SeaStr']").focus( function() {
		var s_searchTxt = $(this).val();
		if ( s_searchTxt == searchTxt || s_searchTxt == "请输入搜索关键词" ) {
			$(this).val("");
		}
	} ).blur( function() {
		var s_searchTxt = $(this).val();
		if ( s_searchTxt == "" || s_searchTxt == "请输入搜索关键词" ) {
			$(this).val(searchTxt);
		}
	} );
} );

function checkForm()
{
	var SeaStr = $("#SeaStr").val();
	var defVal = $("#SeaStr").attr("defval");
	var r = '';
	var u = '';
	var a = location.href;		
	var b = a.toLowerCase();
	var bIsPhp = b.match(/.php/i) == ".php";   
	
	if(bIsPhp){ 
		u = "ajax/seastr.php?r=" + Math.random();
		//alert('is php');
	}else{
		u = "../ajax/seastr.php?r=" + Math.random();
		//alert('is html');
	}
		
	if (defVal == SeaStr || SeaStr=="" || SeaStr==undefined)
	{
		return false;
	}
	
	$.ajax({
		type: "GET",
		url: u,
		data:"SeaStr="+SeaStr, 
		dataType: "text",
		async: false,
		error: function(err) {
			alert("搜索失败");
			r = "ERR";
			return false;
		},
		success: function(msg) {
			r = msg;
		}
	});
	if (r == "TRUE")
		return true;
	else if (r == "EMT")
	{
		alert("请输入搜索关键字");
		return false;
	}
	else
	{
		alert("搜索失败");
		return false;
	}
		
}