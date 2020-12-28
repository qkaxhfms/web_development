$(document).ready(function(){

    //브라우저 로딩 시
    resizeCon();

    //브라우저 로딩 시 rwd 호출
    $(window).on('resize',function(){
        resizeCon();
    })

    function resizeCon(){
        var wid = $(window).width();

        if(wid >=1000){
            $('#header').on('mouseenter',function(e){
                e.preventDefault();
                $('#gnb ul').show();
                $('.bgGnb').show();
            })
            $('#header').on('mouuseleave',function(e){
                e.preventDefault();
                $('#gnb ul').hide();
                $('.bgGnb').hide();
            })
        }else{
            $('#header').off('mouseenter');
            $('#header').off('mouseleave');
        }
    }

    $('.btnCall').on("click",function(){
        var isOpen = $("gnbMo").hasClass("on");

        if(isOpen){
            $("#gnbMo").removeClass("on");
        }else{
            $("#gnbMo").addClass("on");
        }
    });
})