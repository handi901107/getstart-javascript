var age=18;
var myLikeColorList = ['blue','green','white','black'];
console.log('\n');
if(age >= 18){
    console.log('已经成年');
} else{
    console.log('未成年');
}
console.log('\n');
switch (age >=18){
    case true:
        console.log('成年了');
    case false:
        console.log('未成年');
        break;
    default:   //当所有条件都不符合时的默认路径
        console.log('not a human');
}
console.log('\n');
for(var i = 0;i<myLikeColorList.length;i++){
    console.log(myLikeColorList[i]);
}
var i = 0 ;
//js里面一个;代表一个空语句
for(;i<myLikeColorList.length;i++){
    console.log(myLikeColorList[i]);
}

//创新的轮询数组的技巧
for(var i=0,j = myLikeColorList.length - 1;i<myLikeColorList.length/2;i++,j--){
    console.log(myLikeColorList[i]);
    console.log(myLikeColorList[j]);
}
console.log('\n');
