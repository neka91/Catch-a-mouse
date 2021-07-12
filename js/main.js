window.onload = build;

let startPage = document.querySelector('.startPage');
let playPage = document.querySelector('.playPage');
let turnOff = true;
let boxes = 9;
let score = 0;
let mouse,
    timer,
    showMouse;

function build() {
    let html = '<h3>Catch a mouse!</h3><br><div class="score">Score: 0</div>';
    for (let i = 0; i < boxes; i++) {
        html += '<div class="box"><div class="caption"></div><div class="mouse"></div></div>';
    }
    html += '<input type="button" onclick="finish()" value="Finish Game" class="finishBtn">';
    document.querySelector('.gameboard').innerHTML = html;
    mouse = document.querySelectorAll('.mouse');
    for (let i = 0; i < mouse.length; i++) {
        mouse[i].addEventListener('click', hitMouse, false);
    }
}

function start() {
    startPage.style.display = "none";
    playPage.style.display = "block";
    score = 0;
    document.querySelector('.score').innerHTML = 'Score: ' + score;
    popUp();
}

function popUp() {
    turnOff = true;
    showMouse = mouse[Math.floor(Math.random() * mouse.length)];
    showMouse.classList.add('popUp');
    timer = setTimeout(hideMouse, 2000);
}

function hideMouse() {
    showMouse.classList.remove('popUp');
    popUp();
}

function hitMouse(event) {
    event.target.classList.remove('popUp');
    if (turnOff) {
        turnOff = false;
        score++;
        document.querySelector('.score').innerHTML = 'Score: ' + score;
    }
    popUp();
}

function finish() {
    playPage.style.display = "none";
    startPage.style.display = "block";
}