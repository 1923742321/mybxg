/**
 * Created by Administrator on 2017/9/21.
 */
define(['jquery','template','bootstrap'],function ($,template) {
    $.ajax({
        type:"get",
        url:"/api/teacher",
        dataType:"json",
        success:function (data) {
              // console.log(data);
             var html=template("teacherTpl",{list:data.result})
             $("#teacherInfo").html(html);
             // console.log(2);
            $(".eod").click(function () {
                var that=this;
                var td=$(this).parent();
                // console.log(td);
                var tcId=td.attr("data-tcId");
                var status=td.attr("data-status");
                // console.log(tcId,status);
                $.ajax({
                    type:'post',
                    url:'/api/teacher/handle',
                    data:{tc_id:tcId,tc_status:status},
                    dataType:"JSON",
                    success:function (data) {
                        if(data.code==200){
                            td.attr("data-status",data.result.tc_status);
                            if(data.result.tc_status==0){
                                $(that).text("注销");
                            }else{
                                $(that).text("启用");
                            }
                        }
                    }
                })
            })
        //    查看讲师
            $(".preview").click(function () {
                var td=$(this).closest("td");
                var tcId=td.attr("data-tcId");
                var status=td.attr("data-status");
                 $.ajax({
                     type:"GET",
                     url:"/api/teacher/view",
                     data:{tc_id:tcId},
                     dataType:"json",
                    success:function (data) {
                        // console.log(data);
                        var html=template("modalTpl",data.result);
                        $("#modalInfo").html(html);
                        $("#teacherModal").modal();
                    }
                 })
            })
        }
    })
    // console.log(1);

})
