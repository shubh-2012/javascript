// Create eventListener to all the button 
// All button should be able to play a different sound.

// const drumButton = document.getElementsByClassName("w drum");

// drumButton[0].addEventListener("click",(event)=>{
//     console.log('key pressed');
// });

// Create eventListener to all the button 
// All button should be able to play a different sound.

const drumButton = document.querySelectorAll(".drum");
console.log(drumButton);
const audio1 = new Audio("https://files.codingninjas.in/tom-1-28537.mp3?_ga=2.222924633.318768322.1714142765-2117086062.1710780765");
const audio2 = new Audio("https://files.codingninjas.in/tom-2-28541.mp3?_ga=2.168412259.318768322.1714142765-2117086062.1710780765");
const audio3= new Audio("https://files.codingninjas.in/tom-3-28542.mp3?_ga=2.168412259.318768322.1714142765-2117086062.1710780765");
const audio4 = new Audio("https://files.codingninjas.in/tom-4-28543.mp3?_ga=2.222923993.318768322.1714142765-2117086062.1710780765");
const audio5 = new Audio("https://files.codingninjas.in/snare-28545.mp3?_ga=2.222923993.318768322.1714142765-2117086062.1710780765");
const audio6 = new Audio("https://files.codingninjas.in/crash-28546.mp3?_ga=2.222923993.318768322.1714142765-2117086062.1710780765");
const audio7 = new Audio("https://files.codingninjas.in/kick-bass-28547.mp3?_ga=2.222923993.318768322.1714142765-2117086062.1710780765");
drumButton[0].addEventListener("click",(event)=>{
    console.log('key pressed w');
    audio1.play();
});
document.addEventListener("keypress",(event)=>{
    if (event.key === 'w'){
        audio1.play();
    } 
    if (event.key === 'a'){
        audio2.play();
    } 
    if (event.key === 's'){
        audio3.play();
    } 
    if (event.key === 'd'){
        audio4.play();
    } 
    if (event.key === 'j'){
        audio5.play();
    } 
    if (event.key === 'k'){
        audio6.play();
    } 
    if (event.key === 'l'){
        audio7.play();
    } 
    
});
drumButton[1].addEventListener("click",(event)=>{
    console.log('key pressed w');
    audio2.play();
});
drumButton[2].addEventListener("click",(event)=>{
    console.log('key pressed w');
    audio3.play();
});
drumButton[3].addEventListener("click",(event)=>{
    console.log('key pressed w');
    audio4.play();
});
drumButton[4].addEventListener("click",(event)=>{
    console.log('key pressed w');
    audio5.play();
});
drumButton[5].addEventListener("click",(event)=>{
    console.log('key pressed w');
    audio6.play();
});
drumButton[6].addEventListener("click",(event)=>{
    console.log('key pressed w');
    audio7.play();
});
drumButton[7].addEventListener("click",(event)=>{
    console.log('key pressed w');
    audio8.play();
});