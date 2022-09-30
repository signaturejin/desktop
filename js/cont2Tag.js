//cont2 list 3개 js
// 화면에 list를 보여줄 변수
let rightBox = document.querySelector(".rightBox");
let showList = "";

// cont2 영역의 list들을 만들어줄 배열객체
let creaList = [
    {
        icon : "horizontal_split",
        h3 : "Unique Layout",
        p : "A robust, multipurpose template built with modularity at<br>the core"
    },
    {
        icon : "bar_chart",
        h3 : "Online Live Support",
        p : "You can build your site in-browser with modular<br>interface blocks."
    },
    {
        icon : "storage",
        h3 : "Responsive Design",
        p : "There are many variations of passages of Lorem ipsum<br>available."
    }
];

creaList.forEach(function(element){
    
    showList += `<div class='list'>
                    <span class='material-symbols-outlined'>${element.icon}</span>
                    <div class='listText'>
                        <h3>${element.h3}</h3>
                        <p>
                            ${element.p}
                        </p>
                    </div>
                </div>`

    rightBox.innerHTML = showList;
});