let text = document.querySelector(".text");
let textvisi = document.querySelector(".textvisible");

text.addEventListener('input', () => {
    textvisi.innerText = text.value; 
});
