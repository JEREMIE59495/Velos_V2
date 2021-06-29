let statingMinute =30;
let time= statingMinute*60;

const countDownel = document.getElementById('timer');

setInterval(updateCountDown,1000);

function updateCountDown(){
    const minutes = Math.floor(time/60)
    let seconds =time %60;
    countDownel.innerHTML=`${minutes}: ${seconds}`;
}
