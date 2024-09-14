let btn = document.querySelector('#btns');
let body = document.querySelector('body');

function btnClick() {
    body.style.backgroundColor = "red";
}


btn.addEventListener('click', btnClick)