var DEBUG=!1,Ku6HTML5PlayerImgPrefix="../statics/kplayer/img/default.htm";
function Ku6HTML5Player(b,c,a,d,e){function f(){self.logger.log("in function create_video_element");var a=document.createElement("video");a.style.margin=0;a.style.padding=0;a.style.backgroundColor="black";a.autoplay="";a.preload="meta";a.style.width="100%";a.style.height="100%";a.style.zIndex=1;a.innerHTML="\u6d4f\u89c8\u5668\u4e0d\u652f\u6301HTML5\u89c6\u9891<br />you browser DO NOT support HTML5 video<br><img id='KP_vposter' src='"+self.add_http(self.poster)+"'>";a.src="";self.video_wrapper.appendChild(a);
self.video=a}self=this;self.logger={};self.logger.log=function(){};window.console&&DEBUG&&(self.logger=window.console);c instanceof Array?(self.player_param.video_list.vid_arr=c,self.player_param.video_list.index=0,self.vid=c[0]):self.vid=c;a instanceof Array?(self.player_param.video_list.poster_arr=a,self.poster=a[0]):("undefined"==typeof a&&(a=""),self.poster=a);"function"==typeof d?(e=d,d=""):"undefined"!=typeof d&&self.copy_obj(d,self.player_param);"undefined"!=typeof e&&(self.callback=e);self.video_wrapper=
document.getElementById(b);self.video_wrapper.style.position="relative";self.video_wrapper.style.backgroundColor="black";self.player_param.vid=self.vid;self.player_param.wnd=self.get_ukey();self.player_param.uuid=self.uuid();self.player_param.ini_time=(new Date).getTime();self.player_param.env.useragent=self.check_ua();self.getcustomvars()||(self.set_log("js_fail"),self.set_m_log("html5"));"m3u8"==self.player_param.env.video_src_type?(f(),self.load_m3u8_player()):"flash"==self.player_param.env.video_src_type?
self.load_flash_player():(f(),self.load_mp4_player());0<self.poster.indexOf("dkthumb.jpg")&&(0<document.location.href.indexOf("zt/duanku")||"23"==self.player_param.mediasrc)&&self.jsonp_get("../../mapi.ku6.com/dk/video/pic@v="+self.vid,function(a){console.log(a);if(a=a.data.pic)self.poster=a,"undefined"!==typeof self.video&&(self.video.poster=a,self.video.getElementsByTagName("img")[0].src=a)});return self.add_log()}
Ku6HTML5Player.prototype.set_m_log=function(b){if("undefined"==typeof b||""==b)b="html5";var c=1;self.getcustomvars()||(c=0);return self.jsonp_get("../api.php@op=player_stat&player_type="+b+"&ld_js="+c,function(){self.logger.log("m.ku6.com")})};Ku6HTML5Player.prototype.auto_play=function(){self.video.load();setTimeout(function(){self.video.play()},500)};
Ku6HTML5Player.prototype.load_download_player=function(){self.logger.log("in function load_download_player");self.set_log("init");return self.get_video_info(self.vid,function(b,c,a,d){b?self.video_wrapper.innerHTML="\u51fa\u9519\u4e86\uff0c\u5237\u65b0\u4e00\u4e0b\u8bd5\u8bd5\uff1f":1<a.length?self.video_wrapper.innerHTML="\u6d4f\u89c8\u5668\u4e0d\u652f\u6301\u6b64\u89c6\u9891\uff0c\u8bf7\u66f4\u6362\u6d4f\u89c8\u5668\u89c2\u770b":(b=self.poster,""==b&&(b="undefined"==typeof d.data.picpath?"undefined"==
typeof d.data.bigpicpath?"":d.data.bigpicpath:d.data.picpath),self.video_wrapper.innerHTML='<a href="'+a[0]+'" title="play"><img src="'+b+'" width="100%" height="100%"/></a>')})};
Ku6HTML5Player.prototype.load_flash_player=function(){self.logger.log("in function load_flash_player");self.video_wrapper.innerHTML='<object id="video_player" type="application/x-shockwave-flash" data="../../player.ku6.com/refer/'+self.vid+'/v.swf" height="100%" width="100%"><param name="quality" value="high"> <param name="allowScriptAccess" value="always"><param name="allowFullScreen" value="true"><param name="wMode" value="window"><param name="swLiveConnect" value="true"><embed src="http//player.ku6.com/refer/'+self.vid+
'/v.swf" quality="high" width="100%" height="100%" align="middle" allowScriptAccess="always" allowFullScreen="true" type="application/x-shockwave-flash" flashvars=""></embed></object>'};
Ku6HTML5Player.prototype.load_next_vid=function(b){if("undefined"!=typeof self.callback)return self.callback(function(c,a){self.reset_parameters();"undefined"!=typeof a&&self.copy_obj(a,self.player_param);self.poster="";self.video.poster="";self.vid=c;self.player_param.vid=c;self.player_param.uuid=self.uuid();self.set_log("init");self.set_log("spam");if(""!=c)return b(c,a)})};
Ku6HTML5Player.prototype.load_next_prepare=function(){self.player_param.video_list.index++;if(self.player_param.video_list.index>=self.player_param.video_list.vid_arr.length)return!1;self.reset_parameters();self.set_log("init");self.vid=self.player_param.video_list.vid_arr[self.player_param.video_list.index];0<self.player_param.video_list.poster_arr.length&&(self.poster=self.player_param.video_list.poster_arr[self.player_param.video_list.index],self.video.poster=self.poster);"undefined"!=typeof self.callback&&
self.callback(self.vid);return!0};Ku6HTML5Player.prototype.load_next_video_m3u8=function(){return self.load_next_vid(function(b,c){self.vid=b;self.player_param.vid=b;var a="../../v.ku6.com/fetchwebm/"+b+".m3u8";""!=self.player_param.password&&(a=a+"@auth=1&password="+self.player_param.password);self.video.src=a;self.video.load();self.video.play();return!0})};
Ku6HTML5Player.prototype.check_video_status=function(b){var c=self.vid,a="../../v.ku6.com/video.htm@t=getVideosByIds&ids="+self.vid;return self.jsonp_get(a,function(d){var e="../../v.ku6.com/fetchwebm/"+c+".m3u8";""!=self.player_param.password&&(e=e+"&auth=1&password="+self.player_param.password);if(("undefined"==typeof d||null===d||1!=d.status)&&"function"==typeof b)return b(e);if(0==d.data.list[0].status)return b("../../mapi.ku6.com/v/proxy@vid="+c);if((20<=d.data.list[0].status||23!=d.data.list[0].mediaSrc||
0>d.data.list[0].status)&&"function"==typeof b)return b(e);a="../../v.ku6.com/fetch.htm@t=getVideo4Player&vid="+c+"&stype=mp4";""!=self.player_param.password&&(a=a+"&auth=1&password="+self.player_param.password);return self.jsonp_get(a,function(a){self.player_param.vinfo=a;if(("undefined"==typeof a||null===a||1!=a.status)&&"function"==typeof b)return b(e);var c=a.data.f;if("function"==typeof b)return b(c);self.video.src=a.data.f;self.auto_play()})})};
Ku6HTML5Player.prototype.load_m3u8_player=function(){self.logger.log("in function load_m3u8_player");self.set_log("init");self.set_log("spam_m3u8");return self.check_video_status(function(b){self.video.src=b;self.video.controls="controls";self.video.poster=self.add_http(self.poster);self.player_param.video.proxyurl=b;self.auto_play();self.video.addEventListener("loadedmetadata",function(){self.logger.log("loaded meta data");self.player_param.video.total_time=self.video.duration});self.video.addEventListener("durationchange",
function(){self.logger.log("duration change");self.player_param.video.total_time=self.video.duration});self.video.addEventListener("timeupdate",function(){self.player_param.video.play_time=self.video.currentTime});self.player_param.video.ended=!1;self.video.addEventListener("ended",function(){self.load_next_video_m3u8()||(self.player_param.video.ended=!0)});self.video.addEventListener("play",function(){self.player_param.video.ended&&(self.player_param.video.ended=!1,self.video.load(),self.video.play())})})};
Ku6HTML5Player.prototype.load_next_video_mp4=function(){return self.load_next_vid(function(b,c){self.vid=b;return self.get_video_info(self.vid,function(a,b,c,f){self.logger.log("after get_video_info");a||(self.poster="undefined"==typeof f.data.picpath?"undefined"==typeof f.data.bigpicpath?"":f.data.bigpicpath:f.data.picpath,document.getElementById("KP_cover").src=self.add_http(self.poster),self.video.src=c[0],document.getElementById("KP_total_time").innerHTML=self.sec2min(self.player_param.video.total_time),
self.auto_play())})})};
Ku6HTML5Player.prototype.reset_parameters=function(){self.vid="";self.poster="";self.video.ended=!1;self.player_param.vid="";self.player_param.uid="";self.player_param.password="";self.player_param.video.play_time=0;self.player_param.poster="";self.player_param.uuid="";self.player_param.ini_time=0;self.player_param.vinfo={};self.player_param.log={played:!1,play_times:0,load_started:!1,ended:!1,per_0:!1,per_25:!1,per_50:!1,per_75:!1,per_100:!1};self.player_param.video.current_part=0};
Ku6HTML5Player.prototype.concat_parts=function(){function b(){self.logger.log("in function load_next");var b=self.player_param.video.current_part;b<self.player_param.video.parts-1?(self.player_param.video.current_part++,self.video.src=self.player_param.video.url_arr[b+1],self.video.load(),self.video.play()):self.load_next_video_mp4()}self.logger.log("concat_parts");self.video.addEventListener("ended",function(){DEBUG&&self.logger.log("ended");return b()});self.video.addEventListener("timeupdate",
function(){for(var c=0,a=0;a<self.player_param.video.current_part;a++)c+=self.player_param.video.time_arr[a+1]/1E3;c+=self.video.currentTime;self.player_param.video.play_time=c;if(0!=self.video.currentTime&&self.video.currentTime==self.video.duration&&!self.video.ended)return self.logger.log("video ended "+self.video.ended),DEBUG&&self.logger.log("video ended, load new part"),b()})};
Ku6HTML5Player.prototype.load_mp4_player=function(){function b(){if(DEBUG){var b=document.createElement("div");b.style.position="absolute";b.style.color="green";b.style.height="100px";b.style.top="0px";b.style.left="0px";b.style.padding="10px";b.style.wordBreak="break-word";var a=document.createElement("p");a.innerHTML=self.video.currentTime;var d=document.createElement("p");d.innerHTML=self.video.buffered.length;self.logger.log(self.video.buffered);var e=document.createElement("p");e.innerHTML=self.video.volume;
var f=document.createElement("p");f.innerHTML=self.video.playbackRate;var g=document.createElement("p");g.innerHTML=self.video.duration;var h=document.createElement("p");h.innerHTML=self.video.currentSrc;document.createElement("p").innerHTML=self.video.networkState;var k=document.createElement("p");k.innerHTML=self.player_param.video.play_time;var l=document.createElement("p");l.innerHTML=self.video.webkitSupportsFullscreen;b.appendChild(a);b.appendChild(d);b.appendChild(e);b.appendChild(f);b.appendChild(g);
b.appendChild(h);b.appendChild(k);b.appendChild(l);self.video_wrapper.appendChild(b);self.video.addEventListener("timeupdate",function(){a.innerHTML=self.video.currentTime});self.video.addEventListener("progress",function(){0<self.video.buffered.length&&(d.innerHTML=self.video.buffered.end(self.video.buffered.length-1))});self.video.addEventListener("volumechange",function(){e.innerHTML=self.video.volume});self.video.addEventListener("ratechange",function(){f.innerHTML=self.video.playbackRate});self.video.addEventListener("durationchange",
function(){g.innerHTML=self.video.duration});self.video.addEventListener("timeupdate",function(){h.innerHTML=self.video.currentSrc});self.video.addEventListener("timeupdate",function(){k.innerHTML=self.player_param.video.play_time;l.innerHTML=self.video.webkitSupportsFullscreen})}}"undefined"!=typeof self.poster&&""!=self.poster&&(self.video.poster=self.add_http(self.poster));(function(){function b(){var a=self.video_wrapper.offsetWidth,c=self.video_wrapper.offsetHeight,d={};0.75<a/c?(d.width=4*c/
3,d.height=c):(d.width=a,d.height=3*a/4);return d}if(!("undefined"!=typeof self.poster_set&&!0==self.poster_set)){self.poster_set=!0;var a=document.createElement("div");a.style.position="absolute";a.style.left="0";a.style.top="0";a.style.width="100%";a.style.height="100%";a.style.color="black";a.style.backgroundColor="black";var d=document.createElement("image");d.id="KP_cover";d.type="image";d.style.left="50%";d.style.top="50%";var e=b();d.style.width=e.width+"px";d.style.height=e.height+"px";d.style.marginLeft=
-e.width/2+"px";d.style.marginTop=-e.height/2+"px";d.style.position="absolute";"undefined"==typeof self.poster||""==self.poster?d.style.display="none":(d.style.display="block",d.src=self.add_http(self.poster));a.appendChild(d);self.video_wrapper.appendChild(a);self.cover=a;self.video.addEventListener("play",function(){"none"!=self.cover.style.display&&(self.cover.style.display="none")})}})();(function(){function b(){clearTimeout(self.player_param.style.control_bar.timeout_id);if(!self.video.paused){var a=
self.player_param.style.control_bar;a.timeout_id=setTimeout(function(){$("#KP_control_bar").fadeOut(a.hide_speed)},a.timeout)}}var a=document.createElement("div");a.style.position="absolute";a.style.bottom=0;a.style.left=0;a.style.width="100%";a.style.height=Math.floor(self.video_wrapper.offsetHeight/5)+"px";a.style.backgroundColor="rgba(43,43,43,0.7)";a.style.zIndex=1003;a.id="KP_control_bar";self.control_bar=a;self.video_wrapper.appendChild(a);self.logger.log("height",a.offsetHeight);var d=document.createElement("div");
d.style.position="absolute";d.style.top=0;d.style.left=0;d.style.width="100%";d.style.height="5%";d.style.backgroundColor="black";d.id="KP_prog_bar";var e=document.createElement("div");e.style.position="absolute";e.style.bottom=0;e.style.left=0;e.style.width="100%";e.style.height="95%";e.style.backgroundColor="transparent";e.id="KP_control_cbar";a.appendChild(d);a.appendChild(e);a=function(){var a=document.getElementById("KP_control_cbar"),b=a.offsetHeight;return{pbtn:{width:b,height:b},full_screen:{width:b,
height:b},vol_btn:{width:b,height:b},time_min:{width:2*b,height:b,font_size:b/3},play_bar:{width:a.offsetWidth-5*b,height:b}}}();d.innerHTML="<div id='KP_cbar_bar' class=''  style='position:relative;display:block;width:100%;height:100%;background-color:transparent;'><div class='play_bar' id='KP_play_bar' style='width:100%;height:100%;background-color:transparent;top:0;position:absolute;left:0%;' ><span class='download_bar'  id='KP_download_bar'  style='height:100%; background-color:#717171; position:absolute;z-index:3;left:0px;' ></span><span class='play_current_bar' id='KP_play_current_bar'  style='height:100%; background-color:#7ee500; position:absolute;z-index:4;left:0px;' ></span><span class='play_position'  id='KP_play_position'  style='height:100%; background-color:#ccff00; position:absolute;z-index:5; width:3px;' ></span></div></div>";
e.innerHTML="<div id='KP_cbar_pbtn_wrapper' class=''  style='position:relative;display:inline-block;float:left;width:"+a.pbtn.width+"px;height:"+a.pbtn.height+"px;background-color:transparent;' ><input id='KP_cbar_pbtn' type='image' src='"+self.player_param.img.play_btn+"'alt='play' style='width:50%;height:50%;border-width:0;left:25%;top:25%;position:absolute;'></input></div>"+("<div class='time_min' id='KP_time_min' style='color:#666666;position:relative;float:left;display:inline-block;background-color:transparent;px;height:"+
a.time_min.height+"px;font-size:"+a.time_min.font_size+"px;line-height:"+a.time_min.height+"px;' ><div style='float:right;margin-right:5px;color:#999999;'><span id='KP_play_time' class='time_min_sp' style='' >0:00</span><span id='KP_time_min_sp' class='time_min_sp' style='' >../_3C/span><span id='KP_total_time' class='time_min_sp' style='' >0:00</span></div></div>")+("<div id='KP_cbar_fullscreen' class=''  style='float:right;display:inline-block; width:"+a.full_screen.width+"px;height:"+a.full_screen.height+
"px;background-color:transparent;' ><div style='position:relative;width:100%;height:100%;float:left;'><input id='KP_fullscreen_btn' type='image'  style='width:50%;height:50%;left:25%;top:25%;position:relative;' src='"+self.player_param.img.fullscreen_btn+"' /></div></div>");var d=document.getElementById("KP_cbar_pbtn_wrapper"),e=document.getElementById("KP_cbar_bar"),a=document.getElementById("KP_time_min"),f=document.getElementById("KP_vol_btn"),g=document.getElementById("KP_cbar_fullscreen");self.cbar=
{pbtn:d,bar:e,time_min:a,vol_btn:f,fullscreen:g};var h=document.getElementById("KP_download_bar"),k=document.getElementById("KP_play_current_bar"),l=document.getElementById("KP_play_position"),m=document.getElementById("KP_cbar_pbtn"),n=document.getElementById("KP_play_time"),d=document.getElementById("KP_total_time"),e=document.getElementById("KP_fullscreen_btn");d.innerHTML=self.sec2min(self.player_param.video.total_time);self.video.addEventListener("timeupdate",function(){var a=Math.floor(1E4*
(self.player_param.video.play_time/self.player_param.video.total_time))/100;100<=a&&(a=100);k.style.width=a+"%";l.style.right=100-a+"%";n.innerHTML=self.sec2min(self.player_param.video.play_time)});self.video.addEventListener("progress",function(){if(!(100<=parseInt(h.style.width.substr(0,h.style.width.indexOf("%")),10))&&0<self.video.buffered.length){for(var a=0,b=0;b<self.player_param.video.current_part;b++)a+=self.player_param.video.time_arr[b+1]/1E3;a+=self.video.buffered.end(self.video.buffered.length-
1);self.player_param.video.bufffer_time=a;a=Math.floor(1E4*(a/self.player_param.video.total_time))/100;100<=a&&(a=100);h.style.width=a+"%"}});self.video.addEventListener("pause",function(){m.src=self.player_param.img.play_btn});self.video.addEventListener("play",function(){m.src=self.player_param.img.pause_btn});self.video_wrapper.addEventListener("mouseover",function(){self.control_bar.style.display="block";b()});self.video_wrapper.addEventListener("mousemove",function(){self.control_bar.style.display=
"block";b()});self.video_wrapper.addEventListener("mouseout",function(){b()});m.addEventListener("click",function(){self.video.paused?(self.video.play(),m.src=self.player_param.img.pause_btn):(self.video.pause(),m.src=self.player_param.img.play_btn)});e.addEventListener("click",function(){self.full_screen()})})();self.add_play_btn();self.set_log("init");self.set_log("spam_mp4");return self.get_video_info(self.vid,function(c,a,d,e){self.logger.log("after get_video_info");if(!c){if("undefined"==typeof self.poster||
""==self.poster)self.poster="undefined"==typeof e.data.picpath?"undefined"==typeof e.data.bigpicpath?"":e.data.bigpicpath:e.data.picpath,c=document.getElementById("KP_cover"),c.src=self.add_http(self.poster),c.style.display="block";self.video.src=d[0];document.getElementById("KP_total_time").innerHTML=self.sec2min(self.player_param.video.total_time);self.concat_parts();DEBUG&&b();self.auto_play()}})};
Ku6HTML5Player.prototype.add_play_btn=function(){var b;b=self.video_wrapper.offsetWidth>self.video_wrapper.offsetHeight?self.video_wrapper.offsetHeight/4:self.video_wrapper.offsetWidth/4;var c=document.createElement("input");c.type="image";c.style.position="absolute";c.style.zIndex=1003;c.style.width=b+"px";c.style.height=b+"px";c.style.marginLeft=-b/2+"px";c.style.marginTop=-b/2+"px";c.style.top="50%";c.style.left="50%";c.src=self.player_param.img.play_btn;"iphone"!=self.player_param.env.useragent&&
"ipad"!=self.player_param.env.useragent?(c.addEventListener("click",function(){self.video.paused&&(self.video.play(),c.style.display="none")}),self.video.addEventListener("pause",function(){c.style.display="block"}),self.video.addEventListener("play",function(){c.style.display="none"})):c.addEventListener("click",function(){c.style.display="none";self.cover.style.display="none";self.video.style.display="block";self.video.load();self.video.play()});self.video_wrapper.appendChild(c);self.play_btn=c};
Ku6HTML5Player.prototype.copy_obj=function(b,c){for(item in b)"undefined"!=typeof c[item]&&("object"==typeof b[item]?"object"==typeof c[item]?self.copy_obj(b[item],c[item]):self.logger.log("no match"):typeof c[item]==typeof b[item]&&(self.logger.log(b[item]),c[item]=b[item]))};Ku6HTML5Player.prototype.sec2min=function(b){b=Math.floor(b);var c=Math.floor(b/60);b%=60;return c+":"+(10>b?"0"+b:b)};
Ku6HTML5Player.prototype.playpp=function(){var b={v:self.vid,o:self.player_param.uid,c:self.player_param.cid,rnd:Math.random(1)};self.jsonp_get("../../v0.stat.ku6.com/dostatv.do@method=setVideoPlayCount",b)};
Ku6HTML5Player.prototype.add_log=function(){if("android_2"!=self.player_param.env.useragent&&"undefined"!=typeof self.video){var b=self.video;b.addEventListener("loadstart",function(){self.player_param.log.load_started||(self.logger.log("loadstart"),self.player_param.log.load_started=!0)});b.addEventListener("play",function(){if(!self.player_param.log.played)return self.logger.log("play"),self.player_param.log.played=!0,self.playpp(),self.set_log("play")});b.addEventListener("ended",function(){if(self.player_param.video.current_part==
self.player_param.video.parts-1)return self.logger.log("end"),self.player_param.log.ended=!0,self.set_log("view",1)});b.addEventListener("timeupdate",function(){if(0!=self.video.currentTime&&self.video.currentTime==self.video.duration&&!self.video.ended&&self.video.current_part==self.video.parts-1)return self.logger.log("end"),self.player_param.log.ended=!0,self.set_log("view",1)});setInterval(function(){var b="undefined"==typeof self.player_param.log["vtime_"+Math.floor(self.player_param.video.play_time)]?
!1:!0;if(!self.video.paused&&!b){"m3u8"==self.player_param.env.video_src_type&&0==self.player_param.video.total_time&&(self.player_param.video.total_time=self.video.duration);if(0<self.player_param.video.play_time&&1>self.player_param.video.play_time)return self.logger.log("0"),self.set_log("view",0);if(5==Math.floor(self.player_param.video.play_time))return self.logger.log("5"),self.set_log("view",5);if(15==Math.floor(self.player_param.video.play_time))return self.logger.log("15"),self.set_log("view",
15);if(30==Math.floor(self.player_param.video.play_time))return self.logger.log("30"),self.set_log("view",30);if(31<self.player_param.video.play_time&&0==Math.floor(self.player_param.video.play_time%30)&&!self.player_param.log.ended)return b=Math.floor(self.player_param.video.play_time),self.logger.log(b),self.set_log("view",b);if(!self.player_param.log.per_25&&0.25<self.player_param.video.play_time/self.player_param.video.total_time)return self.logger.log("25%"),self.player_param.log.per_25=!0,self.set_log("view",
0.25);if(!self.player_param.log.per_50&&0.5<self.player_param.video.play_time/self.player_param.video.total_time)return self.logger.log("50%"),self.player_param.log.per_50=!0,self.set_log("view",0.5);if(!self.player_param.log.per_75&&0.75<self.player_param.video.play_time/self.player_param.video.total_time)return self.logger.log("75%"),self.player_param.log.per_75=!0,self.set_log("view",0.75)}},1E3)}};
Ku6HTML5Player.prototype.getcustomvars=function(){return"undefined"!=typeof window._beacon?window._beacon:!1};
Ku6HTML5Player.prototype.set_log=function(b,c){if("view"==b&&"undefined"==typeof c)return self.logger.log("view_time undefined"),!1;var a=Math.floor((new Date).getTime()-self.player_param.ini_time),d=self.get_crc(b,a),e="",e="undefined"!==typeof KP_play_url&&""!==KP_play_url?KP_play_url:document.location.href,a={action:b,ver:self.player_param.version,vid:self.vid,wnd:self.get_ukey(),uuid:self.player_param.uuid,clientTime:a,playtimes:0,cid:self.player_param.cid,mediasrc:self.player_param.mediasrc,
uid:self.player_param.uid,url:e,refer:document.referrer,time_total:self.player_param.video.total_time,pid:self.player_param.pid,kps:d};if(d=self.getcustomvars())a.beacon_cook=d;switch(b){case "init":a.action="init";a.autoplay=!1;break;case "play":a.action="play";a.error=0;a.time_total=self.player_param.video.total_time;a.streamurl=self.video.currentSrc;d="../../v.ku6.com/fetchwebm/"+self.vid+".m3u8";a.proxyurl="undefined"==typeof self.player_param.video.url_arr[0]?d:self.player_param.video.url_arr[0];
a.split=self.player_param.video.current_part+1;break;case "error":a.action="error";break;case "end":a.action="end";break;case "view":a.action="view";a.pid=self.player_param.pid;if(1>=c&&0<=c)a.percent=100*c,a.vtime=Math.floor(c*self.player_param.video.total_time);else if(a.percent=Math.floor(100*(self.player_param.video.play_time/self.player_param.video.total_time)),a.vtime=c,0==a.percent||25==a.percent||50==a.percent||75==a.percent||100==a.percent)self.player_param.log["per_"+a.percent]=!0;self.player_param.log["vtime_"+
a.vtime]=!0}self.jsonp_get("../../dwtracking.sdo.com/ku6.gif",a)};
Ku6HTML5Player.prototype.get_video_info=function(b,c){self.logger.log("in function get_video_info");self.logger.log(b);var a="../../v.ku6.com/fetch.htm@t=getVideo4Player&vid="+b+"&stype=mp4";""!=self.player_param.password&&(a=a+"&auth=1&password="+self.player_param.password);return self.jsonp_get(a,function(a){self.player_param.vinfo=a;if("undefined"==typeof a||null===a||1!=a.status)return c("err");var b=a.data.vtimems.toString().split(","),f=a.data.f.split(",");if(0>=b.length||0>=f.length)return c("err");
for(var g=0;g<b.length;g++)b[g]=parseInt(b[g],10);self.player_param.video.time_arr=b.concat();self.player_param.video.url_arr=f.concat();self.player_param.video.parts=f.length;self.player_param.video.total_time=b[0]/1E3;self.logger.log(b);if("undefined"!=typeof c)return c(null,b,f,a)})};
Ku6HTML5Player.prototype.jsonp_get=function(b,c,a){"function"==typeof c&&(a=c,c="");b=0<b.indexOf("?")?b+"&cb=?":b+"?cb=?";$.ajax({url:b,type:"GET",data:c,dataType:"jsonp",jsonp:"cb",success:function(c,e,f){self.logger.log("success function"+b);self.logger.log(c);if("undefined"!=typeof a)return a(c)}});self.json_callback=function(c){self.logger.log("jsonp function"+b);self.logger.log("json_callback");self.logger.log(c);if("undefined"!=typeof a)return a(c)}};
Ku6HTML5Player.prototype.add_http=function(b){return 0==b.indexOf("http//")||0==b.indexOf("../../https@/")?b:"http//"+b};Ku6HTML5Player.prototype.get_ukey=function(){if("undefined"==typeof localStorage)return"";var b=localStorage.getItem("KP_ukey");if("undefined"==typeof b||null==b)b=self.uuid(),localStorage.setItem("KP_ukey",b);return b};
Ku6HTML5Player.prototype.uuid=function(){for(var b="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),c=Array(40),a,d=0;40>d;d++)a=Math.floor(62*Math.random()),62==a&&(a-=1),c[d]=b[a];return c.join("")};
Ku6HTML5Player.prototype.get_crc=function(b,c){if("undefined"==typeof c||"undefined"==typeof b)return 0;var a=0,d="Zz".charAt(a++&1),d=d+(self.get_ukey()+"Zz".charAt(a++&1)),d=d+(self.player_param.version+"Zz".charAt(a++&1)),d=d+(b+"Zz".charAt(a++&1)),d=d+(self.player_param.uuid+"Zz".charAt(a++&1)),d=d+(self.player_param.vid+"Zz".charAt(a++&1)),d=d+(self.player_param.uid+"Zz".charAt(a++&1)),a=d+=c+"Zz".charAt(a++&1),e=void 0;"undefined"==typeof e&&(e=0);for(var f=0,f=0,e=e^-1,g=0,h=a.length;g<h;g++)f=
(e^a.charCodeAt(g))&255,f="0x"+"00000000 77073096 EE0E612C 990951BA 076DC419 706AF48F E963A535 9E6495A3 0EDB8832 79DCB8A4 E0D5E91E 97D2D988 09B64C2B 7EB17CBD E7B82D07 90BF1D91 1DB71064 6AB020F2 F3B97148 84BE41DE 1ADAD47D 6DDDE4EB F4D4B551 83D385C7 136C9856 646BA8C0 FD62F97A 8A65C9EC 14015C4F 63066CD9 FA0F3D63 8D080DF5 3B6E20C8 4C69105E D56041E4 A2677172 3C03E4D1 4B04D447 D20D85FD A50AB56B 35B5A8FA 42B2986C DBBBC9D6 ACBCF940 32D86CE3 45DF5C75 DCD60DCF ABD13D59 26D930AC 51DE003A C8D75180 BFD06116 21B4F4B5 56B3C423 CFBA9599 B8BDA50F 2802B89E 5F058808 C60CD9B2 B10BE924 2F6F7C87 58684C11 C1611DAB B6662D3D 76DC4190 01DB7106 98D220BC EFD5102A 71B18589 06B6B51F 9FBFE4A5 E8B8D433 7807C9A2 0F00F934 9609A88E E10E9818 7F6A0DBB 086D3D2D 91646C97 E6635C01 6B6B51F4 1C6C6162 856530D8 F262004E 6C0695ED 1B01A57B 8208F4C1 F50FC457 65B0D9C6 12B7E950 8BBEB8EA FCB9887C 62DD1DDF 15DA2D49 8CD37CF3 FBD44C65 4DB26158 3AB551CE A3BC0074 D4BB30E2 4ADFA541 3DD895D7 A4D1C46D D3D6F4FB 4369E96A 346ED9FC AD678846 DA60B8D0 44042D73 33031DE5 AA0A4C5F DD0D7CC9 5005713C 270241AA BE0B1010 C90C2086 5768B525 206F85B3 B966D409 CE61E49F 5EDEF90E 29D9C998 B0D09822 C7D7A8B4 59B33D17 2EB40D81 B7BD5C3B C0BA6CAD EDB88320 9ABFB3B6 03B6E20C 74B1D29A EAD54739 9DD277AF 04DB2615 73DC1683 E3630B12 94643B84 0D6D6A3E 7A6A5AA8 E40ECF0B 9309FF9D 0A00AE27 7D079EB1 F00F9344 8708A3D2 1E01F268 6906C2FE F762575D 806567CB 196C3671 6E6B06E7 FED41B76 89D32BE0 10DA7A5A 67DD4ACC F9B9DF6F 8EBEEFF9 17B7BE43 60B08ED5 D6D6A3E8 A1D1937E 38D8C2C4 4FDFF252 D1BB67F1 A6BC5767 3FB506DD 48B2364B D80D2BDA AF0A1B4C 36034AF6 41047A60 DF60EFC3 A867DF55 316E8EEF 4669BE79 CB61B38C BC66831A 256FD2A0 5268E236 CC0C7795 BB0B4703 220216B9 5505262F C5BA3BBE B2BD0B28 2BB45A92 5CB36A04 C2D7FFA7 B5D0CF31 2CD99E8B 5BDEAE1D 9B64C2B0 EC63F226 756AA39C 026D930A 9C0906A9 EB0E363F 72076785 05005713 95BF4A82 E2B87A14 7BB12BAE 0CB61B38 92D28E9B E5D5BE0D 7CDCEFB7 0BDBDF21 86D3D2D4 F1D4E242 68DDB3F8 1FDA836E 81BE16CD F6B9265B 6FB077E1 18B74777 88085AE6 FF0F6A70 66063BCA 11010B5C 8F659EFF F862AE69 616BFFD3 166CCF45 A00AE278 D70DD2EE 4E048354 3903B3C2 A7672661 D06016F7 4969474D 3E6E77DB AED16A4A D9D65ADC 40DF0B66 37D83BF0 A9BCAE53 DEBB9EC5 47B2CF7F 30B5FFE9 BDBDF21C CABAC28A 53B39330 24B4A3A6 BAD03605 CDD70693 54DE5729 23D967BF B3667A2E C4614AB8 5D681B02 2A6F2B94 B40BBE37 C30C8EA1 5A05DF1B 2D02EF8D".substr(9*
f,8),e=e>>>8^f;a=e^-1;self.logger.log(d);self.logger.log(a);return a};Ku6HTML5Player.prototype.check_qq_version=function(b){b=b.match(/mqqbrowser\/((\d)+)\.((\d)+)?\s\w/);var c=0,a=0;!b||"undefined"==typeof b[1]||"undefined"==typeof b[3]?a=c=0:(c=parseInt(b[1],10),a=parseInt(b[3],10));return 4<=c&&2<=a||4<c?!0:!1};Ku6HTML5Player.prototype.in_array=function(b,c){for(var a=c.length,d=0;d<a;d++)if(b===c[d])return!0;return!1};
Ku6HTML5Player.prototype.check_ua=function(){var b=navigator.userAgent.toLowerCase(),c="",a="";-1<b.indexOf("android")||-1<b.indexOf("adr")?self.check_qq_version(b)?(c="android_qq",a="qq"):-1<b.indexOf("android 2")||-1<b.indexOf("android/2")||-1<b.indexOf("adr 2")?c="android_2":-1<b.indexOf("mqqbrowser")?(a="qq",c="android_qq_old"):-1<b.indexOf("ucweb")||-1<b.indexOf("ucbrowser")?(a="uc",c="android_uc"):-1<b.indexOf("baidu")?(a="baidu",c="android_baidu"):c="android_new":c=-1<b.indexOf("iphone")||
-1<b.indexOf("ios")||-1<b.indexOf("iph")||-1<b.indexOf("ipd")?"iphone":-1<b.indexOf("ipad")?"ipad":"pc";b=["android_2"];self.in_array(c,["android_qq","android_baidu","iphone","ipad"])?self.player_param.env.video_src_type="m3u8":self.in_array(c,b)?self.player_param.env.video_src_type="flash":self.player_param.env.video_src_type="mp4";self.player_param.env.useragent=c;self.player_param.env.browser=a;return c};
Ku6HTML5Player.prototype.fullscreen_change=function(b){if("undefine"!=typeof self.video_wrapper.onwebkitfullscreenchange)return self.video_wrapper.addEventListener("webkitfullscreenchange",function(){return b()});if("undefine"!=typeof self.video.onwebkitfullscreenchange)return self.video.addEventListener("webkitfullscreenchange",function(){return b()});if("undefine"!=typeof self.video_wrapper.onmozfullscreenchange)return self.video_wrapper.addEventListener("mozfullscreenchange",function(){return b()});
if("undefine"!=typeof self.video.onmozfullscreenchange)return self.video.addEventListener("mozfullscreenchange",function(){return b()});if("undefine"!=typeof self.video_wrapper.onfullscreenchange)return self.video_wrapper.addEventListener("fullscreenchange",function(){return b()});if("undefine"!=typeof self.video.onfullscreenchange)return self.video.addEventListener("fullscreenchange",function(){return b()})};
Ku6HTML5Player.prototype.full_screen=function(b){function c(){var a=self.video_wrapper,b=self.video;if("function"==typeof a.webkitRequestFullScreen)return a.webkitRequestFullScreen();if("function"==typeof a.webkitRequestFullscreen)return a.webkitRequestFullscreen();if("function"==typeof a.mozRequestFullScreen)return a.mozRequestFullScreen();if("function"==typeof a.mozRequestFullscreen)return a.mozRequestFullscreen();if("function"==typeof a.requestFullscreen)return a.requestFullscreen();if("function"==
typeof a.requestFullScreen)return a.requestFullScreen();if("function"==typeof b.webkitEnterFullScreen)return b.webkitEnterFullScreen();if("function"==typeof b.webkitEnterFullscreen)return b.webkitEnterFullscreen();if("function"==typeof b.webkitRequestFullScreen)return b.webkitRequestFullScreen();if("function"==typeof b.webkitRequestFullscreen)return b.webkitRequestFullscreen();if("function"==typeof b.mozRequestFullScreen)return b.mozRequestFullScreen();if("function"==typeof b.mozRequestFullscreen)return b.mozRequestFullscreen();
if("function"==typeof b.requestFullscreen)return b.requestFullscreen();if("function"==typeof b.requestFullScreen)return b.requestFullScreen()}function a(){if("function"==typeof document.webkitCancelFullScreen)return document.webkitCancelFullScreen();var a=self.video;if("function"==typeof a.webkitExitFullScreen)return a.webkitExitFullScreen();if("function"==typeof document.mozCancelFullScreen)return document.mozCancelFullScreen();if("function"==typeof document.exitFullscreen)return document.exitFullscreen();
if("function"==typeof document.cancelFullScreen)return document.cancelFullScreen()}self.logger.log("in function full_screen");return"undefined"==typeof b?(b="undefined"!=typeof document.webkitIsFullScreen&&!0==document.webkitIsFullScreen||"undefined"!=typeof document.fullScreen&&!0==document.fullScreen||"undefined"!=typeof document.mozFullScreen&&!0==document.mozFullScreen||"undefined"!=typeof document.fullscreen&&!0==document.fullscreen?!0:!1,b?a():c()):!0==b?c():a()};
Ku6HTML5Player.prototype.player_param={vid:"",poster:"",version:"Version_HTML5_0.1.6",uuid:"",wnd:"",mediasrc:"",uid:"",cid:"",pid:"",autoplay:"",ini_time:0,password:"",vinfo:{},log:{played:!1,play_times:0,load_started:!1,ended:!1,per_0:!1,per_25:!1,per_50:!1,per_75:!1,per_100:!1},env:{useragent:"",os:"",browser:"",can_play_type:"mp4",client:"pc"},video:{vid:"",poster:"",controls:!0,autoplay:!1,src:"",preload:"auto",time_arr:[],url_arr:[],total_time:0,play_time:0,buffer_time:0,parts:1,current_part:0,
paused:!0,timeout:0},img:{play_btn:Ku6HTML5PlayerImgPrefix+"play.png",pause_btn:Ku6HTML5PlayerImgPrefix+"pause.png",fullscreen_btn:Ku6HTML5PlayerImgPrefix+"fullscreen.png",volume_down_btn:Ku6HTML5PlayerImgPrefix+"volume_down.png",volume_up_btn:Ku6HTML5PlayerImgPrefix+"volume_up.png"},style:{css:"kplayer.css",control_bar:{timeout:1500,timeout_id:0,hide_speed:375}},video_list:{vid_arr:[],poster_arr:[],index:0}};
