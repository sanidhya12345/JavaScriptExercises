var d=document.querySelector('#box');
var btn=document.getElementById('submit');
function changeColor(e){
    e.preventDefault();
    let c="rgb(255, 215, 0)"?"rgb(255,25,10)":"rgb(255, 215, 0)";
    d.style.backgroundColor="rgb(255,25,10)";
}
btn.onclick=changeColor;