let isCropper = null
window.onload = () => {
    const isLoggedIn = localStorage.getItem('session')

    if(!isLoggedIn){
        location.replace('login.html')
    } 
    else {
        showUserInfo()
    }    
}

const logout = () => {
    localStorage.removeItem('session')
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

const showUserInfo = () => {
    const currentUser = localStorage.getItem('session');
    const user = JSON.parse(localStorage.getItem(currentUser))

    const userNameEle = document.querySelector('#userName')
    const userEmailEle = document.querySelector('#userEmail')
    const profilePictureEle = document.querySelector('#profilePicture')
    
    userNameEle.textContent = user.fullname
    userEmailEle.textContent = user.email
    profilePictureEle.src = user.profileImage

}

const setUserProfilePicture = () => {
    const profilePicture = document.getElementById('selectedUserProfilePicture')
    const userProfileImage = document.getElementById('profilePicture')

    const key = localStorage.getItem('session')
    const user = JSON.parse(localStorage.getItem(key))

    const file = profilePicture.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(file)

    reader.onload = (e) => {
        const data = e.target.result
        userProfileImage.src = data;
        user.profileImage = data
        const value = JSON.stringify(user)
        localStorage.setItem(key, value)
    }
}