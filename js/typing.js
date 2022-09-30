////container 영역
//cont1 타이핑 js
//화면에 문자를 출력시켜줄 태그 생성
let typing = document.querySelector(".typing .text");
//문자를 담아줄 배열 변수 생성
let context = ["Publisher","Web Disgner","Front end","Back end"]; //문자 길이 9 / 배열 0~8
//카운트 변수 2개 생성(증가시킬 변수 / 감소시킬 변수)
let plusCount = 0; //문자열 하나씩 나오게 하기 위한 변수
let minusCount; // 문자열 하나씩 빼주기 위한 변수
let strNumber = 0; // 배열에 있는 문자열들을 순서대로 나오게 하기 위한 변수

//텍스트 관련 자동함수 생성
let autoTyping = setInterval(function(){
    //텍스트 쓰고 지우는 함수 호출
    typingView();
},200);

//텍스트 쓰고 지우는 함수
function typingView(){
    //텍스트를 하나씩 보여줌
    if(plusCount < context[strNumber].length){//plusCount의 값이 텍스트 길이보다 작거나 같을때
        typing.innerText += context[strNumber].charAt(plusCount);//텍스트의 문자들을 해당 태그에 하나씩 출력시켜줌
        plusCount++;//카운트를 증가시켜 다음 문자가 나올수 있도록 함
        //plusCount가 텍스트 길이값보다 커졌을 때
        if(plusCount >= context[strNumber].length){
            //plusCount의 값을 minusCount에 대입시켜준다.
            //현재 plusCount의 값은 텍스트 문자길이값과 같다.
            minusCount = context[strNumber].length;
            // minusCount = context.length;
            //기다렸다가 다시 텍스트 출력해주는 함수
            reTyping();
        }
    }
    //텍스트를 하나씩 지워줌
    else if(minusCount >= 0){
        typing.innerText = context[strNumber].substring(0,minusCount);
        minusCount--;
        if(minusCount < 0){
            plusCount = 0;
            //한 문자열이 쓰여졌다가 사라졌으면 strNumber를 하나 증가시켜
            //다음 문자열이 출력되도록 한다.
            if(strNumber == context.length - 1){
                strNumber = 0;
            }
            else{
                strNumber++;
            }
            //기다렸다가 다시 텍스트 출력해주는 함수
            reTyping();
        }
    }
}

//5초 기다렸다가 다시 텍스트 자동함수 실행하게 해주는 함수
function reTyping(){
    //텍스트가 전부 화면에 출력되면 멈춰준다.
    clearInterval(autoTyping);
    //3초 기다렸다가 다시 자동재생을 해주기 위한 함수
    setTimeout(function(){
        autoTyping = setInterval(function(){
            typingView();
        },200);
    },2000);
}
