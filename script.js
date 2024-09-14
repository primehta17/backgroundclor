let container = document.querySelector('.container');
let body = document.querySelector('body');
let hex = document.querySelector('#hexColor');

let color = ['#ba228f', '#ff0000', '#eee8aa', '#008000', '#800080', '#6a5acd', '#ff66cc', '#74c365', '#20b2aa', '#00a86b', '#191970', '#c71585', '#f56991', '#ffe5b4', '#fbab60 '];

function randomColor() {
    return Math.floor(color.length * Math.random());
}

function btnClick() {
    let backgroundcolor = color[randomColor()];
    hex.innerText = backgroundcolor;

    body.style.backgroundColor = backgroundcolor;

}


container.addEventListener('click', btnClick)