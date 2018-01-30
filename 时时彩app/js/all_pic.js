$(function(){


	show_datas();
  setInterval(show_datas,30000); 
function show_datas(){
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
Request = GetRequest()
if(Request["uid"]!=undefined){
var uid = Request["uid"];
}else{
  uid=""
}

window.scrollTo(0,0);
$.ajax({
             type: "post",
             url: "https://www.jindi163.com:8443/JDLot/lottype/pagelist",
             data: {"uid":uid,"PageSize":"100"},
             async:true,
             dataType: "json",
             contentType:"application/json",
             success: function(data){
                   data=data.datas;
console.log(data)
					$("#hides").hide();
                   $('#caizhongjiekou').empty();  
                   var html="";
                    // if (uid!="") {
                    //   return uid
                    // }else{
                    //   uid="";
                    // }
                    var fuds="";
                    var dat=new Array();
                    var nams=new Array();
                   $.each(data,function(i){
                      var good_name=data[i].lottery_name;
//                    console.log(good_name)
                      var good=good_name.substring(5);
                          good=good+"_trend.html?uid=";//链接
                        dat.push(good)

                       var sss= data[i].lottery_full_name;
                       nams.push(sss);
                    
            html+='<li><a href="'+good+uid+'">'+data[i].lottery_full_name+'</a></li>'
                       })
        
                      $("#dsf").text(nams[0])
                   $('#caizhongjiekou').append(html);
                   
                 },
                 error:function(XMLHttpRequest,textStatus,error){
                     var ishanves = '<div id="hides" style="position:relative;top:0;right:0;left:0;bottom:0;margin:auto;z-index:333;width:100%;height:100%">'+
                     				+'<img src="../img/common/nonetwork.png"/></div>';
            $("body").append(ishanves)
                 },

       })
}
   
})