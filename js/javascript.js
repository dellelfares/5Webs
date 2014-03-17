$(".logo, .text, .thetext, .icon, .circle").hide();
$(document).ready(function() { 
	$(window).load(function(){
		$(".container1").css("height",$(window).height());
		var sc=$(window).height()/775;
		$(".menu").css("-webkit-transform","scale("+sc+")");
		$(".menu").css("-moz-transform","scale("+sc+")");
		$(".menu").css("-ms-transform","scale("+sc+")");
		$(".menu").css("-o-transform","scale("+sc+")");
		$(".circle").show();
		$(".icon").fadeIn(1000).each(function(){$(this).css({"margin-left":($(this).parent().children('img').width()/(-5))+"px"});}); 
		pp(5);
		setTimeout(function() { 
			$(".logo").fadeIn(1500); 
		}, 500);
		
		setTimeout(function() { 
			$(".circlearound").css({ "background-color" : "#ddd7d1" });
		}, 1500);
	});  
	
	
	$(".circle").click(function(){
		var angle=getRotationDegrees($(this));
		if(($(".text").is(":visible"))&&(angle==0))
			rightopen=true;
		else
			rightopen=false;
		if(!open)
			$(".logo, .text, .circle, .circlecenter, .circlearound").animate({ left : ($(".menu").width()*0.5-360)+'px' },1000);
		if(!rightopen)
			$(this).children(".icon").animate({ opacity : "1" },1500);
		$(".logo, .text, .thetext").fadeOut(1500);
		$(".icon").animate({ opacity : "0.6" },500);
		$(".circlearound").css({ "background-color" : "#ffffff" });		
		switch(angle) {
			case -72:
				angle = 1;
				pp(angle);
				break;
			case -144:
				angle = 2;
				pp(angle);
				break;
			case 144:
				angle = 3;
				pp(angle);
				break;
			case 72:
				angle = 4;
				pp(angle);
				break;
			case 0:
				if(rightopen)
				{	
					$(".logo, .text, .circle, .circlecenter, .circlearound").animate({ left : ($(".menu").width()*0.5)+'px' },1500);
					$(".logo").fadeIn(1000); 
					$(".text").fadeOut(1500);
					$(".circlearound").css({ "background-color" : "#ddd7d1" });
					$(".icon").animate({ opacity : "1" },1500);
					open=false;
				}
		}
	});
	
	$(".one").click(function(){	if(!rightopen) {$(this).children(".icon").animate({ opacity : "1" },1500); if(!open) {open=true;setTimeout(function() { $(".t1, .text1").fadeIn(1500);}, 1000);} else{$(".t1, .text1").fadeIn(1500);}}});
	$(".two").click(function(){	if(!rightopen) {$(this).children(".icon").animate({ opacity : "1" },1500); if(!open) {open=true;setTimeout(function() { $(".t2, .text2").fadeIn(1500);}, 1000);} else{$(".t2, .text2").fadeIn(1500); }}});
	$(".three").click(function(){if(!rightopen) {$(this).children(".icon").animate({ opacity : "1" },1500); if(!open) {open=true;setTimeout(function() { $(".t3, .text3").fadeIn(1500);}, 1000);} else{$(".t3, .text3").fadeIn(1500);}}});
	$(".four").click(function(){if(!rightopen) {$(this).children(".icon").animate({ opacity : "1" },1500); if(!open) {open=true;setTimeout(function() { $(".t4, .text4").fadeIn(1500);}, 1000);} else{$(".t4, .text4").fadeIn(1500);}}});
	$(".five").click(function(){if(!rightopen) {$(this).children(".icon").animate({ opacity : "1" },1500); if(!open) {open=true;setTimeout(function() { $(".t5, .text5").fadeIn(1500);}, 1000);} else{$(".t5, .text5").fadeIn(1500);}}});
	
	$(".circle").hover(function(){
		$(this).children('.up').hide();
		},function(){
		$(this).children('.up').show();
	});
});
var rightopen=false;
var open=false;
var aa,i ;
var tt=new Array;
tt=[0,72,144,216,288];

function getRotationDegrees(obj) {
    var matrix = obj.css("-webkit-transform") ||
    obj.css("-moz-transform")    ||
    obj.css("-ms-transform")     ||
    obj.css("-o-transform")      ||
    obj.css("transform");
    if(matrix !== 'none') {
        var values = matrix.split('(')[1].split(')')[0].split(',');
        var a = values[0];
        var b = values[1];
        var angle = Math.round(Math.atan2(b, a) * (180/Math.PI));
    }
    return angle;
}

function pp (angle) {
			i=0;
			$(".circle").each(function(){
				tt[i]=tt[i]+72*angle;
				aa=tt[i];
				i++;
				$(this).animate({ now: aa },{
					step: function(now,fx) {$(this).css("-webkit-transform","rotate("+now+"deg) translate(281px)");
											$(this).css("-moz-transform","rotate("+now+"deg) translate(281px)");
											$(this).css("-ms-transform","rotate("+now+"deg) translate(281px)");
											$(this).css("-o-transform","rotate("+now+"deg) translate(281px)");
											$(this).children('img').css("-webkit-transform","rotate("+((-1)*now)+"deg)");
											$(this).children('img').css("-moz-transform","rotate("+((-1)*now)+"deg)");
											$(this).children('img').css("-ms-transform","rotate("+((-1)*now)+"deg)");
											$(this).children('img').css("-o-transform","rotate("+((-1)*now)+"deg)");
						},
					duration: 1500	
					});});
				}