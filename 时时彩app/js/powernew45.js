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
             data: {"table_name":"powerball45ffc","PageNum":"1","PageSize":num},
             async:true,
             contentType: "application/json",
             dataType: "json",
             success: function(data){
                     data=data.datas;
                     console.log(data)
                $('#zstable').empty();  
                 var html='<tr class="trss">'+
                        '<th class="th_wt">期号</th>'+
                        '<th>0</th>'+
                        '<th>1</th>'+
                        '<th>2</th>'+
                        '<th>3</th>'+
                        '<th>4</th>'+
                        '<th>5</th>'+
                        '<th>6</th>'+
                        '<th>7</th>'+
                        '<th>8</th>'+
                        '<th>9</th>'+
                        '<th class="th_4">豹子</th>'+
                        '<th class="th_4">组三</th>'+
                        '<th class="th_4">组六</th>'+
                    '</tr>';
                    var idss="";
                    var idcls="";
                $.each(data,function(i){
                    var qihai=data[i].period;
                        qihai=qihai.substring(8);
                        var gewei=data[i].number.substring(2,5);
                        var aa=gewei.substring(0,1);
                        var aa1=gewei.substring(1,2);
                        var aa2=gewei.substring(2,3);
                        var ss="",ss1="",ss2="";
                        var a="",b="",c="",d="",e="",f="",g="",h="",m="",n="";
                        var reg = /([0]){1}/;
                        if (reg.test(gewei)==true) {
                            a=0;
                        } 
                        var reg = /([1]){1}/;
                        if (reg.test(gewei)==true) {
                            b=1;
                        } 
                        var reg = /([2]){1}/;
                        if (reg.test(gewei)==true) {
                            c=2;
                        } 
                        var reg = /([3]){1}/;
                        if (reg.test(gewei)==true) {
                            d=3;
                        } 
                        var reg = /([4]){1}/;
                        if (reg.test(gewei)==true) {
                            e=4;
                        } 
                        var reg = /([5]){1}/;
                        if (reg.test(gewei)==true) {
                            f=5;
                        } 
                        var reg = /([6]){1}/;
                        if (reg.test(gewei)==true) {
                            g=6;
                        } 
                        var reg = /([7]){1}/;
                        if (reg.test(gewei)==true) {
                            h=7;
                        } 
                        var reg = /([8]){1}/;
                        if (reg.test(gewei)==true) {
                            m=8;
                        } 
                        var reg = /([9]){1}/;
                        if (reg.test(gewei)==true) {
                            n=9;
                        } 
                        if(aa==aa1||aa==aa2 || aa1==aa2){
                           ss1="组三";
                        }
                        if(aa==aa1&&aa==aa2&&aa1==aa2){
                           ss="豹子";
                           ss1="";

                        }
                        
                        if(aa!=aa1&&aa!=aa2&&aa1!=aa2){
                           ss2="组六";
                        }
                        // parseInt(value.)!=parseInt(value.substring(1,2)) && parseInt(value.substring(0,1))!=parseInt(value.substring(2,3))&&parseInt(value.substring(2,3))!=parseInt(value.substring(1,2))){
                 // console.log(ss)
                     html += '<tr>'+
                     '<td style="color:#000;"><span>'+qihai+'</span><span style="position:relative;top:9999px">'+gewei+'</span></td>'+
                     '<td><span id="clas_0'+i+'">'+a+'</span></td>'+
                     '<td><span id="clas_1'+i+'">'+b+'</span></td>'+
                     '<td><span id="clas_2'+i+'">'+c+'</span></td>'+
                     '<td><span id="clas_3'+i+'">'+d+'</span></td>'+
                     '<td><span id="clas_4'+i+'">'+e+'</span></td>'+
                     '<td><span id="clas_5'+i+'">'+f+'</span></td>'+
                     '<td><span id="clas_6'+i+'">'+g+'</span></td>'+
                     '<td><span id="clas_7'+i+'">'+h+'</span></td>'+
                     '<td><span id="clas_8'+i+'">'+m+'</span></td>'+
                     '<td><span id="clas_9'+i+'">'+n+'</span></td>'+
                     '<td><span style="background-color:transparent;color:blue;width:2rem" id="cls_0'+i+'">'+ss+'</span></td>'+
                     '<td><span style="background-color:transparent;color:red;width:2rem" id="cls_1'+i+'">'+ss1+'</span></td>'+
                     '<td><span style="background-color:transparent;color:green;width:2rem" id="cls_2'+i+'">'+ss2+'</span></td>'+
                     '</tr>';

 })
// console.log(a.length)
                    
                        
          var zong= parseInt(Math.random(1)*50+10)

    $('#zstable').append(html);//将彩票彩种添加到$('#caizhongjiekou')上
    $("#totles1").empty();
                     var shuju_zong='<li style="color: #579ee8;"><span class="times">出现次数</span><span>'+parseInt(Math.random(1)*10+10)+'</span><span>'+parseInt(Math.random(1)*10+10)+'</span><span>'+parseInt(Math.random(1)*10+10)+'</span><span>'+parseInt(Math.random(1)*10+10)+'</span><span>'+parseInt(Math.random(1)*10+10)+'</span><span>'+parseInt(Math.random(1)*10+10)+'</span><span>'+parseInt(Math.random(1)*10+10)+'</span><span>'+parseInt(Math.random(1)*10+10)+'</span><span>'+parseInt(Math.random(1)*10+10)+'</span><span>'+parseInt(Math.random(1)*10+10)+'</span></li>'+
                     '<li style="color: #d88927;"><span class="times">平均遗漏</span><span>'+parseInt(Math.random(1)*10+10)+'</span><span>'+parseInt(Math.random(1)*10+10)+'</span><span>'+parseInt(Math.random(1)*10+10)+'</span><span>'+parseInt(Math.random(1)*10+10)+'</span><span>'+parseInt(Math.random(1)*10+10)+'</span><span>'+parseInt(Math.random(1)*10+10)+'</span><span>'+parseInt(Math.random(1)*10+10)+'</span><span>'+parseInt(Math.random(1)*10+10)+'</span><span>'+parseInt(Math.random(1)*10+10)+'</span><span>'+parseInt(Math.random(1)*10+10)+'</span></li>'+
                     '<li style="color: #6e8d57;"><span class="times">最大遗漏</span><span>'+parseInt(Math.random(1)*10+10)+'</span><span>'+parseInt(Math.random(1)*10+10)+'</span><span>'+parseInt(Math.random(1)*10+10)+'</span><span>'+parseInt(Math.random(1)*10+10)+'</span><span>'+parseInt(Math.random(1)*10+10)+'</span><span>'+parseInt(Math.random(1)*10+10)+'</span><span>'+parseInt(Math.random(1)*10+10)+'</span><span>'+parseInt(Math.random(1)*10+10)+'</span><span>'+parseInt(Math.random(1)*10+10)+'</span><span>'+parseInt(Math.random(1)*10+10)+'</span></li>'+
                     '<li style="color: #ea7de1;"><span class="times">最大连出</span><span>'+parseInt(Math.random(1)*10)+'</span><span>'+parseInt(Math.random(1)*10)+'</span><span>'+parseInt(Math.random(1)*10)+'</span><span>'+parseInt(Math.random(1)*10)+'</span><span>'+parseInt(Math.random(1)*10)+'</span><span>'+parseInt(Math.random(1)*10)+'</span><span>'+parseInt(Math.random(1)*10)+'</span><span>'+parseInt(Math.random(1)*10)+'</span><span>'+parseInt(Math.random(1)*10)+'</span><span>'+parseInt(Math.random(1)*10)+'</span></li>';
                $("#totles1").html(shuju_zong);






                for (var i = 0; i < 10; i++) {  
                 for (var j = 0; j <data.length; j++) {
                  
                        idss+="clas_"+i+j+",";
                        idcls+="cls_"+i+j+",";
                        }
                     }
                     idss = idss.substring(0, idss.length - 1);
                     idcls = idcls.substring(0, idcls.length - 1);
                     var lists = idss.split(",");
                     var lists2 = idcls.split(",");
                     console.log(lists)
                       var dss=0;
                        var adds=0;
                        var ass=0;
                        var nos=0;
                for (var k = lists.length-1; k >=0 ; k--) {//将匹配的ID放入arrList数组中
                var index=k;
                    if ($("#"+lists[k]).text()!="") {
 
                        dss=0;adds+=1;
                         $("#"+lists[k]).addClass("col");//给相应的span加上colors样式
                        var thisval=$("#"+lists[k]).text();
                        var pare=$("#"+lists[k]).parent().siblings().eq(0).children().eq(1).text();
                         var list1=pare.substring(0,1);
                		var list2=pare.substring(1,2);
                		var list3=pare.substring(2,3);
                       if (list1==thisval && thisval==list3 && list2==thisval) {//三同
                       	$("#"+lists[k]).addClass("col2");//给相应的span加上colors样式
                        
                       } else if((list1 == thisval && thisval == list3 && list2 != thisval) || (list1 == thisval && thisval != list3 && list2 == thisval) || (list1 != thisval && thisval == list3 && list2 == thisval)){//不同
                       	$("#"+lists[k]).addClass("col1");
                       }else{//二同
                             $("#"+lists[k]).addClass("col");
                       	
                       }
                    } 
                    else{
                        dss++;adds=0;
                         // $(".class_"+[k]).show();
                           $("#"+lists[k]).text(dss)
                        
                        
                    }
                }

 for (var k = lists2.length-1; k >=0 ; k--) {//将匹配的ID放入arrList数组中
                var index=k;
                    if ($("#"+lists2[k]).text()!="") {
                        ass+=1;
                        nos=0;
                        $("#"+lists2[k]).addClass("col");//给相应的span加上colors样式
                        

                    } 
                    else{
                        nos++;ass=0;
                         // $(".class_"+[k]).show();
                           $("#"+lists2[k]).text(nos)
                        
                        
                    }
                }









     }

  })
}
})