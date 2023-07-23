const main = document.getElementById("main");
function start(){

    var btn1 = document.getElementById("btn1");
    btn1.addEventListener("click",setImg1,false);

    var btn2 = document.getElementById("btn2");
    btn2.addEventListener("click",setImg2,false);

    var btn3 = document.getElementById("btn3");
    btn3.addEventListener("click",setImg3,false);

    var btn4 = document.getElementById("btn4");
    btn4.addEventListener("click",setImg4,false);

    var btnNext = document.getElementById("btnNext");
    btnNext.addEventListener("click",next,false);

    var btnPrevious = document.getElementById("btnPrevious");
    btnPrevious.addEventListener("click",previous,false);

    var count=1;
    //div contants
    setImg1();

    setInterval(backgroundImages, 5000);
}

function setImg1(){
    count=2;
    main.classList.add("img1");
    main.classList.remove("img2");
    main.classList.remove("img3");
    main.classList.remove("img4");
}

function setImg2(){
    count=3;
    main.classList.add("img2");
    main.classList.remove("img1");
    main.classList.remove("img3");
    main.classList.remove("img4");
}

function setImg3(){
    count=4;
    main.classList.add("img3");
    main.classList.remove("img1");
    main.classList.remove("img2");
    main.classList.remove("img4");
}

function setImg4(){
    count=1;
    main.classList.add("img4");
    main.classList.remove("img3");
    main.classList.remove("img1");
    main.classList.remove("img2");
}

function next(){
    if(count < 4){
        count++;
    }else{
        count=1;
    }
    main.classList.remove("img1");
    main.classList.remove("img2");
    main.classList.remove("img3");
    main.classList.remove("img4");
    main.classList.add("img"+count);
}
function previous(){
    if(count > 1){
        count--;
    }else{
        count=4;
    }
    main.classList.remove("img1");
    main.classList.remove("img2");
    main.classList.remove("img3");
    main.classList.remove("img4");
    main.classList.add("img"+count);
}

function backgroundImages() {
    switch (count) {
        case 1: setImg1();break;
        case 2: setImg2();break;
        case 3: setImg3();break;
        case 4: setImg4();break;
        default: count=1;break;
    }
}

window.addEventListener("load",start,false);