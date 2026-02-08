const images = [
        './images/car1.jpg',
        './images/car2.jpg', 
        './images/car3.jpg', 
        './images/car4.jpg', 
        './images/car5.jpg', 
        './images/car6.jpg'
    ]

const imageEle = document.getElementById('slide-image')
const rightBtn = document.getElementById('right-btn')
const leftBtn = document.getElementById('left-btn')
const imageCountEle = document.getElementById('image-count')

let index = 0;

// initial 
imageEle.src = images[index]
imageEle.alt = `${images[0]}`.slice(9)
imageCountEle.innerText = `${index+1}/${images.length}`

const nextImage = () => {
    if(index < images.length){
        index++

        imageEle.src = images[index]
        imageEle.alt = `${images[index]}`.slice(9)
        
        imageCountEle.innerText = `${index+1}/${images.length}`

        leftBtn.disabled = false
        if(!leftBtn.classList.contains('active:scale-95')){
            leftBtn.classList.add('active:scale-95')
        }

        if(index === images.length-1){
            rightBtn.disabled = true
            rightBtn.classList.remove('active:scale-95') 
        }
    }
}

const previousImage = () => {
    if(index > 0){
        index--

        imageEle.src = images[index]
        imageEle.alt = `${images[index]}`.slice(9)  

        imageCountEle.innerText = `${index+1}/${images.length}`  

        rightBtn.disabled = false
        if(!rightBtn.classList.contains('active:scale-95')){
            rightBtn.classList.add('active:scale-95')
        }

        

        if(index === 0){
            leftBtn.disabled = true
            leftBtn.classList.remove('active:scale-95')
        }
    }
}


document.addEventListener('keydown', (e) => {
    if(e.key === 'ArrowRight'){
        nextImage()
    }

    if(e.key === 'ArrowLeft'){
        previousImage()
    }
})

// setInterval(()=>{
//     if(index < images.length-1 ){
//         nextImage()
//         if(index === images.length-1){
//             index = -1
//         }
//     }
    
// }, 3000)


// optimized code

// const images = [
//   './images/car1.jpg',
//   './images/car2.jpg',
//   './images/car3.jpg',
//   './images/car4.jpg',
//   './images/car5.jpg',
//   './images/car6.jpg'
// ]

// const imageEle = document.getElementById('slide-image')
// const rightBtn = document.getElementById('right-btn')
// const leftBtn = document.getElementById('left-btn')

// let i = 0

// // initial state
// imageEle.src = images[i]
// leftBtn.disabled = true

// const updateButtons = () => {
//   leftBtn.disabled = i === 0
//   rightBtn.disabled = i === images.length - 1

//   leftBtn.classList.toggle('opacity-50', leftBtn.disabled)
//   leftBtn.classList.toggle('pointer-events-none', leftBtn.disabled)

//   rightBtn.classList.toggle('opacity-50', rightBtn.disabled)
//   rightBtn.classList.toggle('pointer-events-none', rightBtn.disabled)
// }

// const nextImage = () => {
//   if (i < images.length - 1) {
//     i++
//     imageEle.src = images[i]
//     imageEle.alt = `car-${i + 1}`
//     updateButtons()
//   }
// }

// const previousImage = () => {
//   if (i > 0) {
//     i--
//     imageEle.src = images[i]
//     imageEle.alt = `car-${i + 1}`
//     updateButtons()
//   }
// }
