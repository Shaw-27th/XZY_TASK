function mouseOver(id){
    var element = document.getElementById(id);
    element.style.color='white';
    element.style.backgroundColor='orange';
}
function mouseOut(id){
    var element = document.getElementById(id);
    element.style.color='orange';
    element.style.backgroundColor='white';
}

var intervalFlag = false;
var intervalNum;
function start(id) {
    if(intervalFlag){

    }
    else{
        intervalFlag=true;
        blink();
        intervalNum=setInterval("blink()",500);
    }
}

function end(id) {
    if(intervalFlag){
        clearInterval(intervalNum)
        intervalFlag=false;
        clear9Sqr();
    }
    else{

    }
}

function blink() {


    for(var i = 0;i<9;i++){
        var e = document.getElementById('s'+(i+1));
        e.style.backgroundColor='orange';
    }

    var firstNum, firstSqr, firstColor;
    var secondNum, secondSqr, secondColor;
    var thirdNum, thirdSqr, thirdColor;
    firstNum = Math.round(Math.random() * 8)+1;
    secondNum = Math.round(Math.random() * 8)+1;
    thirdNum = Math.round(Math.random() * 8)+1;
    while (secondNum == firstNum) {
        secondNum = Math.round(Math.random() * 8)+1;
    }
    while (thirdNum == firstNum || thirdNum == secondNum) {
        thirdNum = Math.round(Math.random() * 8)+1;
    }

    firstSqr='s'+(firstNum);
    secondSqr='s'+(secondNum);
    thirdSqr='s'+(thirdNum);

    console.log(firstSqr+" "+secondSqr+" "+thirdSqr);

    var firstElement = document.getElementById(firstSqr);
    var secondElement = document.getElementById(secondSqr);
    var thirdElement = document.getElementById(thirdSqr);

    var firstRgb = 'rgb('+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+')';
    var secondRgb = 'rgb('+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+')';
    var thirdRgb = 'rgb('+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+')';

    firstElement.style.backgroundColor = firstRgb;
    secondElement.style.backgroundColor = secondRgb;
    thirdElement.style.backgroundColor = thirdRgb;
}

function clear9Sqr() {
    for(var i = 0;i<9;i++){
        var e = document.getElementById('s'+(i+1));
        e.style.backgroundColor='orange';
    }
}