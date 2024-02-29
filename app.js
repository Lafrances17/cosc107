var targetDate = new Date('2025-01-01 00:00:00').getTime();

var countdown = setInterval(function() {
    var currentDate = new Date().getTime();

    var remainingTime = targetDate - currentDate;
        

    var days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    var hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;

    if (remainingTime < 0) {
        clearInterval(countdown);
        document.getElementById('countdown').innerHTML = 'Countdown expired';
    }
}, 1000); 