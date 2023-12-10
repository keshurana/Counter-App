
const Result = document.querySelector('.result');
const Increase = document.querySelector('.increase');
const Reset = document.querySelector('.reset');
const Decrease = document.querySelector('.decrease');

Increase.addEventListener('click', () => {
    Result.innerHTML++;
});

Reset.addEventListener('click', () => {
    Result.innerHTML = 0;
});

Decrease.addEventListener('click', () => {
    if (Result.innerHTML === "0") {
        Result.innerHTML = 0;
    } else {
        Result.innerHTML--;
    }
    
});
