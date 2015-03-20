
$(document).ready(function(){

	//前端工程师介绍显示隐藏
	// $(".mask").css("width",$(document).width());
	$(".mask").css("height",$(document).height());
	
	$("#fd-desc").click(function(){
		$(".mask").fadeIn("400");
		$(".fd-desc").css("display","block");
		return false;
	});
	$(".close-btn").click(function(){
		$(".mask").fadeOut('400');
		$(".fd-desc").css("display","none");
	});

	$(document).click(function(){
		$(".mask").fadeOut('400');
		$(".fd-desc").css("display","none");
	});
	$(".fd-desc").click(function(){
		return false;
	});

	//点击查看更多 
	jQuery.fn.clickView = function() {
		$(this).bind("mouseover",function(event) {
			$(".click-view").css("display","block");
			$(".click-view").css("left",$(this).offset().left-18);
			$(".click-view").css("top",$(this).offset().top-36);
		});
		$(this).bind("mouseout",function(event) {
			$(".click-view").css("display","none");
		});
	};

	$(".senior-pic").each($().clickView);
	$(".middle-pic").each($().clickView);
	$(".primary-pic").each($().clickView);


	//技能列表
	var tipObj = new Array();
	tipObj.push($(".senior-pic"));
	tipObj.push($(".middle-pic"));
	tipObj.push($(".primary-pic"));
	
	for(var i = 0;i<tipObj.length;i++){
		for(var j = 0;j<tipObj[i].length;j++){
			tipObj[i][j].i = i;
			tipObj[i][j].j = j;
			
			tipObj[i][j].onclick = function(event){
				if(window.event){
					window.event.cancelBubble = true;
				}else{
					event.stopPropagation();
				}
				var _this = this;
				var idName = 'qtip-'+_this.i+'-'+_this.j;

				var thisObj = document.getElementById(idName); 
				if(thisObj == null){
					var text='<h3>必备技能</h3>';
					for(var k = 0;k<sList[this.i][this.j].req.length;k++){
						text +="<p>"+sList[this.i][this.j].req[k]+"</p>";
					}
					if(sList[this.i][this.j].ass != undefined){
						text +='<h3 class="assi">辅助技能</h3>';
						for(var l = 0;l<sList[this.i][this.j].ass.length;l++){
							text +="<p>"+sList[this.i][this.j].ass[l]+"</p>";
						}
					}

					var html = '<div class="qtip-arrow"></div><div class="qtip-content"><div class="qtip-wrap">'+text+'</div></div><span class="c-btn">x</span>';
					
					var oDiv = document.createElement('div');
					oDiv.id = 'qtip-'+this.i+'-'+this.j;
					oDiv.className = 'qtips';
					oDiv.innerHTML = html;
					document.body.appendChild(oDiv);
					
					var oDivWidth = parseInt(oDiv.offsetWidth);
					var oDivHeight = parseInt(oDiv.offsetHeight);
					oDiv.style.left=_this.offsetParent.offsetLeft+_this.offsetLeft - oDivWidth-10+"px";
					oDiv.style.top=_this.offsetParent.offsetTop+_this.offsetTop - oDivHeight/2+25+"px";
					
					$(".qtips").each(function(){
						$(".qtips").css("display","none");
						$(".qtips").click(function(){
							return false;
						});
					});
					oDiv.style.display = "block";
					$(".c-btn").each(function(){
						$(this).bind("click",function(){
							$(this).parent().css("display","none");
							return false;
						});
					});
					$(document).click(function(){
						$(".qtips").each(function(){
							$(".qtips").css("display","none");
						});
					});
				} else{
					$(".qtips").each(function(){
						$(".qtips").css("display","none");
						$(".qtips").click(function(){
							return false;
						});
					});
					thisObj.style.display="block";
				}
			};			
		}
	}
});