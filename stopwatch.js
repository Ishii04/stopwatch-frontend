let timer;
let running = false;
let time = 0;

function startStop() {
    if (running) {
        clearInterval(timer);
        document.getElementById('startStop').innerHTML = 'Start';
    } else {
        timer = setInterval(updateDisplay, 10);
        document.getElementById('startStop').innerHTML = 'Stop';
    }
    running = !running;
}

function reset() {
    clearInterval(timer);
    running = false;
    time = 0;
    document.getElementById('display').innerHTML = '00:00:00';
    document.getElementById('startStop').innerHTML = 'Start';
}

function updateDisplay() {
    time += 1;
    let milliseconds = time % 100;
    let seconds = Math.floor(time / 100) % 60;
    let minutes = Math.floor(time / 6000) % 60;
    let hours = Math.floor(time / 360000);

    milliseconds = milliseconds.toString().padStart(2, '0');
    seconds = seconds.toString().padStart(2, '0');
    minutes = minutes.toString().padStart(2, '0');
    hours = hours.toString().padStart(2, '0');

    document.getElementById('display').innerHTML = hours + ':' + minutes + ':' + seconds;
}
