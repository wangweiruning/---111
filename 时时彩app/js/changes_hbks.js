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
       $("#totle").show();
       $("#totles").show()
})
$("#inputs10").click(function(){
       $("#totle").hide();
       $("#totles").hide();
})
                    shows();
                    var timer=setInterval(function(){
                      shows();
                      $("#load").empty()
                    },100000)
   function shows(){//创建数据
         $.ajax({
             type: "post",
             url: "https://www.jindi163.com:8443/JDLot/lot/type/pagelist",
             data: {"table_name":"hbks","PageNum":"1","PageSize":num},
             async:true,
             contentType: "application/json",
             dataType: "json",
//              beforeSend: function(XMLHttpRequest) {
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
                $('#great').empty();  
                 var html_great='<tr class="trss">'+
	            		'<th class="th_4">期号</th>'+
	            		'<th style="color:#E65A59">奖号</th>'+
	            		'<th>1</th>'+
	            		'<th>2</th>'+
	            		'<th>3</th>'+
	            		'<th>4</th>'+
	            		'<th>5</th>'+
	            		'<th>6</th>'+
	            		'<th class="th_4">三同</th>'+
	            		'<th class="th_4">二同</th>'+
	            		'<th class="th_4">不同</th>'+
	            	'</tr>';
	            	var idss="";
                $.each(data,function(i){
                	var qihai=data[i].period;
                		qihai=qihai.substring(8);
                		var gewei=data[i].number;
                		var aa=gewei.substring(0,1);
                		var aa1=gewei.substring(1,2);
                		var aa2=gewei.substring(2,3);
                		var ss="",ss1="",ss2="";
                		var a="",b="",c="",d="",e="",f="";
                		var reg = /([1]){1}/;
                		if (reg.test(gewei)==true) {
                			a=1;
                		} 
                		var reg = /([2]){1}/;
                		if (reg.test(gewei)==true) {
                			b=2;
                		} 
                		var reg = /([3]){1}/;
                		if (reg.test(gewei)==true) {
                			c=3;
                		} 
                		var reg = /([4]){1}/;
                		if (reg.test(gewei)==true) {
                			d=4;
                		} 
                		var reg = /([5]){1}/;
                		if (reg.test(gewei)==true) {
                			e=5;
                		} 
                		var reg = /([6]){1}/;
                		if (reg.test(gewei)==true) {
                			f=6;
                		} 

                		if(aa==aa1||aa==aa2 || aa1==aa2){
                           ss1="二同";
                		}
                		if(aa==aa1&&aa==aa2&&aa1==aa2){
                           ss="三同";
                           ss1="";

                		}
                		
                		if(aa!=aa1&&aa!=aa2&&aa1!=aa2){
                           ss2="不同";
                		}
                		// parseInt(value.)!=parseInt(value.substring(1,2)) && parseInt(value.substring(0,1))!=parseInt(value.substring(2,3))&&parseInt(value.substring(2,3))!=parseInt(value.substring(1,2))){
                 // console.log(ss)
                	 html_great += '<tr>'+
                	 '<td><span>'+qihai+'</span></td>'+
                	 '<td><span style="color:#E65A59">'+data[i].number+'</span></td>'+
                	 '<td><span id="class_0'+i+'">'+a+'</span></td>'+
                	 '<td><span id="class_1'+i+'">'+b+'</span></td>'+
                	 '<td><span id="class_2'+i+'">'+c+'</span></td>'+
                	 '<td><span id="class_3'+i+'">'+d+'</span></td>'+
                	 '<td><span id="class_4'+i+'">'+e+'</span></td>'+
                	 '<td><span id="class_5'+i+'">'+f+'</span></td>'+
                	 '<td><span style="background-color:transparent;color:green;width:2rem" id="class_6'+i+'">'+ss+'</span></td>'+
                	 '<td><span style="background-color:transparent;color:red;width:2rem" id="class_7'+i+'">'+ss1+'</span></td>'+
                	 '<td><span style="background-color:transparent;color:blue;width:2rem" id="class_8'+i+'">'+ss2+'</span></td>'+
                	 '</tr>';
 })

                 $('#great').append(html_great);//将彩票彩种添加到$('#caizhongjiekou')上
var g0="",g1="",g2="",g3="",g4="",g5="";
                   for (var m = 0; m < data.length; m++) {
                     g0+="class_0"+m+",";
                     g1+="class_1"+m+",";
                     g2+="class_2"+m+",";
                     g3+="class_3"+m+",";
                     g4+="class_4"+m+",";
                     g5+="class_5"+m+",";
                   }
                    g0 = g0.substring(0, g0.length - 1);
                   var gos0 = g0.split(",");
                   g1 = g1.substring(0, g1.length - 1);
                   var gos1 = g1.split(",");
                   g2 = g2.substring(0, g2.length - 1);
                   var gos2 = g2.split(",");
                   g3 = g3.substring(0, g3.length - 1);
                   var gos3 = g3.split(",");
                   g4 = g4.substring(0, g4.length - 1);
                   var gos4 = g4.split(",");
                   g5 = g5.substring(0, g5.length - 1);
                   var gos5 = g5.split(",");
                   var adss0=0,adss1=0,adss2=0,adss3=0,adss4=0,adss5=0;
                   var lou0=0,lou1=0,lou2=0,lou3=0,lou4=0,lou5=0;
                   var lia0=0,lia1=0,lia2=0,lia3=0,lia4=0,lia5=0;
                   var ars0=new Array();
                   var ars1=new Array();
                   var ars2=new Array();
                   var ars3=new Array();
                   var ars4=new Array();
                    var ars5=new Array();
            for (var k = gos0.length-1; k >=0 ; k--) {//将匹配的ID放入arrList数组中
                var index=k;
                    if ($("#"+gos0[k]).text()!=""){
                        adss0+=1;
                        lia0=0;
                    }else{
                      lia0++;
                      ars0.push(lia0);
                    }
                    if ($("#"+gos1[k]).text()!=""){
                        adss1+=1;
                      lia1=0;
                    }else{
                      lia1++;
                      ars1.push(lia1);
                    }
                    if ($("#"+gos2[k]).text()!=""){
                        adss2+=1;
                      lia2=0;
                    }else{
                      lia2++;
                      ars2.push(lia2);
                    }
                    if ($("#"+gos3[k]).text()!=""){
                        adss3+=1;
                      lia3=0;
                    }else{
                      lia3++;
                      ars3.push(lia3);
                    }
                    if ($("#"+gos4[k]).text()!=""){
                        adss4+=1;
                      lian4=0;
                    }else{
                      lia4++;
                      ars4.push(lia4);
                    }
                    if ($("#"+gos5[k]).text()!=""){
                        adss5+=1;
                      lia5=0;
                    }else{
                      lia5++;
                      ars5.push(lia5);
                    }

                    if ($("#"+gos0[k]).text()!="" && ($("#"+gos0[k]).text() == $("#"+gos0[k-1]).text())){
                        lou0+=1;
                    }
                    if ($("#"+gos1[k]).text()!="" && ($("#"+gos1[k]).text() == $("#"+gos1[k-1]).text())){
                        lou1+=1;
                    }
                    if ($("#"+gos2[k]).text()!="" && ($("#"+gos2[k]).text() == $("#"+gos2[k-1]).text())){
                        lou2+=1;
                    }
                    if ($("#"+gos3[k]).text()!="" && ($("#"+gos3[k]).text() == $("#"+gos3[k-1]).text())){
                        lou3+=1;
                    }
                    if ($("#"+gos4[k]).text()!="" && ($("#"+gos4[k]).text() == $("#"+gos4[k-1]).text())){
                        lou4+=1;
                    }
                    if ($("#"+gos5[k]).text()!="" && ($("#"+gos5[k]).text() == $("#"+gos5[k-1]).text())){
                        lou5+=1;
                    }
                }
                // console.log(addss0+"_"+addss1+"_"+addss2+"_"+addss3+"_"+addss4+"_"+addss5+"_"+addss6+"_"+addss7+"_"+addss8+"_"+addss9)
              var ma0=Math.max.apply(null, ars0);
              var ma1=Math.max.apply(null, ars1);
              var ma2=Math.max.apply(null, ars2);
              var ma3=Math.max.apply(null, ars3);
              var ma4=Math.max.apply(null, ars4);
              var ma5=Math.max.apply(null, ars5);

                     $("#totle").empty();
                     var shuju_zong='<li style="color: #579ee8;"><div class="stops"><span class="times">出现次数</span><span>'
                     +adss0+'</span><span>'+adss1+'</span><span>'
                     +adss2+'</span><span>'+adss3+'</span><span>'
                     +adss4+'</span><span>'
                     +adss5+'</span></div></li>'+
                     '<li style="color: #d88927;"><div class="stops"><span class="times">平均遗漏</span><span>'
                     +parseInt((data.length-adss0)/adss0)+'</span><span>'+parseInt((data.length-adss1)/adss1)+'</span><span>'+parseInt((data.length-adss2)/adss2)+'</span><span>'
                     +parseInt((data.length-adss3)/adss3)+'</span><span>'+parseInt((data.length-adss4)/adss4)+'</span><span>'+parseInt((data.length-adss5)/adss5)+'</span></div></li>'+
                     '<li style="color: #6e8d57;"><div class="stops"><span class="times">最大遗漏</span><span>'
                     +ma0+'</span><span>'+ma1+'</span><span>'+ma2+'</span><span>'
                     +ma3+'</span><span>'+ma4+'</span><span>'+ma5+'</span></div></li>'+
                     '<li style="color: #ea7de1;"><div class="stops"><span class="times">最大连出</span><span>'
                     +lou0+'</span><span>'+lou1+'</span><span>'+lou2+'</span><span>'
                     +lou3+'</span><span>'+lou4+'</span><span>'+lou5+'</span></div></li>';
                $("#totle").html(shuju_zong);


                 
               	for (var i = 0; i < 9; i++) {  
               	 for (var j = 0; j <data.length; j++) {
                  
                  		idss+="class_"+i+j+",";
                	    }
                	 }
                	 idss = idss.substring(0, idss.length - 1);
                	 var list = idss.split(",");
                	 console.log(list)
                	  var dss=0;
                    var adds=0;
                for (var k = list.length-1; k >=0 ; k--) {//将匹配的ID放入arrList数组中
                var index=k;
                    if ($("#"+list[k]).text()!="") {
 
                        dss=0;
                        if ($("#"+list[k]).text()==$("#"+list[k-1]).text()) {
                          adds++;
                        } else {
                          adds=0;
                        }
                        var thisval=$("#"+list[k]).text();
                        var parents=$("#"+list[k]).parent().siblings().eq(1).text();
                        var list1=parents.substring(0,1);
                		var list2=parents.substring(1,2);
                		var list3=parents.substring(2,3);
                       if (list1==thisval && thisval==list3 && list2==thisval) {//三同
                       	$("#"+list[k]).addClass("col2");//给相应的span加上colors样式
                        
                       } else if((list1 == thisval && thisval == list3 && list2 != thisval) || (list1 == thisval && thisval != list3 && list2 == thisval) || (list1 != thisval && thisval == list3 && list2 == thisval)){//不同
                       	$("#"+list[k]).addClass("col1");
                       }else{//二同
                             $("#"+list[k]).addClass("col");
                       	
                       }
                        

                    } 
                    else{
                        dss++;
                         // $(".class_"+[k]).show();
                           $("#"+list[k]).text(dss)
                        
                        
                    }
                }
                     $('#zstable').empty(); 

           var aas = "";
            head = "<tr><th class='t'>期号</th><th class='t'>奖号</th><th class='t'>和值</th><th class='t'>3/18</th><th class='t'>4/17</th><th class='t'>5/16</th><th class='t'>6/15</th><th class='t'>7/14</th><th class='t'>8/13</th><th class='t'>9/12</th><th class='t'>10/11</th></tr>";
            $.each(data,function(i){
                

                    var aas = data[i].number;
                    aas=parseInt(aas.substring(0,1))+parseInt(aas.substring(1,2))+parseInt(aas.substring(2,3));
                    var  time_da=data[i].period;
                    time_da=time_da.substring(8);


                head+= '<tr>'+
                        '<td class="th_data1'+i+'">'+time_da+'</td>'+
                        '<td class="th_data1">'+data[i].number+'</td>'+
                        '<td class="th_data2" style="color:red">'+aas+'</td>'+
                        '<td class="th_data3"><span class="class_'+i+'"></span><span id="class_0'+"_"+i+'">'+((aas=="3" || aas=="18")? aas : "")+'</span></td>'+ 
                        '<td class="th_data3"><span id="class_1'+"_"+i+'">'+((aas=="4" || aas=="17")? aas : "")+'</span></td>'+ 
                        '<td class="th_data3"><span id="class_2'+"_"+i+'">'+((aas=="5" || aas=="16")? aas : "")+'</span></td>'+ 
                        '<td class="th_data3"><span id="class_3'+"_"+i+'">'+((aas=="6" || aas=="15")? aas : "")+'</span></td>'+ 
                        '<td class="th_data3"><span id="class_4'+"_"+i+'">'+((aas=="7" || aas=="14")? aas : "")+'</span></td>'+ 
                        '<td class="th_data3"><span id="class_5'+"_"+i+'">'+((aas=="8" || aas=="13")? aas : "")+'</span></td>'+ 
                        '<td class="th_data3"><span id="class_6'+"_"+i+'">'+((aas=="9" || aas=="12")? aas : "")+'</span></td>'+ 
                        '<td class="th_data3"><span id="class_7'+"_"+i+'">'+((aas=="10"|| aas=="11")? aas : "")+'</span></td>'+ 
                           //回顾信息判断，如果匹配三期中的数据就返回“对”，否则“error”
                                             '</tr>'
                // console.log(aas)
           })
            $("#zstable").html(head);

               var ids = "";
              
                for (var i = 0; i < data.length; i++) {   
                   for (var j = 0; j< 8; j++) { 
                ids+= "class_" + j+"_"+ i + ",";//获取所有span的id值
                 }

            }
                   ids = ids.substring(0, ids.length - 1);
                   // console.log(ids) 
                   
            CreateLine(ids, 10, "#754", "canvasdiv", "red"); 
             function CreateLine(ids, w, c, div, bg) {//id的数组     width   线条颜色      放canvas的容器           当前ID对应的元素的背景颜色
                var arrList = new Array();//放
                var list = ids.split(",");
                // console.log(list)
                var dss=0;
                for (var k = list.length-1; k >=0 ; k--) {//将匹配的ID放入arrList数组中
                var index=k;
                    if ($("#"+list[k]).text()!="") {
                  $(".class_"+[k]).hide()
                        arrList.push(list[index]);
                        dss=0;
                        $("#"+list[k]).addClass("colors");//给相应的span加上colors样式
                    } 
                    else{
                        dss++;
                         $(".class_"+[k]).show();
                           $("#"+list[k]).text(dss)
                        
                        
                    }
                }
                
            // console.log(arrList)
            for (var j = arrList.length - 1; j > 0; j--) {
                var tid = $("#" + arrList[j]);
                var fid = $("#" + arrList[j - 1]);
                var f_width = fid.outerWidth();//上一个的外宽度
                var f_height = fid.outerHeight();//上一个的外高度
                var f_offset = fid.offset();
                
                var f_top = f_offset.top;
                // console.log(f_top)
                var f_left = f_offset.left;
                var t_offset = tid.offset();
                var t_top = t_offset.top;
                var t_left = t_offset.left;
                var cvs_left = Math.min(f_left, t_left);
                var cvs_top = Math.min(f_top, t_top);
                tid.css("background", bg).css("color", "#fff");
                fid.css("background", bg).css("color", "#fff");
                var canvas = document.createElement("canvas");
                canvas.width = Math.abs(f_left - t_left) < w ? w : Math.abs(f_left - t_left);
                canvas.height = Math.abs(f_top - t_top);
                canvas.style.top = cvs_top + parseInt(f_height / 2) + "px";
                canvas.style.left = cvs_left + parseInt(f_width / 2) + "px";
                canvas.style.position = "absolute";
                var cxt = canvas.getContext("2d");
                cxt.save();
                cxt.strokeStyle = c;
                cxt.lineWidth = 2;
                cxt.lineJoin = "round";
                cxt.beginPath();
                cxt.moveTo(f_left - cvs_left, f_top - cvs_top);
                cxt.lineTo(t_left - cvs_left, t_top - cvs_top);
                cxt.closePath();
                cxt.stroke();
                cxt.restore();
                $("#"+div).append(canvas);
            }
        } 
          

     },
      // complete: function(XMLHttpRequest, textStatus) {
      //   if(!window.name){
      //   $("#top_load").remove();
      // }else{
      //   return
      //  }
      //  }

  })
}
})