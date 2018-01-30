// 滑动页面
$(document).ready(function(e) {
    var imgObj = document.getElementsByClassName("ones");
    var imgLen = imgObj.length;
    var windowWidth = $(".ones").width();
    $(".ones").on("click",function(event){

    });
    // int = setInterval(carouselImg,3000);
    for(var i=0;i<imgLen;i++){
        $(".ones").eq(i).css({"top":"0","left":i*windowWidth});
        imgObj[i].addEventListener('touchstart',touchstart,false);
        imgObj[i].addEventListener('touchmove',touchmove,false);
        imgObj[i].addEventListener('touchend',touchend,false);
    }
    
});

function touchstart(event){

    if( event.targetTouches.length == 1 )
    {
        var touch = event.targetTouches[0];
            pressX = touch.pageX;
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
        var spanX = touch.pageX - pressX ,
            windowWidth = $(".ones").width();
        var $car_img = $(".ones"),
            $this = $(this);
        var thisIndex = $this.index(),
            imgLen = $(".ones").length;
        for(var i=0;i < imgLen;i++){
            $car_img.eq(i).css("left",windowWidth*(i-thisIndex)+spanX);
        }
        
    }
}

function touchend(event){
    var $car_img = $(".ones"),
        $this = $(this),
        $carousel_icon = $(".carousel_icon"),
        windowWidth = $(".ones").width();
    var thisIndex = $this.index(),
        imgLen = $(".ones").length;
    var thisLeft = parseInt($(this).css("left"));
    //向左滑动执行的方法
    if(thisLeft < -32 && thisIndex < imgLen){
        //当轮播图滑动最后一个位置时，当前轮播图位置不变
        if(thisIndex == imgLen-1){
            for(var i=0;i < imgLen;i++){
                $car_img.eq(i).animate({"left":windowWidth*(i-thisIndex)},300);
                
            }
        }
        //当轮播不在最后一个位置时，轮播图位置变化方法
        else{
            for(var i=0;i < imgLen;i++){
                $car_img.eq(i).animate({"left":windowWidth*(i-(thisIndex+1))},300);
               
            }
        
        }
        
    }
    //向右滑动执行的方法
    else if(thisLeft > 32 && thisIndex >= 0){
        //当轮播图在第一个位置时
        if( thisIndex == 0){
            for(var i=0;i < imgLen;i++){
                $car_img.eq(i).animate({"left":windowWidth*(i-thisIndex)},300);
            }
        }
        //轮播图不在第一个位置
        else{
            for(var i=0;i < imgLen;i++){
                $car_img.eq(i).animate({"left":windowWidth*(i-(thisIndex-1))},300);
              
            }
            
        }
    }
    //当滑动距离在大于-32px并且小于32px时，当前轮播图位置不变
    else{
        for(var i=0;i < imgLen;i++){
            $car_img.eq(i).animate({"left":windowWidth*(i-thisIndex)},100);
        }
    }
}