const download = () => {
    let count = 5
    const interval = setInterval(()=>{
        const messageEle = document.getElementById('message')
        messageEle.innerText = `Download begin in ${count} seconds...`
        count--

        if(count === 0){
            clearInterval(interval)
            const a = document.createElement('a')
            a.href = './images/a.jpg'
            a.download = 'cat.jpg'
            a.click()
            messageEle.innerText = ""
            a.remove()
        }
    }, 1000)
}