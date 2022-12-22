let p1 = 'No name';
let p2 = 'No name';

function end() {
    window.location.reload();
}
function start() {
    p1 = prompt("Please enter your name", "Harry Potter");
    p2 = prompt("Please enter your name", "Harry Potter");
    if (p1 !== null)
        document.querySelector(".p1").innerHTML = `<h1>${p1}</h1>`;
    if (p2 !== null)
        document.querySelector(".p2").innerHTML = `<h1>${p2}</h1>`;
    document.getElementById("hello1").style.visibility = 'visible';
    document.getElementById("hello1").style.border = '2px white solid';
    document.getElementById("hello2").style.visibility = 'visible';
    document.getElementById("start").style.visibility = 'hidden';
    document.getElementById("end").style.visibility = 'visible';
}


function dice1() {
    document.getElementById("hello1").disabled = true;
    document.getElementById("hello1").style.border = 'none';
    let a = Math.round(Math.random() * 5 + 1);
    document.getElementById("hello2").style.border = '2px white solid';
    document.getElementById("dice1").setAttribute("src", `Images/Dice_${a}.png`);
    document.getElementById("gif1").setAttribute("src", `Images/${a}.gif`);
    let audio = new Audio("Source/dice-95077.mp3");
    audio.play();
    document.getElementById("hello2").removeAttribute('disabled');
}


function dice2() {
    document.getElementById("hello2").disabled = true;
    document.getElementById("hello2").style.border = 'none';
    let b = Math.round(Math.random() * 5 + 1);
    document.getElementById("hello1").style.border = '2px white solid';
    document.getElementById("dice2").setAttribute("src", `Images/Dice_${b}.png`);
    document.getElementById("gif2").setAttribute("src", `Images/${b}.gif`);
    let audio = new Audio("Source/dice-95077.mp3");
    audio.play();
    document.getElementById("hello1").removeAttribute('disabled');
}

