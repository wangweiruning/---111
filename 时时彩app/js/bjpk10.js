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
                      console.log(1)
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
                '</tr>';
                var idss="";
                $.each(data,function(i){
                  var qihai=data[i].period;
                    qihai=qihai.substring(3);
                    var gewei=data[i].number.split(",").slice(0,2);
                        // console.log(gewei.length)
                    var aa=gewei.slice(0,1);
                    var aa1=gewei.slice(1,2);
                        var sums=parseInt(Math.floor(aa))+parseInt(Math.floor(aa1));
                    var ss="",ss1="";
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
                   '</tr>';

 })
    $('#zstable').append(html);//将彩票彩种添加到$('#caizhongjiekou')上
  

                for (var i = 0; i < 10; i++) {  
                 for (var j = 0; j <data.length; j++) {
                      idss+="cla_"+i+j+",";
                      }
                   }

                   var go0="",go1="",go2="",go3="",go4="",go5="",go6="",go7="",go8="",go9="";
                   for (var j = 0; j < data.length; j++) {
                     go0+="cla_0"+j+",";
                     go1+="cla_1"+j+",";
                     go2+="cla_2"+j+",";
                     go3+="cla_3"+j+",";
                     go4+="cla_4"+j+",";
                     go5+="cla_5"+j+",";
                     go6+="cla_6"+j+",";
                     go7+="cla_7"+j+",";
                     go8+="cla_8"+j+",";
                     go9+="cla_9"+j+",";
                   }
                    go0 = go0.substring(0, go0.length - 1);
                   var goss0 = go0.split(",");
                   go1 = go1.substring(0, go1.length - 1);
                   var goss1 = go1.split(",");
                   go2 = go2.substring(0, go2.length - 1);
                   var goss2 = go2.split(",");
                   go3 = go3.substring(0, go3.length - 1);
                   var goss3 = go3.split(",");
                   go4 = go4.substring(0, go4.length - 1);
                   var goss4 = go4.split(",");
                   go5 = go5.substring(0, go5.length - 1);
                   var goss5 = go5.split(",");
                   go6 = go6.substring(0, go6.length - 1);
                   var goss6 = go6.split(",");
                   go7 = go7.substring(0, go7.length - 1);
                   var goss7 = go7.split(",");
                   go8 = go8.substring(0, go8.length - 1);
                   var goss8 = go8.split(",");
                   go9 = go9.substring(0, go9.length - 1);
                   var goss9 = go9.split(",");
                   var addss0=0,addss1=0,addss2=0,addss3=0,addss4=0,addss5=0,addss6=0,addss7=0,addss8=0,addss9=0;
                   var yilou0=0,yilou1=0,yilou2=0,yilou3=0,yilou4=0,yilou5=0,yilou6=0,yilou7=0,yilou8=0,yilou9=0;
                   var lian0=0,lian1=0,lian2=0,lian3=0,lian4=0,lian5=0,lian6=0,lian7=0,lian8=0,lian9=0;
                   var arrs0=new Array();var arrs1=new Array();var arrs2=new Array();var arrs3=new Array();var arrs4=new Array();
                    var arrs5=new Array();var arrs6=new Array();var arrs7=new Array();var arrs8=new Array();var arrs9=new Array();
            for (var k = goss0.length-1; k >=0 ; k--) {//将匹配的ID放入arrList数组中
                var index=k;
                    if ($("#"+goss0[k]).text()!=""){
                        addss0+=1;
                        lian0=0;
                    }else{
                      lian0++;
                      arrs0.push(lian0);
                    }
                    if ($("#"+goss1[k]).text()!=""){
                        addss1+=1;
                      lian1=0;
                    }else{
                      lian1++;
                      arrs1.push(lian1);
                    }
                    if ($("#"+goss2[k]).text()!=""){
                        addss2+=1;
                      lian2=0;
                    }else{
                      lian2++;
                      arrs2.push(lian2);
                    }
                    if ($("#"+goss3[k]).text()!=""){
                        addss3+=1;
                      lian3=0;
                    }else{
                      lian3++;
                      arrs3.push(lian3);
                    }
                    if ($("#"+goss4[k]).text()!=""){
                        addss4+=1;
                      lian4=0;
                    }else{
                      lian4++;
                      arrs4.push(lian4);
                    }
                    if ($("#"+goss5[k]).text()!=""){
                        addss5+=1;
                      lian5=0;
                    }else{
                      lian5++;
                      arrs5.push(lian5);
                    }
                    if ($("#"+goss6[k]).text()!=""){
                        addss6+=1;
                      lian6=0;
                    }else{
                      lian6++;
                      arrs6.push(lian6);
                    }
                    if ($("#"+goss7[k]).text()!=""){
                        addss7+=1;
                      lian7=0;
                    }else{
                      lian7++;
                      arrs7.push(lian7);
                    }
                    if ($("#"+goss8[k]).text()!=""){
                        addss8+=1;
                      lian8=0;
                    }else{
                      lian8++;
                      arrs8.push(lian8);
                    }
                    if ($("#"+goss9[k]).text()!=""){
                       addss9+=1;
                      lian9=0;
                    }else{
                      lian9++;
                      arrs9.push(lian9);
                    }
                    if ($("#"+goss0[k]).text()!="" && ($("#"+goss0[k]).text() == $("#"+goss0[k-1]).text())){
                        yilou0+=1;
                    }
                    if ($("#"+goss1[k]).text()!="" && ($("#"+goss1[k]).text() == $("#"+goss1[k-1]).text())){
                        yilou1+=1;
                    }
                    if ($("#"+goss2[k]).text()!="" && ($("#"+goss2[k]).text() == $("#"+goss2[k-1]).text())){
                        yilou2+=1;
                    }
                    if ($("#"+goss3[k]).text()!="" && ($("#"+goss3[k]).text() == $("#"+goss3[k-1]).text())){
                        yilou3+=1;
                    }
                    if ($("#"+goss4[k]).text()!="" && ($("#"+goss4[k]).text() == $("#"+goss4[k-1]).text())){
                        yilou4+=1;
                    }
                    if ($("#"+goss5[k]).text()!="" && ($("#"+goss5[k]).text() == $("#"+goss5[k-1]).text())){
                        yilou5+=1;
                    }
                    if ($("#"+goss6[k]).text()!="" && ($("#"+goss6[k]).text() == $("#"+goss6[k-1]).text())){
                        yilou6+=1;
                    }
                    if ($("#"+goss7[k]).text()!="" && ($("#"+goss7[k]).text() == $("#"+goss7[k-1]).text())){
                        yilou7+=1;
                    }
                    if ($("#"+goss8[k]).text()!="" && ($("#"+goss8[k]).text() == $("#"+goss8[k-1]).text())){
                        yilou8+=1;
                    }
                    if ($("#"+goss9[k]).text()!="" && ($("#"+goss9[k]).text() == $("#"+goss9[k-1]).text())){
                        yilou9+=1;
                    }
                }
                // console.log(addss0+"_"+addss1+"_"+addss2+"_"+addss3+"_"+addss4+"_"+addss5+"_"+addss6+"_"+addss7+"_"+addss8+"_"+addss9)
              var max0=Math.max.apply(null, arrs0);
              var max1=Math.max.apply(null, arrs1);
              var max2=Math.max.apply(null, arrs2);
              var max3=Math.max.apply(null, arrs3);
              var max4=Math.max.apply(null, arrs4);
              var max5=Math.max.apply(null, arrs5);
              var max6=Math.max.apply(null, arrs6);
              var max7=Math.max.apply(null, arrs7);
              var max8=Math.max.apply(null, arrs8);
              var max9=Math.max.apply(null, arrs9);
