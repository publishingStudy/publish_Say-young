const banner = document.getElementById('imgSlide');
const slide01 = document.getElementById('slide01');
const slide02 = document.getElementById('slide02');
const slide03 = document.getElementById('slide03');
const slide04 = document.getElementById('slide04');
const slide05 = document.getElementById('slide05');
const slide06 = document.getElementById('slide06');

var imgIdx = 0;
const imgArray = [
  "img/main_PC_1920x440_20201006040046969.jpg",
  "img/main_PC_1920x440_20201028065401190.jpg",
  "img/main_PC_1920x440_20201029050402793.jpg",
  "img/main_PC_1920x440_20201029105140247.jpg",
  "img/main_PC_1920x440_20201030114325133.jpg",
  "img/main_PC_1920x440_20201007112359990.jpg",
];
const slideBtn = [
    slide01,
    slide02,
    slide03,
    slide04,
    slide05,
    slide06
]

window.onload = setInterval(() => {
    banner.setAttribute("src",imgArray[imgIdx]);
    //라디오 버튼 idx 따라서 선택되도록 하기
    //slideBtn[imgIdx]...뭘까?
    imgIdx+=1;
    if(imgIdx>=imgArray.length){
        imgIdx = 0;
    }
},3000);

function checkRadioBtn (Btn) {
    if(Btn == "slide01"){
        banner.setAttribute("src",imgArray[0]);
        imgIdx=0;
    }else if(Btn == "slide02"){
        banner.setAttribute("src",imgArray[1]);
        imgIdx=1;
    }else if(Btn == "slide03"){
        banner.setAttribute("src",imgArray[2]);
        imgIdx=2;
    }else if(Btn == "slide04"){
        banner.setAttribute("src",imgArray[3]);
        imgIdx=3;
    }else if(Btn == "slide05"){
        banner.setAttribute("src",imgArray[4]);
        imgIdx=4;
    }else if(Btn == "slide06"){
        banner.setAttribute("src",imgArray[5]);
        imgIdx=5;
    }
}

