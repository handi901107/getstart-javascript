var flag=0;
function PersonA(){
    flag = flag + 1;
    console.log(flag);
    if(flag<200){
        PersonA();
    }

}
PersonA();