$("#totles1").empty();
                     var shuju='<li style="color: #579ee8;"><span class="times">出现次数</span><span>'
                     +addss0+'</span><span>'+addss1+'</span><span>'
                     +addss2+'</span><span>'+addss3+'</span><span>'
                     +addss4+'</span><span>'+addss5+'</span><span>'
                     +addss6+'</span><span>'+addss7+'</span><span>'
                     +addss8+'</span><span>'+addss9+'</span></li>'+
                     '<li style="color: #d88927;"><span class="times">平均遗漏</span><span>'
                     +parseInt((data.length-addss0)/addss0)+'</span><span>'
                     +parseInt((data.length-addss1)/addss1)+'</span><span>'
                     +parseInt((data.length-addss2)/addss2)+'</span><span>'
                     +parseInt((data.length-addss3)/addss3)+'</span><span>'
                     +parseInt((data.length-addss4)/addss4)+'</span><span>'
                     +parseInt((data.length-addss5)/addss5)+'</span><span>'
                     +parseInt((data.length-addss6)/addss6)+'</span><span>'
                     +parseInt((data.length-addss7)/addss7)+'</span><span>'
                     +parseInt((data.length-addss8)/addss8)+'</span><span>'
                     +parseInt((data.length-addss9)/addss9)+'</span></li>'+
                     '<li style="color: #6e8d57;"><span class="times">最大遗漏</span><span>'
                     +max0+'</span><span>'
                     +max1+'</span><span>'
                     +max2+'</span><span>'
                     +max3+'</span><span>'
                     +max4+'</span><span>'
                     +max5+'</span><span>'
                     +max6+'</span><span>'
                     +max7+'</span><span>'
                     +max8+'</span><span>'
                     +max9+'</span></li>'+
                     '<li style="color: #ea7de1;"><span class="times">最大连出</span><span>'
                     +yilou0+'</span><span>'
                     +yilou1+'</span><span>'
                     +yilou2+'</span><span>'
                     +yilou3+'</span><span>'
                     +yilou4+'</span><span>'
                     +yilou5+'</span><span>'
                     +yilou6+'</span><span>'
                     +yilou7+'</span><span>'
                     +yilou8+'</span><span>'
                     +yilou9+'</span></li>';
                $("#totles1").html(shuju);

                   idss = idss.substring(0, idss.length - 1);
                   var lists = idss.split(",");
                     var dsss=0;
                for (var k = lists.length-1; k >=0 ; k--) {//将匹配的ID放入arrList数组中
                var index=k;
                    if ($("#"+lists[k]).text()!="") {
 
                        dsss=0;
                        $("#"+lists[k]).addClass("col");//给相应的span加上colors样式
                    } 
                    else{
                        dsss++;
                        $("#"+lists[k]).text(dsss)
                        
                        
                    }

                }
     }

  })
}
})