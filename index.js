function updateClock() {
    const now = new Date();
    const hour = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hourHand = document.getElementById("hourHand")
    const minuteHand = document.getElementById("minuteHand")
    const secondHand = document.getElementById("secondHand")

    const hourAngle = (hour * 30) + (0.5 * minutes);
    const minuteAngle = (minutes * 6) + (0.1 * seconds);
    const secondAngle = seconds  * 6;

    hourHand.style.transform = `rotate(${hourAngle}deg)`;
    minuteHand.style.transform = `rotate(${minuteAngle}deg)`;
    secondHand.style.transform = `rotate(${secondAngle}deg)`;
}

setInterval(updateClock, 1000);