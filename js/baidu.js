$(function(){
    var num=0;
    var height=$(window).height();
    var flag=true;
    $("#fullpage").mousedown(function(e){
        e.preventDefault();
    })
    $("#fullpage").mousemove(function(e){
        e.preventDefault();
    })
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
})