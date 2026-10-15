function digitalClock(){
    const now  = new Date();
    let hours = now.getHours();
    const merIdeim = hours>12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2, 0);
    const minuts = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);

    const timer = `${hours}:${minuts}:${seconds} ${merIdeim}`;

    document.getElementById("clock").textContent = timer;
}

setInterval(digitalClock, 1000)
