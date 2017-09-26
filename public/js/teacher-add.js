/**
 * Created by Administrator on 2017/9/26.
 */
require(['jquery','template','util'],function ($,template,util) {
   var  tcId=util.qs('tc_id');
    // console.log(tcId);
    if(tcId){
        //编辑
        $.ajax({
            type:"get",
            url:"/api/teacher/edit",
            data:{tc_id:tcId},
            dataType:"json",
            success:function (data) {
                // console.log(data);
                data.result.operate="编辑讲师";
                var html=template('teacherTpl',data.result);
                $("#teacherInfo").html(html);
            }
        })
    }else{
        //添加
        var html=template('teacherTpl',{operate:"添加讲师"});
        $("#teacherInfo").html(html);
    }
    
})