// 滑动页面
$(document).ready(function() {
  
    var img = document.getElementsByClassName("plans");
    var imgLens = img.length;
    var windowHeight = $(".plans").height();
    $(".plans").on("click",function(event){

    });
    // int = setInterval(carouselImg,3000);
    for(var i=0;i<imgLens;i++){
        $(".plans").eq(i).css({"left":"0","top":i*windowHeight});
        img[i].addEventListener('touchstart',touchstart,false);
        img[i].addEventListener('touchmove',touchmove,false);
        img[i].addEventListener('touchend',touchend,false);
    }
  
});
  plans();
    function plans(){
function touchstart(event){

    if( event.targetTouches.length == 1 )
    {
        var touch = event.targetTouches[0];
            pressY = touch.pageY;
    }
}

/*
 *定义每次滑动的距离spanX
 *定义当前滑动的索引位置thisIndex，轮播图的个数imgLen
 */
function touchmove(event){

    
    if( event.targetTouches.length == 1 )
    {
        var touch = event.targetTouches[0];
        var spanY = touch.pageY - pressY ,
            windowHeight = $(".plans").height();
        var $plans = $(".plans"),
            $this = $(this);
        var thisIndex = $this.index(),
            imgLen = $(".plans").length;
        for(var i=0;i < imgLen;i++){
            $plans.eq(i).css("top",windowHeight*(i-thisIndex)+spanY);
        }
        
    }
}

function touchend(event){
    var $plans = $(".plans"),
        $this = $(this),
        windowHeight = $(".plans").height();
    var thisIndex = $this.index(),
        imgLen = $(".plans").length;
    var thisLeft = parseInt($(this).css("top"));
    //向左滑动执行的方法
    if(thisLeft < -10 && thisIndex < imgLen){
        //当轮播图滑动最后一个位置时，当前轮播图位置不变
        if(thisIndex == imgLen-1){
            for(var i=0;i < imgLen;i++){
                $plans.eq(i).animate({"top":windowHeight*(i-thisIndex)},300);
                
            }
        }
        //当轮播不在最后一个位置时，轮播图位置变化方法
        else{
            for(var i=0;i < imgLen;i++){
               $plans.eq(i).animate({"top":windowHeight*(i-(thisIndex+1))},300);
               
            }
        
        }
        
    }
    //向右滑动执行的方法
    else if(thisLeft > 10 && thisIndex >= 0){
        //当轮播图在第一个位置时
        if( thisIndex == 0){
            for(var i=0;i < imgLen;i++){
                $plans.eq(i).animate({"top":windowHeight*(i-thisIndex)},300);
            }
        }
        //轮播图不在第一个位置
        else{
            for(var i=0;i < imgLen;i++){
                 $plans.eq(i).animate({"top":windowHeight*(i-(thisIndex-1))},300);
              
            }
            
        }
    }
    //当滑动距离在大于-32px并且小于32px时，当前轮播图位置不变
    else{
        for(var i=0;i < imgLen;i++){
            $plans.eq(i).animate({"top":windowHeight*(i-thisIndex)},100);
        }
    }

}
}