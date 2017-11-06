function PersonA(){
    console.log('1');
    PersonB();
}
function PersonB(){
    console.log('2');
    personC();
}
function personC(){
    console.log('3');
    PersonD();
}
function PersonD(){
    console.log('4');
}
function startSoundOff(){
    PersonA();
}
startSoundOff();