window.addEventListener('load', () =>{
    const progress = document.getElementById('progress');
    requestAnimationFrame(update)
})

function update(){
    progress.style.width = `${((window.scrollY) / (document.body.scrollHeight - window.innerHeight) * 100)}%`;
    requestAnimationFrame(update);
}

const carrusel = document.getElementById('carrusel-wrap');

carrusel.addEventListener('touchstart', () => {
    carrusel.style.animationPlayState = 'paused';
})
carrusel.addEventListener('touchend', () => {
    carrusel.style.animationPlayState = 'running';
})