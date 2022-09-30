//스크롤
//section들을 담아줄 배열변수
let sections = document.querySelectorAll(".section");
const gnbMenu = document.querySelectorAll(".gnb li");

let secStart = [];

let moveStop = true;

window.addEventListener("scroll",function(){
    //스크롤의 위치를 알려줄 변수 생성
    let scTop = window.scrollY;
    //반복문을 이용하여 각 세션의 시작위치값을 알려주는 배열 생성
    sections.forEach(function(item,index){
        secStart[index] = item.offsetTop;
    });
    
    //if문을 사용해서 해당 구역에서 특정동작이 일어나게 만들기
    //스크롤 하였을 때 해당 구역에 가면 그 구역에 맞게 메뉴가 활성화되는 기능 포함
    if(scTop >= secStart[0] && scTop < secStart[1]){
        // gnb메뉴 색변경 전 전부 비활성화
        gnbMenuColor();
        // 해당 구역에 도달하면 gnb메뉴 색 변경
        gnbMenu[0].classList.add("color");
    }
    else if(scTop >= secStart[1] && scTop < secStart[2]){
        // gnb메뉴 색변경 전 전부 비활성화
        gnbMenuColor();
        // 해당 구역에 도달하면 gnb메뉴 색 변경
        gnbMenu[1].classList.add("color");

        //sideBox 양쪽에서 나오게 하는 명령어
        document.querySelector(".creativity .sideBox").classList.add("show");
        // 한 번 동작 후 멈추게 하기 위한 if문(숫자 카운트 관련 함수)
        if(moveStop == true){
            countValue.forEach(function(element){
                total(element.inc,element.comp,element.tag,element.speed);
            });
            // moveStop = false;
        }
    }
    else if(scTop >= secStart[2] && scTop < secStart[3]){
        // gnb메뉴 색변경 전 전부 비활성화
        gnbMenuColor();
        // 해당 구역에 도달하면 gnb메뉴 색 변경
        gnbMenu[2].classList.add("color");
    }
    else if(scTop >= secStart[3] && scTop < secStart[4]){
        // gnb메뉴 색변경 전 전부 비활성화
        gnbMenuColor();
        // 해당 구역에 도달하면 gnb메뉴 색 변경
        gnbMenu[3].classList.add("color");
    }
    else if(scTop >= secStart[4] && scTop < secStart[5]){
        // gnb메뉴 색변경 전 전부 비활성화
        gnbMenuColor();
        // 해당 구역에 도달하면 gnb메뉴 색 변경
        gnbMenu[4].classList.add("color");
    }
    else if(scTop >= secStart[5]){
        // gnb메뉴 색변경 전 전부 비활성화
        gnbMenuColor();
        // 해당 구역에 도달하면 gnb메뉴 색 변경
        gnbMenu[5].classList.add("color");
    }

    // secStart.forEach(function(item,index){
    //     if(scTop >= secStart[index] && scTop < secStart[index + 1]){
    //         //gnb메뉴 색상 비활성화
    //         gnbMenuColor();
    //         //해당 태그만 활성화
    //         gnbMenu[index].classList.add("color");
    //         //secStart[5]라면 gnbMenu[5]에 클래스 color를 추가
    //         if(scTop >= secStart[5]){
    //             gnbMenuColor();
    //             gnbMenu[5].classList.add("color");
    //         }
    //     }
    // });
});

// gnb메뉴 색상 비활성화 관련 함수
function gnbMenuColor(){
    // gnb메뉴 색변경 전 전부 비활성화
    gnbMenu.forEach(function(item,index){
        item.classList.remove("color");
    });
}
