/*
 * 购彩计划部分js代码
 * 2017-10-30
 */
$(function(){

//获取uid方法
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
      if(Request["uid"]!=undefined){
      var uid = Request["uid"];
}
 var urls="https://www.jindi163.com:8443/JDLot/lottype/pagelist";
 var urls1="https://www.jindi163.com:8443/JDLot/lot/plan/jdlot/list";
 var urls2="https://www.jindi163.com:8443/JDLot/lot/plan/slist";
function runThis () {//这个是要执行的内容
	return urls
}
var interval;
//先执行一次，然后再设置5秒执行一次
runThis();
clearInterval(interval);
interval = setInterval(runThis, 8000);
// console.log(uid)
// 默认样式代码开始
 duoduo()
 console.log(urls)

function duoduo(){

      $.ajax({//第一层选择彩种
            type:"post",
            url: urls,//追号计划需要uid
            data: {"uid":uid,"PageSize":"200","interfaceStatus":"1"}, 
            dataType: "json",
            contentType:"application/json",
            async:true,
            cache:false,
             beforeSend: function(XMLHttpRequest) {
                              $("body").append('<div id="aaaa" style="z-index:999;position:fixed; top:0;left:0;right:0;bottom:0;margin:auto;width:100%;height:100%">'+
                              '<div  id="load" style="z-index:1; position:fixed; top:0;left:0;right:0;bottom:0;margin:auto;width:4rem;height:4rem">'+
                                '<img alt="数据加载中..." src="img/massage/4c3ba25d7384dee10d565e7f20c89400_t014be238bb089e1e42.gif" style="width:100%"/></div></div>'); 
             			},
            success: function(data){
                 data=data.datas;
                 console.log(data);
                 $('#caizhongjiekou').empty();//大彩种
                 var good_html=new Array();
                 var full_name=new Array();
                 var html="";//文本内容               
                 var good="";
                 var fisrt="";//获取第一个 
                 var caizhong="";
                 var consrt="";
                 var name_id="";
                 var all_name="";
                 var first_name="";
                 
                 var nane_id_plan="";
                 var msg_length=new Array();
                 $.each(data,function(i){
                          fisrt=data[0].lottery_full_name;//获取第一个的彩种名称
                          var good_name=data[i].lottery_name;//获取所有的html
                          html+='<li><a href="#">'+data[i].lottery_full_name+'</a></li>';
                          if(i<data.length-1){
                          good_name=data[i].lottery_name;//获取所有的html
                          console.log(good_name)
                          good=good_name.substring(5);
                          }else{
                          	return
                          }
                          var leng_name=good_name.substring(good_name.length-2,good_name.length);
                          console.log(leng_name)
                          all_name=data[i].lottery_full_name;
                          good_html.push(good);//获取所有的彩种的数组
                          full_name.push(all_name);
                          msg_length.push(leng_name);
                          
                })
// console.log(msg_length)
                  $('#caizhongjiekou').html(html);//将彩票彩种添加到$('#caizhongjiekou')上
                  $(".caipiao_leixing").text(fisrt);//默认的彩种列表
                      caizhong=good_html[0];//默认的第一个彩种
                      // console.log(caizhong)
                      var plan=good_html[0];
                       first_name=full_name[0];
                      
                      var find_msg=msg_length[0];
                      var html_msg='<a href="zhuihao_'+find_msg+'_help.html" class="massages"></a>';
                      begins();
          $("#caizhong_shu #caizhongjiekou li").each( function(i){//点击彩种时的---- 快三 时时彩。。----
                         $(this).click(function () {
                            var index=i;
                                       //获取点击当前的彩种的名称------bjpk10   cqssc...---------
                            clearInterval(timer);
                            $("#caizhong_shu").hide();
                            $(".caizhong .sanjiao").toggle();
                            $(".caizhong .daosanjiao").toggle();
                            $(".caipiao_leixing").text("");//将默认的数据去除
                            $(".set_massage").empty();
                            $(this).css({//给当前的点击的元素添加样式
                              "border-color":"red",
                               "background":"url(./img/massage/checked3x.png) no-repeat right bottom",
                             "background-size":"20% 50%"
                        }).siblings().css({"border-color":"gray","background":"none"});
                            $(".caipiao_leixing").text(($(this).text()));
//                          
                            if ($(this).text()=="所有彩种") {	
                            	 var u = navigator.userAgent; 
								        isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;
								        isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
								        if (isiOS==true) {
								        testClick()
								        } else {
								        Fun()
								        }
                            	  function testClick(){
								        var str1 = "所有彩种";//大彩种 英文
								        var str2="全部计划";
								        	all_lot(str1,str2);
								        }
					        function Fun(){
									    var str1 = "所有彩种";//大彩种 英文
									    var str2="全部计划";
									        android.all_lots(str1,str2);
									
										}
                            } else{
                            caizhong=good_html[index];
                            plan=good_html[index]; 
                            first_name=full_name[index];
                            find_msgs=msg_length[index];
                       html_msgs='<a href="zhuihao_'+find_msgs+'_help.html" class="massages"></a>';
                       $(".set_massage").html(html_msgs);
                            begins();
                            setInterval(timer)
                    }
          });
                         
                         $(".set_massage").html(html_msg);
                         
      });
                // var   consrt="";
                // var name_id="";
                  
             function begins(){//计划的接口函数---期数  A B C------
                       $.ajax({
                          type:"post",
                          url:urls1,
                           //plan_name:二期和值"  child_name："A"    plan_id:"2_2_20_3_a_3"    
                          data: {"uid":uid,"PageSize":"100","lot_name":caizhong},   
                          dataType: "json",
                          contentType:"application/json",
                          async:true,
                          cache:false,
                           // beforeSend: function(XMLHttpRequest) {
                           //    $("body").append('<div id="aaaa" style="z-index:999;position:fixed; top:0;left:0;right:0;bottom:0;margin:auto;width:100%;height:100%"><div  id="load" style="z-index:1; position:fixed; top:0;left:0;right:0;bottom:0;margin:auto;width:4rem;height:4rem">'+
                           //      '<img alt="数据加载中..." src="img/massage/4c3ba25d7384dee10d565e7f20c89400_t014be238bb089e1e42.gif" style="width:100%"/></div></div>'); },
                          success: function(data){ 
                          	console.log(caizhong)
                                  var  data=data.datas;
                                  var huadong='';
                                  var pian_show="";
                                  var plan_id="";
                                  var childs_nm="";
                                  var name_plan="";
                                  var plan_content=new Array();
                                  var plan_abc=new Array();
                                  var zhong_name=new  Array();
                                   consrt=data[2].plan_content;//默认为第一个 .ones 下的数据
                                   // console.log(consrt)
                              for (var k = 0; k < data.length; k++) {
                               var plan_zh_name=data[k].plan_name;
                                    nane_id_plan=data[2].plan_name;

                                    huadong+='<li class="ones">'+data[k].plan_name+'</li>';
                                    zhong_name.push(plan_zh_name);
                               
                            } 
                                     $("#mian_body").html( zhong_name[2])
                                   $(".tabClick").empty();//将默认的内容清空
                                    $("#all_list").html(huadong)//滑动部分的内容
                                    for ( var i = 0; i < consrt.length; i++) {
                                          var arrs_child=consrt[i].child_name;
                                              name_plan=arrs_child;
                                          var name_id=consrt[i].plan_id;
                                          plan_abc.push(arrs_child);
                                          pian_show+='<li class="plan">'+arrs_child+'</li>';//计划A B C显示
                                   }

                                   
                                     $(".tabClick").append(pian_show)//选择ABC的内容
                                     name_plan=$(".plan").eq(0).text();//第一个购买计划的默认值
                               $(".ones").eq(0).addClass("colors_red");
                               $(".ones").each(function(i){
                                    $(this).click(function(e){
                                      $("#mian_body").empty();
                                    $(this).addClass("colors_red").siblings().removeClass("colors_red");
                                      var index= i;
                                      consrt=data[index].plan_content;
                                      nane_id_plan=zhong_name[index];
                                      $(this).css({//给当前的点击的元素添加样式
                              "border-color":"red",
                               "background":"url(./img/massage/checked3x.png) no-repeat right bottom",
                             "background-size":"20% 50%"
                        }).siblings().css({"border-color":"gray","background":"none"});
                                      $(".liebiao").toggle();
                                      $(".mian_body .sanjiao").toggle();
                                      $(".mian_body .daosanjiao").toggle();
                                      $("#mian_body").html($(this).text()) 
                                    $(".tabClick li").remove();

                                      var pshow="";
                                       for (var k = 0; k < consrt.length; k++) {
                                      
                                       childs_nm=consrt[k].child_name;
                                      pshow+='<li class="plan">'+childs_nm+'</li>'; 
                                         
                                       }
                                    $(".tabClick").append(pshow);
                                      name_plan=$(".plan").eq(0).text();
                                      name_id=consrt[0].plan_id;
                                        
                                      planABC()
                                      clcik_lis();  
                                      setInterval(timer)                 
                      })

            })           
                                     
                                
          
                planABC()
                              
              function planABC(){
                        name_id=consrt[0].plan_id;

                        $(".plan").eq(0).addClass("active");
                        $(".plan").each(function(i){
                        $(this).click(function(){
                        var index=i;
                        name_id="";
                        $(this).addClass("active").siblings().removeClass("active");
                        name_id=consrt[i].plan_id;
                        name_plan=$(".plan").eq(index).text();
                        // alert(name_id)
                clcik_lis();//每点击一次A B C调用第三个接口，实现数据交互
                setInterval(timer)
                       })
              })
              }    
               
                                  
 clcik_lis();//默认时调用
                 timer=setInterval(function(){//调用定时器实现数据的实时刷新
                      clcik_lis();//默认时调用
                      // console.log(0)
              },8000)  
              function clcik_lis(){ 
                   console.log(plan+"------"+name_id);
                    $.ajax({  
                            type:"post", 
                            url:urls2,//all 数据展示部分
                            data: {"uid":uid,"lottery_name":plan,"plan_id":name_id,"PageSize":"200"},  
                            dataType: "json",
                            cache:false,
                            contentType:"application/json",
                            async:true,
                            success: function(data){ 
                            	console.log(data)
                                 var    dd=data.datasMore;
//                                var    dr=data.datas.result;
 
                                if (dd==undefined || dd == "") {
                                  $("#first_lis").css({"display":"none"});//具体数据隐藏
                                  dd=""
                                } else {
                                  dd=data.datasMore;
                                  $("#first_lis").css({"display":"block"})//具体数据显示
                                }
                                  
                                  $("#dingwei_jihua").empty();
                                  // var jihua_lis="";//计划列表
                                   var jihua_lis = '<li id="first_lis"><p>'+dd+'</p><button id="cilicks" style="padding:0 1rem;color:red">一键复制</button></li><li>'+
                                                    '<table>'+
                                                    '<tr>'+
                                                    '<th class="th_data1">期号</th>'+

                                                    '<th class="th_data2">计划</th>'+
                                                    '<th class="th_data3 lasts">回顾</th>'+
                                                    '</tr>';
                                                    '<table>'+
                                                    '<tr>'+
                                                    '<th class="th_data1">期号</th>'+

                                                    '<th class="th_data2">计划</th>'+
                                                    '<th class="th_data3 lasts">回顾</th>'+
                                                    '</tr>'; 
                                var   data=data.datas;
                                // console.log(data)
                                var data_r="";
                                var data_w="";
                                var aas="";
                                var shuju_show="";
                               $.each(data, function(i){
                                 var results=data[i].result;
                                            // console.log(results);
                                            var successful="";
                                            if (results=="" && i==0) {
                                              successful="开奖中";
                                            } else if(results==02 && i==0){
                                              successful="开奖中";
                                            }else if(results==(-1) && i==0){
                                              successful="未开奖";
                                            }else if(results!=0){
                                              successful="✔";
                                            }else {
                                              successful="✘";
                                            }
                                        var    end= data[i].period_end;
                                        var    start= data[i].period_start;
                                           if ( (end.length ||start.length)>3){
                                               end=  end.substring(3);
                                               start= start.substring(3)
                                           }else{
                                                end=  end.substring(0,3);
                                               start= start.substring(0,3);
                                           }
                                           shuju_show=data[0].code_num;
                                          
                                          jihua_lis+= '<tr id="all_'+i+'">'+
                                                   '<td class="th_data1">'+start+'-'+end+'</td>'+
                                                   '<td class="th_data2 sures"><button class="goumai" style="border:none;display:none">购买计划</button><span class="iskong">'+data[i].code_num+'</span></td>'+
                                                   '<td class="th_data3 lasts tdls" id="lasts_success">'+successful+'</td>'+    //回顾信息判断，如果匹配三期中的数据就返回“对”，否则“error”
                                                   '</tr>';
                                                   if (data[i].result !=0) {
                                                         data_r++; 
                                                    } 
                                                     aas=data.slice(0,20);
                                                    return aas
                                              
                                        });

                                         for (var j = 0; j < aas.length; j++) {
                                                      if (data[j].result !=0) {
                                                          data_w++;
                                                      } 
                                                    }
                                      jihua_lis=jihua_lis+'</table></li>';
                                      $("#dingwei_jihua").html(jihua_lis);

                                    if (dd=="") {
                                      $("#first_lis").css({"display":"none"})
                                    } else {
                                      $("#first_lis").css({"display":"block"})
                                    } 

                                      $(".tdls").each(function(){
                                        if ($(this).text()=="✔" || $(this).text()=="开奖中") {
                                          $(this).css({"color":"red"})
                                        } else{
                                          $(this).css({"color":"green"})
                                        }
                                      })

                                      if (shuju_show=="") {
                                        // alert(1);
                                        $("#dingwei_jihua li table tr:eq(1) .sures .goumai").show()
                                      } else {
                                        // alert(2);
                                        $("#dingwei_jihua li table tr:eq(1) .sures .goumai").hide()
                                      }
                                     
                                      $(".ccs1").text(parseInt((data_r/(data.length-1))*100)+"%");
                                      $(".ccs2").text(parseInt((data_w/(aas.length-1))*100)+"%");


//交互部分
$("#dingwei_jihua li table tr:eq(1) .sures .goumai").click(function(){//点击购买计划进行交互
        var u = navigator.userAgent; 
        isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;
        isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
        if (isiOS==true) {
        testClick()
        } else {
        jsFun()
        }

})
   var str3=nane_id_plan+"·"+name_plan+"计划";
   console.log(str3)
        function testClick(){
        var str1="type_"+plan;//大彩种 英文
        var str2= first_name;//大彩种 中文
        var str3=nane_id_plan+"·"+name_plan+"计划";
        passValue(str1,str2,str3);
        }
        function jsFun(){
        var str1="type_"+plan;
        var str2= first_name;
        var str3=nane_id_plan+"·"+name_plan+"计划";
        android.fun1(str1,str2,str3);//别名首字母默认会被处理成小写，所以为了避免调用出错，最好统一采用小写字母

}
                                    },
         complete: function(XMLHttpRequest, textStatus) {$("#aaaa").remove(); }
                                  })
                                }
                            },
         complete: function(XMLHttpRequest, textStatus) {$("#aaaa").remove(); }
                       })
// 默认样式代码完成         
        }      

     },
      complete: function(XMLHttpRequest, textStatus) {$("#aaaa").remove(); }
})
}
})