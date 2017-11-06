function checkFlightSchedule(weixin) {
    console.log('查询航班信息');

    setTimeout(function () {
        var scheduleInfo = {
            start: '8/23 8:00',
            end: '8/23 12:00',
            from: 'beijing',
            to: 'hangzhou'
        };
        weixin(scheduleInfo.to);
    }, 3000)
}

function weixin(to) {
    console.log('通过反馈渠道获得信息');
    console.log(to);

}

//调用间接函数checkFlightSchedule
checkFlightSchedule(weixin);