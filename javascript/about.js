

const btnNext =document.getElementById('btn1Next');
const btnPrevious =document.getElementById('btn1Previous');

const slider =document.querySelector('.items');
let isDown =false;
let startX;
let scrollLeft;
let last=0;
slider.addEventListener('mousedown',(e) =>{
isDown = true;
startX =e.pageX -slider.offsetLeft;
scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave',() =>{
isDown = false;
});
slider.addEventListener('mouseup',() =>{
isDown = false;
});
slider.addEventListener('mousemove',(e) =>{
if(!isDown) return;
e.preventDefault();
const x =e.pageX - slider.offsetLeft;
const walk = (x -startX)*1.5;
last=Math.ceil(scrollLeft - walk);
slider.scrollLeft = last;
});

btnNext.addEventListener('click',() =>{
let newValue=(last+400 > 730)? 730:last+400;
var slideTimer= setInterval(function(){
    last+=10;
    slider.scrollLeft = last;
    if(last >= newValue){
        window.clearInterval(slideTimer);
    }
}, 10);
});

btnPrevious.addEventListener('click',() =>{
let newValue=(last-400 < 0)? 0:last-400;
var slideTimer= setInterval(function(){
    last-=10;
    slider.scrollLeft = last;
    if(last <= newValue){
        window.clearInterval(slideTimer);
    }
}, 10);
});