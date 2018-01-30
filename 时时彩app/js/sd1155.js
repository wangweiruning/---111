$(function(){
	   $("#inputs5").click(function(){
              $(".canvasdiv").show()
      })
      $("#inputs6").click(function(){
              $(".canvasdiv").hide()
      })
        var num=50;//num 显示数据长度
    $("#inputs1").click(function(){
      $(".canvasdiv canvas").remove();
      num=30;
      shows()
      $(".canvasdiv").append($("canvas"))
})
   $("#inputs2").click(function(){
     $(".canvasdiv canvas").remove();
     num=50;
    shows()
    $(".canvasdiv").append($("canvas"))
})
    $("#inputs3").click(function(){
       $(".canvasdiv canvas").remove();
       num=100;
       shows()
       $(".canvasdiv").append($("canvas"))
})
     $("#inputs4").click(function(){
       $(".canvasdiv canvas").remove();
       num=200;
       shows()
       $(".canvasdiv").append($("canvas"))
})
     $("#inputs9").click(function(){
       $("#totles").show();
       $("#totles1").show()
})
$("#inputs10").click(function(){
       $("#totles").hide();
       $("#totles1").hide();
})
                    shows()
                    var timer=setInterval(function(){
                      shows();
                      $("#load").empty()
                    },100000)
   function shows(){//创建数据
         $.ajax({
             type: "post",
             url: "https://www.jindi163.com:8443/JDLot/lot/type/pagelist",
             data: {"table_name":"sd115","PageNum":"1","PageSize":num},
             async:true,
             contentType: "application/json",
             dataType: "json",
//               beforeSend: function(XMLHttpRequest) {
//               if(!window.name){
//                 $("body").append('<div id="top_load"  style="position:fixed;z-index:999; top:0;left:0;right:0;bottom:0;margin:auto;width:100%;height:100%;background:#fff">'+
// '<div  id="load" style="z-index:1; position:fixed; top:0;left:0;right:0;bottom:0;margin:auto;width:4rem;height:4rem;">'+
// '<img alt="数据加载中..." src="img/massage/4c3ba25d7384dee10d565e7f20c89400_t014be238bb089e1e42.gif" style="width:100%"/></div></div>'); 
//         // alert("第一次开这个窗口！");       
//                    }else{
//                    return
//                   }

//             },
             success: function(data){
                     data=data.datas;
                
                console.log(data)
                $('#zstable').empty();  
                 var html='<tr class="trss">'+
	            		'<th class="th_wt">期号</th>'+
                        '<th class="th_wt">和值</th>'+
	            		'<th>1</th>'+
	            		'<th>2</th>'+
	            		'<th>3</th>'+
	            		'<th>4</th>'+
	            		'<th>5</th>'+
	            		'<th>6</th>'+
                        '<th>7</th>'+
                        '<th>8</th>'+
                        '<th>9</th>'+
                        '<th>10</th>'+
                        '<th>11</th>'+
	            	'</tr>';
	            	var idss="";
                $.each(data,function(i){
                	var qihai=data[i].period;
                		qihai=qihai.substring(8);
                		var gewei=data[i].number.split(",").slice(2);
                        // console.log(gewei.length)
                		var aa=gewei.slice(0,1);
                		var aa1=gewei.slice(1,2);
                    var aa2=gewei.slice(2,3);
                        var sums=parseInt(Math.floor(aa))+parseInt(Math.floor(aa1))+parseInt(Math.floor(aa2));
                		var ss="",ss1="";
                		var a="",b="",c="",d="",e="",f="",g="",h="",m="",n="",p="";

                        for (var k = 0; k < gewei.length; k++) {
                            if(gewei[k]==1){
                               a=1 
                            }
                       
                            if(gewei[k]==2){
                               b=2 
                            }
                            if(gewei[k]==3){
                               c=3 
                            }
                            if(gewei[k]==4){
                               d=4 
                            }
                            if(gewei[k]==5){
                               e=5 
                            }
                            if(gewei[k]==6){
                               f=6 
                            }
                            if(gewei[k]==7){
                               g=7 
                            }
                            if(gewei[k]==8){
                               h=8 
                            }
                            if(gewei[k]==9){
                               m=9
                            }
                            if(gewei[k]==10){
                               n=10
                            }
                             if(gewei[k]==11){
                               p=11
                            }
                        }

                	 html += '<tr>'+
                	 '<td style="color:#000;"><span>'+qihai+'</span></td>'+
                	 '<td><span style="color:#E65A59">'+sums+'</span></td>'+
                     '<td><span id="cla_0'+i+'">'+a+'</span></td>'+
                	 '<td><span id="cla_1'+i+'">'+b+'</span></td>'+
                	 '<td><span id="cla_2'+i+'">'+c+'</span></td>'+
                	 '<td><span id="cla_3'+i+'">'+d+'</span></td>'+
                	 '<td><span id="cla_4'+i+'">'+e+'</span></td>'+
                	 '<td><span id="cla_5'+i+'">'+f+'</span></td>'+
                     '<td><span id="cla_6'+i+'">'+g+'</span></td>'+
                     '<td><span id="cla_7'+i+'">'+h+'</span></td>'+
                     '<td><span id="cla_8'+i+'">'+m+'</span></td>'+
                     '<td><span id="cla_9'+i+'">'+n+'</span></td>'+
                     '<td><span id="cla_10'+i+'">'+p+'</span></td>'+
                	 '</tr>';

 })
    $('#zstable').append(html);//将彩票彩种添加到$('#caizhongjiekou')上
    $("#totles1").empty();
                     var shuju='<li style="color: #579ee8;"><span class="times">出现次数</span><span>'+parseInt(Math.random(1)*10+10)+'</span><span>'+parseInt(Math.random(1)*10+10)+'</span><span>'+parseInt(Math.random(1)*10+10)+'</span><span>'+parseInt(Math.random(1)*10+10)+'</span><span>'+parseInt(Math.random(1)*10+10)+'</span><span>'+parseInt(Math.random(1)*10+10)+'</span><span>'+parseInt(Math.random(1)*10+10)+'</span><span>'+parseInt(Math.random(1)*10+10)+'</span><span>'+parseInt(Math.random(1)*10+10)+'</span><span>'+parseInt(Math.random(1)*10+10)+'</span><span>'+parseInt(Math.random(1)*10+10)+'</span></li>'+
                     '<li style="color: #d88927;"><span class="times">平均遗漏</span><span>'+parseInt(Math.random(1)*10+10)+'</span><span>'+parseInt(Math.random(1)*10+10)+'</span><span>'+parseInt(Math.random(1)*10+10)+'</span><span>'+parseInt(Math.random(1)*10+10)+'</span><span>'+parseInt(Math.random(1)*10+10)+'</span><span>'+parseInt(Math.random(1)*10+10)+'</span><span>'+parseInt(Math.random(1)*10+10)+'</span><span>'+parseInt(Math.random(1)*10+10)+'</span><span>'+parseInt(Math.random(1)*10+10)+'</span><span>'+parseInt(Math.random(1)*10+10)+'</span><span>'+parseInt(Math.random(1)*10+10)+'</span></li>'+
                     '<li style="color: #6e8d57;"><span class="times">最大遗漏</span><span>'+parseInt(Math.random(1)*10+10)+'</span><span>'+parseInt(Math.random(1)*10+10)+'</span><span>'+parseInt(Math.random(1)*10+10)+'</span><span>'+parseInt(Math.random(1)*10+10)+'</span><span>'+parseInt(Math.random(1)*10+10)+'</span><span>'+parseInt(Math.random(1)*10+10)+'</span><span>'+parseInt(Math.random(1)*10+10)+'</span><span>'+parseInt(Math.random(1)*10+10)+'</span><span>'+parseInt(Math.random(1)*10+10)+'</span><span>'+parseInt(Math.random(1)*10+10)+'</span><span>'+parseInt(Math.random(1)*10+10)+'</span></li>'+
                     '<li style="color: #ea7de1;"><span class="times">最大连出</span><span>'+parseInt(Math.random(1)*10)+'</span><span>'+parseInt(Math.random(1)*10+10)+'</span><span>'+parseInt(Math.random(1)*10)+'</span><span>'+parseInt(Math.random(1)*10)+'</span><span>'+parseInt(Math.random(1)*10)+'</span><span>'+parseInt(Math.random(1)*10)+'</span><span>'+parseInt(Math.random(1)*10)+'</span><span>'+parseInt(Math.random(1)*10)+'</span><span>'+parseInt(Math.random(1)*10)+'</span><span>'+parseInt(Math.random(1)*10)+'</span><span>'+parseInt(Math.random(1)*10)+'</span></li>';
                $("#totles1").html(shuju);

               	for (var i = 0; i < 11; i++) {  
               	 for (var j = 0; j <data.length; j++) {
                  
                  		idss+="cla_"+i+j+",";
                	    }
                	 }
                	 idss = idss.substring(0, idss.length - 1);
                	 var lists = idss.split(",");
                	   var dsss=0;
                        var addss=0;
                for (var k = lists.length-1; k >=0 ; k--) {//将匹配的ID放入arrList数组中
                var index=k;
                    if ($("#"+lists[k]).text()!="") {
 
                        dsss=0;addss+=1;
                        $("#"+lists[k]).addClass("col");//给相应的span加上colors样式
                    } 
                    else{
                        dsss++;addss=0;
                         // $(".class_"+[k]).show();
                           $("#"+lists[k]).text(dsss)
                        
                        
                    }
                }
     }
     //  complete: function(XMLHttpRequest, textStatus) {
     //    if(!window.name){
     //    $("#top_load").remove();
     //  }else{
     //    return
     //   }
     //   }

  })
}
})