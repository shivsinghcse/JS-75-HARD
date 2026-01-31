const picture = document.getElementById('picture');

const addEffect = (effect) => {
    picture.classList.add("animate__animated", effect);
} 

const removeEffect = () => {
    // picture.classList.remove('animate__rubberBand')
    picture.className = ""
}