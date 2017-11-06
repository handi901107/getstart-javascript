function checkFlightSchedule(){
    console.log('查询航班信息');
    var scheduleInfo ={
        start:'8/23 8:00',
        end:'8/23 12:00',
        from:'beijing',
        to:'hangzhou'
    }
    return scheduleInfo;
}
var scheduleInfo =checkFlightSchedule()
console.log(scheduleInfo);
