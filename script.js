let nums = document.querySelectorAll('.num');
let signs = document.querySelectorAll('.sign');
let dotButton = document.querySelector('#dot');
let resetButton = document.querySelector('#reset');
let backspaceButton = document.querySelector('#backspace');
let sqrtButton = document.querySelector('#sqrt');
let negativeButton = document.querySelector('#negative');

let calView = document.querySelector('.calculate-view span');

let calText;
let haveDot = false;
//write numbers and brackets
Array.from(nums).forEach(element => {
    element.addEventListener('click', e => {
        writeOnCalculateView(element);
    });
});

//write signs
Array.from(signs).forEach(element => {
    element.addEventListener('click', e => {
        writeOnCalculateView(element);
        haveDot = false;
    });
});

//each number need to have only one dot
dotButton.addEventListener('click', e => {
    if (!haveDot) {
        haveDot = true;
        calText = calView.textContent = calView.textContent + '.';
    } else {
        calText = calView.textContent = calView.textContent + '';
    }
});

//make calView empty for another math phrase
resetButton.addEventListener('click', e => {
    calView.textContent = '';
});

//backspace
backspaceButton.addEventListener('click', e => {
    haveDot = false;
    calView.textContent = calView.textContent.substr(0, calView.textContent.length - 1);
});

//square root
sqrtButton.addEventListener('click', e => {
    calView.textContent = calView.textContent + "√(";
});

//make number negative
negativeButton.addEventListener('click', e => {
    calText = calView.textContent = calView.textContent + '-';
});

//this method write the button text on calView
function writeOnCalculateView(elem) {
    let currentChar = elem.textContent;
    calText = calView.textContent += currentChar;
}