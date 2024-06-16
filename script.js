
let start=document.getElementById("start")
let head=document.querySelector("h2");
let stop=document.getElementById("stop");
let reset=document.getElementById("reset");

let int;
let count=0;

function clickEvent(){

 int= setInterval(function(){
   let hours=Math.floor((count/3600));
   let minuts=Math.floor((count%3600)/60);
   let seconds=Math.floor((count%60));
   head.textContent=`${hours<10?0:""}${hours}:${minuts<10?0:""}${minuts}:${seconds<10?0:""}${seconds}`
   count++
   console.log(count)
 },1000)

start.disabled=true;
reset.disabled=false;

}

function stopEvent(){
   clearInterval(int)
   start.disabled=false;
   reset.disabled=false;
}

function resetEvent(){
 count=0;
 clearInterval(int)
 start.disabled=false;
 reset.disabled=true;
 head.textContent=`00:00:00`
 
}
reset.addEventListener("click",resetEvent);
stop.addEventListener("click", stopEvent)
start.addEventListener("click",clickEvent)