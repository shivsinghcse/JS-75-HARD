const timeEle = document.getElementById('time')
setInterval(()=>{
    const time = new Date().toLocaleTimeString()
    timeEle.innerHTML = time
}, 1000)