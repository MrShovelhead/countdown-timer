const countdownTimer = document.getElementById('countdown-timer');
const countdownButton = document.getElementById('start-countdown-btn')
const inputNumberField = document.getElementById('user-number')
let counter = null
let interval = null;

countdownButton.addEventListener('click',function(){
    startCountdown()
})

function changeTimer(){
    
    if (counter > 0){
        countdownTimer.textContent = counter
        counter--
    } else {
        countdownTimer.textContent = "Tiden er gået!";
        clearInterval(interval) //Stopper setInterval
    }
    
}
function startCountdown(){
    clearInterval(interval)
    counter = inputNumberField.value
    interval = setInterval(changeTimer,1000)
}