let isCropper = null
window.onload = () => {
    const isLoggedIn = localStorage.getItem('isLogin')

    if(!isLoggedIn){
        location.replace('login.html')
    }
}

const logout = () => {
    localStorage.removeItem('isLogin')
    location.replace('login.html')
}

const uploadImage = () => {
    // alert()
    const chooseImageEle = document.getElementById('imageUpload');
    const imagePreviewEle = document.getElementById('imagePreview');

    const file = chooseImageEle.files[0]
    const url = URL.createObjectURL(file)
    imagePreviewEle.src = url


}

const loadCropper = (cropBtn) => {
    const imagePreviewEle = document.getElementById('imagePreview');
    const downloadBtnEle = document.getElementById('downloadBtn')
    const uploadBtn = document.getElementById('imageUpload')
    
    if(isCropper === null) {
         isCropper = new Cropper(imagePreviewEle, {
            // aspectRatio: 1,
            viewMode: 1
        })
        downloadBtnEle.classList.remove('hidden')
        cropBtn.innerHTML = `<i class="ri-close-large-line"></i> Cancel`
        uploadBtn.disabled = true
        uploadBtn.classList.replace('hover:cursor-pointer', 'hover:cursor-not-allowed')
    }else {
        isCropper.destroy()
        isCropper = null
        downloadBtnEle.classList.add('hidden')
        cropBtn.innerHTML = `<i class="ri-crop-line"></i> Crop Image`
        uploadBtn.disabled = false
        uploadBtn.classList.replace('hover:cursor-not-allowed', 'hover:cursor-pointer' )
        
    }
    
}

const downloadImage = () => {
    const canvas = isCropper.getCroppedCanvas()
    const imageString = canvas.toDataURL('image/png')
    const aEle = document.createElement('a');
    aEle.href = imageString;
    aEle.download = 'sample.png'
    aEle.click()
    aEle.remove()
}