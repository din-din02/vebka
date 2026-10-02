// let heading = document.getElementsByTagName('h1');
// let secondHeading = document.getElementById('heading');
let button = document.getElementById('button1');

// let text = secondHeading.innerText;

// let upperText = text.toUpperCase();

// function changeText() {
//     secondHeading.innerText = 'goodbye'
// }

// button.addEventListener('click', changeText);

// button.style.background = 'blue';

// function changeMove(){
//     let x = Math.floor(Math.random() * 600)
//     let y = Math.floor(Math.random() * 600)

//     button.style.position = 'absolute';

//     button.style.left = x + 'px';
//     button.style.top = y + 'px'
// }

// button.addEventListener('mouseover', changeMove);


// console.log(button)

// Удаление пробелов из параграфа
// let par=document.querySelector('p')

// let clean=par.textContent.replace(/\s+/g, '');

// console.log(clean)
// par.textContent=clean


// Убрать все после собаки
// let par=document.querySelector('p')

// function changeText() {
//     par.textContent = par.textContent.split('@')[0];
//     }
// button.addEventListener('click', changeText);


// Текст с нижним подчеркиванием и следующая буква за ним сделать большой, если большая маленькой
// let par=document.querySelector('p')
// function changeText() {
//     let lowerText = par.textContent.toLowerCase();
//     par.textContent = lowerText.replace(/_([a-zа-яё])/g, (_, letter) => {
//         return letter.toUpperCase();
//     });
// }
// button.addEventListener('click', changeText);

// При нажатии на кнопку текст продублируется
let button2 = document.getElementById('button2');
let button3 = document.getElementById('button3');

let par=document.querySelector('p')


function changeText() {
    par.innerText
}
function changeText2() {
    par.innerText= par.innerText.repeat(2)
}
function changeText3() {
    par.innerText=par.innerText.repeat(3)
}

button.addEventListener('click', changeText);
button2.addEventListener('click', changeText2);
button3.addEventListener('click', changeText3);