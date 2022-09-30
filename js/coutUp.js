//cont3 box안 숫자 자동증가 js
// 변수 및 상수 생성
const boxs = document.querySelectorAll(".box > .nummber");

let countValue = [
    {
        inc: 20,
        comp: 1391,
        tag: boxs[0],
        speed: 15
    },
    {
        inc: 10,
        comp: 445,
        tag: boxs[1],
        speed: 15
    },
    {
        inc: 5,
        comp: 133,
        tag: boxs[2],
        speed: 15
    },
    {
        inc: 14,
        comp: 775,
        tag: boxs[3],
        speed: 15
    },
    {
        inc: 30,
        comp: 555,
        tag: boxs[4],
        speed: 15
    }
    
];

//total 함수 정의
function total(inc,comp,tag,speed){
    moveStop = false;
    //변수 생성
    let num = 0;

    //자동으로 숫자 증가하게 해주는 기능
    let countUp = setInterval(function(){
        //증감값(inc)정해서 변수 num에 더하며 넣기
        num += inc;

        if(num >= comp){ //num의 숫자가 목표숫자(comp)보다 크거나 같다면
            clearInterval(total); //자동 함수 그만
            //목표 숫자 보여주기
            tag.innerHTML = comp;
        }
        else{
            //숫자가 올라가는 중일 때
            tag.innerHTML = num;
        }
    }, speed);
}