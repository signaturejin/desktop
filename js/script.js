////header 영역
//필요한 태그 생성
const header = document.querySelector("#header");
const cont2 = document.querySelector(".creativity");
//스크롤 내리면 헤더 포지션이 fixed로 변경
window.addEventListener("scroll",function(){
    //스크롤이벤트가 발생할때마다 스크롤y의 값을 변수에 담아줌
    let scTop = window.scrollY;
    //cont2의 시작위치값을 변수에 담아줌
    let cont2Start = cont2.offsetTop;

    //헤더는 cont2시작위치값에서 35를 뺀 값이 시작위치이므로
    //현 스크롤값이 cont2Start-35(즉 헤더의 시작위치값)과 같으면 fixed클래스 붙여줌
    if(scTop >= cont2Start - 35){
        header.classList.add("fixed");
    }
    else{
        header.classList.remove("fixed");
    }
});

//메뉴 클릭시 해당 구역으로 이동
//필요한 태그 생성
// const section = document.querySelectorAll("section");
// const gnbMenu = 

//스크롤 기능
window.addEventListener("scroll",function(){
    gnbMenu.forEach(function(item,index){
        item.addEventListener("click",function(e){
            e.preventDefault(); //페이지 이동방지

            //section들의 시작위치값 담기
            let secTop = sections[index].offsetTop;

            window.scrollTo(
                {
                    top: secTop,
                    behavior: "smooth"
                }
            );
        });
    });
});

//mobileMenu 영역
//메뉴버튼 누르면 사이드모바일메뉴가 나타남
//필요한 태그 생성
const menuBtn = document.querySelector("#header .menu");
const mobileMenuBtn = document.querySelector(".mobileMenu .x");
const sideMenu = document.querySelector(".mobileMenu");
const mobileMenu = document.querySelectorAll(".mobileMenu .M-menus li");
//gnb메뉴버튼에 클릭기능 부여

menuBtn.addEventListener("click",function(){
    menuBtn.classList.toggle("close");
    console.log(menuBtn.className);
    if(menuBtn.className == "menu close"){
        sideMenu.style.right = "0";
    }
    else if(menuBtn.className != "menu close"){
        sideMenu.style.right = "-100%";
    }
    
    
});
//모바일메뉴x모양버튼 누르면 사이드메뉴닫힘
mobileMenuBtn.addEventListener("click",function(){
    menuBtn.classList.remove("close");
    sideMenu.style.right = "-100%";
});

//모바일메뉴클릭하면 해당 구역으로 이동
mobileMenu.forEach(function(item,index){
    item.addEventListener("click",function(e){
        e.preventDefault(); //페이지 이동방지

        // 메뉴 옆 > 모양 뜨게하기
        // 다른 것 전부 비활성화
        for(let i=0; i<mobileMenu.length; i++){
            mobileMenu[i].classList.remove("pointer");
        }
        // 해당 태그 활성화
        item.classList.add("pointer");


        //section들의 시작위치값 담기
        let secTop = sections[index].offsetTop;

        window.scrollTo(
            {
                top: secTop,
                behavior: "smooth"
            }
        );
    });
});










