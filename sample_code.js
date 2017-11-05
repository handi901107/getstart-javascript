var name = 'xiaoming';
var age = 18;
var height = 170, weight = 130.01;
var isNan = true;
var stuednt = false;
var xinsheng_user_name = 'xiaoming';
var wechatUserName = 'xiaoming';
var locationBase = 'beijing';
var company = locationBase + '新生大学';
var myLikeColorList = ['blue', 'green', 'black', 'white'];
var my_like_foods = ['niuroumian', 'daoxiaomian', '拉面', 'dunpling'];
//声明并定义变量
var myJavaScriptLessonInfo = {
    teacher: name,
    teacher_wechat: wechatUserName,
    title: 'java入门技巧',
    beginTime: '2018/11/5',
    boysStudents: 417,
    girlsStudent: 419,
    lessonTarget: 'javascript 入门',
    eat: my_like_foods,
    color: myLikeColorList,
    xinshengusername:xinsheng_user_name,
    company: company
};
console.log('姓名');
console.log(name);
console.log("年龄:" + age);
console.log('身高=' + height + '.体重=' + weight);
console.log('地点=' + locationBase);
console.log('公司=' + company);
console.log('\n');
console.log('------我喜欢的食物-------');
console.log(my_like_foods[0]);
console.log(my_like_foods[1]);
console.log(my_like_foods[2]);
console.log(my_like_foods[3]);
console.log('\n');
console.log('我龚总喜欢' + my_like_foods.length + '钟食物');
for (var i = 0; i < myLikeColorList.length; i++) {
    console.log(myLikeColorList[i]);
}
console.log();
console.log('------------');
console.log('javascript课程信息');
console.log(myJavaScriptLessonInfo);

console.log('\n');
console.log('###############');

var xiaoming = {
    name: name,
    config: {
        height: height,
        isNan: isNan,
        student: stuednt
    },
    like: {
        myLikeColorsList: myLikeColorList,
        myLikeFoods: my_like_foods
    },
    work: {
        locationbase:locationBase,
        company:company
    },
    myLessonInfo:myJavaScriptLessonInfo

}
console.log(xiaoming);
