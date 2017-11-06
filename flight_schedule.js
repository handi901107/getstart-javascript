function checkFlightSchedule(weixin){
    console.log('查询航班信息');
    var scheduleInfo ={
        start:'8/23 8:00',
        end:'8/23 12:00',
        from:'beijing',
        to:'hangzhou'
    };
    weixin(scheduleInfo.to);
}
function  weixin(to) {
  console.log(to);

}
//调用间接函数checkFlightSchedule
checkFlightSchedule(weixin);