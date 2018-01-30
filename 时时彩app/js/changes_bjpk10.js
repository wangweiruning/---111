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
                    shows();
                    var timer=setInterval(function(){
                      shows();
                      $("#load").empty()
                    },100000)
   function shows(){//创建数据
         $.ajax({
             type: "post",
             url: "https://www.jindi163.com:8443/JDLot/lot/type/pagelist",
             data: {"table_name":"pk10","PageNum":"1","PageSize":num},
             async:true,
             contentType: "application/json",
             dataType: "json",
             
             success: function(data){
                     data=data.datas;
                
                console.log(data)
                $('#great').empty();  
                 var html_great='<tr class="trss">'+
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
                '</tr>';
                var idss="";
                $.each(data,function(i){
                  var qihai=data[i].period;
                    qihai=qihai.substring(3);
                    var gewei=data[i].number.split(",").slice(0,3);
                        // console.log(gewei.length)
                    var aa=gewei.slice(0,1);
                    var aa1=gewei.slice(1,2);
                    var aa2=gewei.slice(2,3);
                        var sums=parseInt(Math.floor(aa))+parseInt(Math.floor(aa1))+parseInt(Math.floor(aa2));
                    var ss="",ss1="",ss2="";
                    var a="",b="",c="",d="",e="",f="",g="",h="",m="",n="";

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
                        }

                   html_great += '<tr>'+
                   '<td style="color:#000;"><span>'+qihai+'</span></td>'+
                   '<td><span style="color:#E65A59">'+sums+'</span></td>'+
                     '<td><span id="class_0'+i+'">'+a+'</span></td>'+
                   '<td><span id="class_1'+i+'">'+b+'</span></td>'+
                   '<td><span id="class_2'+i+'">'+c+'</span></td>'+
                   '<td><span id="class_3'+i+'">'+d+'</span></td>'+
                   '<td><span id="class_4'+i+'">'+e+'</span></td>'+
                   '<td><span id="class_5'+i+'">'+f+'</span></td>'+
                     '<td><span id="class_6'+i+'">'+g+'</span></td>'+
                     '<td><span id="class_7'+i+'">'+h+'</span></td>'+
                     '<td><span id="class_8'+i+'">'+m+'</span></td>'+
                     '<td><span id="class_9'+i+'">'+n+'</span></td>'+
                   '</tr>';

 })
    $('#great').append(html_great);//将彩票彩种添加到$('#caizhongjiekou')上

     for (var i = 0; i < 10; i++) {  
                 for (var j = 0; j <data.length; j++) {
                      idss+="class_"+i+j+",";
                      }
                   }

                   var g0="",g1="",g2="",g3="",g4="",g5="",g6="",g7="",g8="",g9="";
                   for (var m = 0; m < data.length; m++) {
                     g0+="class_0"+m+",";
                     g1+="class_1"+m+",";
                     g2+="class_2"+m+",";
                     g3+="class_3"+m+",";
                     g4+="class_4"+m+",";
                     g5+="class_5"+m+",";
                     g6+="class_6"+m+",";
                     g7+="class_7"+m+",";
                     g8+="class_8"+m+",";
                     g9+="class_9"+m+",";
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
                   g6 = g6.substring(0, g6.length - 1);
                   var gos6 = g6.split(",");
                   g7 = g7.substring(0, g7.length - 1);
                   var gos7 = g7.split(",");
                   g8 = g8.substring(0, g8.length - 1);
                   var gos8 = g8.split(",");
                   g9 = g9.substring(0, g9.length - 1);
                   var gos9 = g9.split(",");
                   var adss0=0,adss1=0,adss2=0,adss3=0,adss4=0,adss5=0,adss6=0,adss7=0,adss8=0,adss9=0;
                   var lou0=0,lou1=0,lou2=0,lou3=0,lou4=0,lou5=0,lou6=0,lou7=0,lou8=0,lou9=0;
                   var lia0=0,lia1=0,lia2=0,lia3=0,lia4=0,lia5=0,lia6=0,lia7=0,lia8=0,lia9=0;
                   var ars0=new Array();var ars1=new Array();var ars2=new Array();var ars3=new Array();var ars4=new Array();
                    var ars5=new Array();var ars6=new Array();var ars7=new Array();var ars8=new Array();var ars9=new Array();
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
                    if ($("#"+gos6[k]).text()!=""){
                        adss6+=1;
                      lia6=0;
                    }else{
                      lia6++;
                      ars6.push(lia6);
                    }
                    if ($("#"+gos7[k]).text()!=""){
                        adss7+=1;
                      lia7=0;
                    }else{
                      lia7++;
                      ars7.push(lia7);
                    }
                    if ($("#"+gos8[k]).text()!=""){
                        adss8+=1;
                      lia8=0;
                    }else{
                      lia8++;
                      ars8.push(lia8);
                    }
                    if ($("#"+gos9[k]).text()!=""){
                       adss9+=1;
                      lia9=0;
                    }else{
                      lia9++;
                      ars9.push(lia9);
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
                    if ($("#"+gos6[k]).text()!="" && ($("#"+gos6[k]).text() == $("#"+gos6[k-1]).text())){
                        lou6+=1;
                    }
                    if ($("#"+gos7[k]).text()!="" && ($("#"+gos7[k]).text() == $("#"+gos7[k-1]).text())){
                        lou7+=1;
                    }
                    if ($("#"+gos8[k]).text()!="" && ($("#"+gos8[k]).text() == $("#"+gos8[k-1]).text())){
                        lou8+=1;
                    }
                    if ($("#"+gos9[k]).text()!="" && ($("#"+gos9[k]).text() == $("#"+gos9[k-1]).text())){
                        lou9+=1;
                    }
                }
                // console.log(addss0+"_"+addss1+"_"+addss2+"_"+addss3+"_"+addss4+"_"+addss5+"_"+addss6+"_"+addss7+"_"+addss8+"_"+addss9)
              var ma0=Math.max.apply(null, ars0);
              var ma1=Math.max.apply(null, ars1);
              var ma2=Math.max.apply(null, ars2);
              var ma3=Math.max.apply(null, ars3);
              var ma4=Math.max.apply(null, ars4);
              var ma5=Math.max.apply(null, ars5);
              var ma6=Math.max.apply(null, ars6);
              var ma7=Math.max.apply(null, ars7);
              var ma8=Math.max.apply(null, ars8);
              var ma9=Math.max.apply(null, ars9);
    $("#totles").empty();
                     var shuju_zong='<li style="color: #579ee8;"><span class="times">出现次数</span><span>'
                     +adss0+'</span><span>'+adss1+'</span><span>'
                     +adss2+'</span><span>'+adss3+'</span><span>'
                     +adss4+'</span><span>'+adss5+'</span><span>'
                     +adss6+'</span><span>'+adss7+'</span><span>'
                     +adss8+'</span><span>'+adss9+'</span></li>'+
                     '<li style="color: #d88927;"><span class="times">平均遗漏</span><span>'
                     +parseInt((data.length-adss0)/adss0)+'</span><span>'
                     +parseInt((data.length-adss1)/adss1)+'</span><span>'
                     +parseInt((data.length-adss2)/adss2)+'</span><span>'
                     +parseInt((data.length-adss3)/adss3)+'</span><span>'
                     +parseInt((data.length-adss4)/adss4)+'</span><span>'
                     +parseInt((data.length-adss5)/adss5)+'</span><span>'
                     +parseInt((data.length-adss6)/adss6)+'</span><span>'
                     +parseInt((data.length-adss7)/adss7)+'</span><span>'
                     +parseInt((data.length-adss8)/adss8)+'</span><span>'
                     +parseInt((data.length-adss9)/adss9)+'</span></li>'+
                     '<li style="color: #6e8d57;"><span class="times">最大遗漏</span><span>'
                     +ma0+'</span><span>'
                     +ma1+'</span><span>'
                     +ma2+'</span><span>'
                     +ma3+'</span><span>'
                     +ma4+'</span><span>'
                     +ma5+'</span><span>'
                     +ma6+'</span><span>'
                     +ma7+'</span><span>'
                     +ma8+'</span><span>'
                     +ma9+'</span></li>'+
                     '<li style="color: #ea7de1;"><span class="times">最大连出</span><span>'
                     +lou0+'</span><span>'
                     +lou1+'</span><span>'
                     +lou2+'</span><span>'
                     +lou3+'</span><span>'
                     +lou4+'</span><span>'
                     +lou5+'</span><span>'
                     +lou6+'</span><span>'
                     +lou7+'</span><span>'
                     +lou8+'</span><span>'
                     +lou9+'</span></li>';

               $("#totles").html(shuju_zong);
var ids="";
                for (var i = 0; i < 11; i++) {  
                 for (var j = 0; j <data.length; j++) {
                  
                      ids+="class_"+i+j+",";
                      }
                   }
                   ids = ids.substring(0, ids.length - 1);
                   var list = ids.split(",");
                     var dss=0;
                        var adds=0;
                for (var k = list.length-1; k >=0 ; k--) {//将匹配的ID放入arrList数组中
                var index=k;
                    if ($("#"+list[k]).text()!="") {
 
                        dss=0;adds+=1;
                        $("#"+list[k]).addClass("col");//给相应的span加上colors样式
                    } 
                    else{
                        dss++;adds=0;
                         // $(".class_"+[k]).show();
                           $("#"+list[k]).text(dss)
                        
                        
                    }
                }
     }

  })
}
})