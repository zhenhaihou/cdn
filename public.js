/**
 * Created by Ming Li on 2016/6/14.
 */
$(document).ready(function(){
    /*显示时间控件*/
    function date(){
        function Appendzero(obj){
            if(obj<10) return "0" +obj; else return obj;
        }
        var mydate = new Date();
        var Y = mydate.getFullYear();
        var M = mydate.getMonth()+1;
        var D = mydate.getDate();
        var Week = ['日','一','二','三','四','五','六'];
        var W = Week[mydate.getDay()];
        var h = mydate.getHours();
        var m = mydate.getMinutes();
        var s = mydate.getSeconds();
        var time= Y+"年"+M+"月"+D+"日"+"　星期"+W+"　"+h+":"+Appendzero(m)+":"+Appendzero(s)+"";
        return time;
    }
    setInterval(function(){
        $(".mian-time").text(date());
    },1000);
    /*整体页面宽高设置*/
    var headerHight=$(".header-hight").height();
    var containerLeft=$(".container-left").width();
    $(".container-left").css("height",$(window).height()-headerHight);
    $(".container-main").css({"width":$(window).width()-containerLeft,"min-height":$(window).height()-headerHight,"left":containerLeft});
    $(".main-content").css("min-height",$(window).height()-headerHight-200);
    $(".main-content1").css("min-height",$(window).height()-headerHight-125);
    $(".write-left").css("height",$(window).height()-headerHight-145);
    $(".write-right").css("height",$(window).height()-headerHight-145);
    $(window).resize(function(){
        var headerHight=$(".header-hight").height();
        var containerLeft=$(".container-left").width();
        $(".container-left").css("height",$(window).height()-headerHight);
        $(".container-main").css({"width":$(window).width()-containerLeft,"min-height":$(window).height()-headerHight,"left":containerLeft});
    });
    /*右侧导航*/
    $(".ul-cantainer li.one-bg a.one").click(function(){
        $(this).toggleClass("xz").find("em").toggleClass("rotate").parents().siblings().find("a").removeClass("xz").find("em").removeClass("rotate");
        $(this).addClass("xz").parents().siblings().find("a").removeClass("xz");
        $(".ul-cantainer li.one-bg a.one").siblings().find("a").removeClass("xz2");
        $(this).parents().siblings().find("ul.two").slideUp(600);
        $("ul.three").slideUp(600);
        $(this).siblings("ul.two").slideToggle(600);
        /*$("ul.two").slideDown(1000)*/
    });
    $(".two li.li-two a.a-two").click(function(){
        $(this).toggleClass("xz2").find("em").toggleClass("rotate").parents().siblings().find("a").removeClass("xz2").find("em").removeClass("rotate");
        /*$(".two li.li-two a").next().find("em").removeClass("rotate")*/
        $(this).addClass("xz2").parents().siblings().find("a").removeClass("xz2").find("em").removeClass("rotate");
        $(".three li a").removeClass("xz3");
        $(this).parents().siblings().find("ul.three").slideUp(600)
        $(this).siblings("ul.three").slideToggle(600);
        /*$("ul.two").slideDown(1000)*/
    });
    $(".three li a").click(function(){
        $(this).addClass("xz3").parents().siblings().find("a").removeClass("xz3");
        $(this).parents().siblings().find("a").removeClass("xz2");
    });
    /*弹出层*/
    $(".eject-xs").css({'left':($(window).width()-$(".eject-xs").width())/2,'top':($(window).height()-$(".eject-xs").height())/2})
    $(".upload").click(function(){
        $(".eject").show();
    });
    $(".eject-bg").click(function(){
        $(".eject").hide();
    });
    $(".eject-close").click(function(){
        $(".eject").hide();
    });
    /*弹出层 共享设置*/
    $(".yes1").click(function(){
        $(".shared").show();
    });
    $(".shared-bg").click(function(){
        $(".shared").hide();
    });
    $(".eject-close").click(function(){
        $(".shared").hide();
    });
    $(".sj-xl").click(function(){
        $(".shared-xl").slideToggle(600);
    });

    $(".ul-shared li.shared-one a.xl1").click(function(){
        $(this).find("span").toggleClass("jian").parents().siblings().find("a.xl1 span").removeClass("jian");
        $(this).parents().siblings().find(".ul-shared-two").slideUp(600);
        $(this).siblings(".ul-shared-two").slideToggle(600);
    });
    $(".ul-shared-two li.shared-two a.xl2").click(function(){
        $(this).find("span").toggleClass("jian").parents().siblings().find("a.xl2 span").removeClass("jian");
        $(this).parents().siblings().find(".ul-shared-three").slideUp(600);
        $(this).siblings(".ul-shared-three").slideToggle(600);
    });
    $(".ul-shared-three li.shared-three a.xl3").click(function(){
        $(this).find("span").toggleClass("jian").parents().siblings().find("a.xl3 span").removeClass("jian");
        $(this).parents().siblings().find(".ul-shared-four").slideUp(600);
        $(this).siblings(".ul-shared-four").slideToggle(600);
    });
    $(".ul-shared-four li.shared-four a.xl4").click(function(){
        $(this).find("span").toggleClass("jian").parents().siblings().find("a.xl4 span").removeClass("jian");
        $(this).parents().siblings().find(".ul-shared-five").slideUp(600);
        $(this).siblings(".ul-shared-five").slideToggle(600);
    });


    /*正交法添加删除*/
    var liNumber=1;
    $(".orthg-add").click(function(){
        var liadd="<li class='li_"+liNumber+"'><em>相关元素"+liNumber+"</em><span class='br-1'><input class='b-0 w140 mr10 d-ib' type='text' value='蔗糖溶液'></span><em style='margin-right: auto'>确认水平</em><span><a href='javascript:;' class='ml10 mr10 d-ib' id='add_"+liNumber+"'>添加</a><a  href='javascript:;'id='spandel_"+liNumber+"'>删除</a> </span></li>";
        $(".li-add").append(liadd);
        var spanNumber=1;
        $("#add_"+liNumber).click(function(){
            var inputadd="<span class='br-1 span_"+spanNumber+"'><input class='b-0 w70 ml10 text-center mr10 d-ib' type='text' value=''></span>";
            $(this).before(inputadd);
            /*alert(this.id)*/
            spanNumber++;
        });
        $("#spandel_"+liNumber).click(function(){
            $(this).siblings(".span_"+(spanNumber-1)).remove();
            if(spanNumber==1){
                return;
            }
            spanNumber--;
        });

        liNumber++;
    });
    $(".orthg-del").click(function(){
        $(".li_"+(liNumber-1)).remove();
        if(liNumber==1){
            return;
        }
        liNumber--;
    });
});
//全选，全不选
function allSelect() {
    if ($(":checkbox").attr("checked") != "checked") {
        $(":checkbox").attr("checked", "checked");
    }
    else {
        $(":checkbox").removeAttr("checked");
    }
}
//反选
function otherSelect() {
    $(":checkbox").each(function () {
        if ($(this).attr("checked") == "checked") {
            $(this).removeAttr("checked");
        }
        else {
            $(this).attr("checked", "checked");
        }
    });
};


