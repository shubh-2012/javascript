// Create eventListener to all the button 
// All button should be able to play a different sound.

const drumButton = document.getElementsByClassName("w drum");

drumButton[0].addEventListener("click",(event)=>{
    console.log('key pressed');
});