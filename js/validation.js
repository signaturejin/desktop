// cont11 영역
// 필요한 변수 생성
const inputs = document.querySelectorAll(".inputWrap input");
const formBtn = document.querySelector(".formBtn");
const msg = document.querySelectorAll(".inputWrap .msg");
let allCheck = "";

console.log(msg);

//배열객체 생성
let inputArray = [
    {
        check: /^[ㄱ-힣]{2,10}$/,
        okmsg: "ok",
        nomsg: "한글만 입력할 수 있습니다. 다시 입력해주세요.",
        lastCheck: false
    },
    {
        check: /^[\w]+\@+[a-z]+\.+[a-z]{2,3}$/,
        okmsg: "ok",
        nomsg: "이메일 형식이 틀렸습니다. 다시 입력해주세요.",
        lastCheck: false
    },
    {
        check: /^[0-9]{1,20}$/,
        okmsg: "ok",
        nomsg: "20글자 입력가능합니다. 다시 입력해주세요.",
        lastCheck: false
    },
    {
        check: /^[\w\!\@\#\$]{3,20}$/,
        okmsg: "ok",
        nomsg: "한글, 영문 대소문자, 숫자, 특수문자 !,@,#,$만 입력가능 합니다.",
        lastCheck: false
    }
];

//반복문 사용
inputs.forEach(function(item,index){
    //손가락이 키보드를 누르고 떠났을 때
    item.addEventListener("keyup",function(){
        //input의 값들을 가져와서 변수에 대입
        let inputValue = item.value;
        
        //배열객체에 있는 정규표현식을 변수에 대입
        let inputCheck = inputArray[index].check;

        //test()함수를 통해 정규표현식에 맞는지 확인
        let inputComplete = inputCheck.test(inputValue);

        if(inputComplete){//정규표현식이 맞다면
            msg[index].classList.remove("no");
            msg[index].classList.add("ok");
            msg[index].innerHTML = inputArray[index].okmsg; //okmsg출력
            inputArray[index].lastCheck = true; //프로퍼티 lastcheck을 true값으로 변경
        }
        else if(inputComplete == false){//틀리다면
            msg[index].classList.remove("ok");
            msg[index].classList.add("no");
            msg[index].innerHTML = inputArray[index].nomsg; //nomsg출력
            inputArray[index].lastCheck = false; //프로퍼티 lastcheck을 false값으로 변경
        }

    });
});

//버튼클릭시 알림창으로 오류메세지 출력
formBtn.addEventListener("click",function(e){
    e.preventDefault();//페이지 이동 방지

    //every함수를 이용해서 inputArray.lastCheck가 전부 true인지 확인하고 맞으면 allCheck에 대입
    allCheck = inputArray.every(e => e.lastCheck == true);

    if(allCheck){
        alert("올바른 형식입니다.");
    }
    else{
        alert("다시 입력해주세요.");
    }
});