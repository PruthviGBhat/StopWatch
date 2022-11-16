const time = document.querySelector(' .countdown');
const startbtn = document.getElementById('start');
const stopbtn = document.getElementById('stop');
const resetbtn = document.getElementById('reset');

let seconds = 0;
let interval = null;

startbtn.addEventListener('click', start);
stopbtn.addEventListener('click', stop);
resetbtn.addEventListener('click', reset);

function increment() {
    seconds++;
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds - (hours * 3600)) / 60);
    let seconds2 = seconds % 60;
    if(seconds2<10) seconds2="0"+seconds2;
    if(minutes<10)minutes="0"+minutes;
    if(hours<10)hours="0"+hours;
    time.innerText = `${hours}:${minutes}:${seconds2}`;
}
// increment();
// console.log(increment());
function start(){
    if (interval){
        return;
    }
    interval=setInterval(increment,1000);
}
function stop(){
   clearInterval(interval);
   interval=null;
}
function reset(){
    stop();
    seconds=0;
    time.innerHTML='00:00:00'
}