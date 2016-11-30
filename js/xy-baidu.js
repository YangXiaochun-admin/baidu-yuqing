$(function(){
    /*--------登录表单获取焦点-----------*/
    $(".login-info input[type='text']").on("click",function(){
        $(this).focus();
    })
    /*--------页面拖屏特效-----------*/
    var num=0;
    var height=$(window).height();
    var flag=true;
    $("#fullpage").mousedown(function(e){
        e.preventDefault();
    })
    $("#fullpage").mousemove(function(e){
        e.preventDefault();
    })
    /*--------上拖-----------*/
    touch.on("body","swipeup",function(){
        if(!flag){
            return;
        }
        num++;
        if(num==$("section").length){
            num=$("section").length-1;
        }
        flag=false;
        $("#fullpage").css({
            marginTop:-num*height,
            transition:"margin .5s ease"
        })
    })
    /*--------下拖-----------*/
    touch.on("body","swipedown",function(){
        if(!flag){
            return;
        }
        num--;
        if(num==-1){
            num=0;
        }
        flag=false;
        $("#fullpage").css({
            marginTop:-num*height,
            transition:"margin .5s ease"
        })
    })

    $("#fullpage")[0].addEventListener("webkitTransitionEnd",function(){
        flag=true;
    })
    /*--------窗口变化-----------*/
    $(window).resize(function(){
        clientH=$(window).height();
        var clientW=$(window).width();
        $("#fullpage").css("marginTop",clientH*-num)
        if(clientW>1000){
            $(".menu a").css({
                animation:"none",
                opacity:0,
                transform:"rotateX(90deg)"
            })
            $(".before,.after").css({
                transform:"none"
            })
            flag1=true;
        }
    })

    /*-------------头部下拉菜单--------------*/
    var flag1=true;
    $(".menuOption").click(function(){
        if(flag1){
            $(this).find(".before").css({
                "transform":"translate(0,5px) rotate(45deg)",
            })
            $(this).find(".after").css({
                "transform":"translate(0,-5px) rotate(-45deg)",
            })
            $(".menu a").each(function(index,obj){
                $(obj).css({
                    opacity:0,
                    transform:"rotateX(0deg)",
                    animation:"menu 1s linear forwards "+0.2*index+"s"
                })
            })
            flag1=false;
        }else{
            $(this).find(".before").css({
                "transform":"none"
            })
            $(this).find(".after").css({
                "transform":"none",
            })
            $(".menu a").each(function(index,obj){
                $(obj).css({
                    opacity:1,
                    transform:"rotateX(0deg)",
                    animation:"menu1 0.3s linear forwards "+(1.4-0.2*index)+"s"
                })
            })
            flag1=true;
        }
    })
})