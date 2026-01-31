const addEffect = (effect) => {
    const picture = document.getElementById('picture');
    picture.className = ""
    console.log(effect);
    picture.classList.add("animate__animated", effect);
    
}