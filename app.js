const closeBtn = document.getElementById('close-btn');
const mainEl = document.querySelector('main');
const giftBtn = document.getElementById('gift');



closeBtn.addEventListener('click', () => {
    mainEl.classList.add('hidden');


    setTimeout(() => {
        mainEl.classList.remove('hidden')
    }, 2000)
})


giftBtn.addEventListener('click', () => {
    for(let i = 0; i < 100; i++) {
        createSnowFlake();
    }
})



function createSnowFlake () {
    const snowEl = document.createElement('div');
    snowEl.classList.add('snow');

    snowEl.style.animationDelay = Math.random() * 3 + 's'

    snowEl.style.left  = Math.random() * window.innerWidth + 'px'
    document.body.appendChild(snowEl);


    setTimeout(() => {
        snowEl.remove();
    }, 10000)
}