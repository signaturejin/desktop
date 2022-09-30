//cont8 영역
//peopleBtn 클릭 시 슬라이드 화면 전환
//필요한 태그 생성
const sliderWrap = document.querySelector(".view .sliderWrap");
const peopleBtn = document.querySelectorAll(".peopleBtn li");

peopleBtn.forEach(function(item,index){
    item.addEventListener("click",function(e){
        e.preventDefault(); //페이지 이동 방지
        // 버튼 전부 비활성화
        for(let i=0; i<peopleBtn.length; i++){
            peopleBtn[i].classList.remove("color");
        }
        // peopleBtn.forEach(function(item,index){
        //     peopleBtn.classList.remove("color");
        // });
        // 해당되는 버튼 활성화
        item.classList.add("color");
        
        // 페이지 넘김
        sliderWrap.style.marginLeft = -100 * index + "%";

    });
});

