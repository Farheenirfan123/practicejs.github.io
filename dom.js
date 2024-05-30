// document.getElementById('heading').innerText  +=  ' from Apna college Students'

// let divs = document.querySelectorAll('.box')

// let idx = 0
// for (val of divs) {
// val.innerText = `value of divs ${idx}`;
// idx++;
// }
let btn = document.createElement('button');
btn.innerText = 'Click me';
btn.style.backgroundColor = 'red';
btn.style.color = 'white'; 

document.querySelector('body').prepend(btn)

//qno2

// let p = document.querySelector('p');
// p.classList('content');

// q no 3

let btnmode = document.querySelector('#btn');
let body = document.querySelector('body');
let mode = 'light';


btnmode.addEventListener('click', ()=>{
    if(mode === 'light') {
        mode = 'dark'
        body.style.backgroundColor = 'black'
    }else{
     mode = 'light'
     body.style.backgroundColor = 'white'
    }
    console.log(mode)
})
