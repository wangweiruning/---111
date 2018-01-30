$(function(){

$("#caizhong_mian").click(function(){
	$("#caizhong_shu").toggle();$(".liebiao").hide();
	$(".caizhong .sanjiao").toggle();
	$(".caizhong .daosanjiao").toggle();
    return false;
})
$(".mian_body").click(function(){
	$(".liebiao").toggle();$("#caizhong_shu").hide();
	$(".mian_body .sanjiao").toggle();
	$(".mian_body .daosanjiao").toggle();
	return false;
}) 

// $("body").click(function(){
//                     $("#caizhongshu").hide();
//                     $(".liebiao").hide();
//                     return false;
//                 })
$("#inputs9").click(function(){
  $(".data_fenxi").show();
})
 $("#inputs10").click(function(){
  $(".data_fenxi").hide();
})

$(".ones").on('click',function(){
  $(this).addClass("colors_red").siblings().removeClass("colors_red");
})

function GetRequest() {
      var url = location.search; //获取url中"?"符后的字串
      var theRequest = new Object();
      if (url.indexOf("?") != -1) {
      var str = url.substr(1);
      strs = str.split("&");
      for(var i = 0; i < strs.length; i ++) {
      theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
      }
      }
      return theRequest;
      }
      var Request = new Object();
      Request = GetRequest();
      if(Request["uid"]!=undefined && Request["uid"]!=''){
      var uid = Request["uid"];
}else{
  uid=""
}


$(".k_massages").on('click',function(){
	//获取uid方法
		if (uid!="" && uid!=undefined) {
			 console.log(11)
		} else{
			alert("请登录后再查看")
	      function alert(e){
        $("body").append('<div id="hides_li"></div><div id="msg"><div id="msg_cont">'+e+'</div><div class="msg_close" id="msg_clear">确定</div></div>');
        $("body").css({"overflow":"hidden"})
        $(".msg_close").click(function (){
            $("#hides_li").remove();
            $("#msg").remove();
             $("body").css({"overflow":"auto"})
        });
    }
			return false;
			}
		})	

	})
