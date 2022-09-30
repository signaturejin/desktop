//work(cont8)구역에 isotope 기능구현
//필요한 태그 생성
const workWrap = document.querySelector(".workWrap");
const workBtn = document.querySelectorAll(".workBtn li");

//workBtn을 클릭하면 정렬되도록 클릭 기능 부여
workBtn.forEach(function(item,index){
    item.addEventListener("click",function(e){
      e.preventDefault(); //페이지 이동 방지

      //li태그 색상 전부 비활성화
      for(let i=0; i<workBtn.length; i++){
        workBtn[i].classList.remove("show");
      }
      //해당 태그만 색상 활성화
      item.classList.add("show");

      //해당 속성값을 가져와서 변수에 대입시키고 정렬
      let data = item.getAttribute("data-port");
      iso.arrange({
          filter: data,
          transitionDuration: '0.5s'
        })
    });
});

//isotope기능 구현
let elem = document.querySelector('.workWrap');
let iso = new Isotope( elem, {
  // options
  itemSelector: '.workBox',
  layoutMode: 'masonry'
});