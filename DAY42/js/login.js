window.onload = () => {
    const isLoggedIn = localStorage.getItem('isLogin');
    if(isLoggedIn){
        location.replace('profile.html')
    }
    
}


const login = (e) => {
    e.preventDefault()

    // checking validation
    const len = e.target.elements.length-1;
    for(let i=0; i<len; i++){
        validation(e.target.elements[i])
    }

    // login code
    const form = e.target.elements;
    const email = form.email.value.trim()
    const password = form.password.value.trim()

    const isUserExist = localStorage.getItem(email)
    
    if(isUserExist){
        const userPassword = JSON.parse(localStorage.getItem(email)).password
        if(userPassword === password){
            // new Swal({
            //     icon: "success",
            //     title: "Login Successfully!",
            //     text: "Redirecting to profile page..."
            // }).then(() => {
            //     e.target.reset()
            //     location.replace("profile.html")
            // })

            e.target.reset()
            localStorage.setItem("isLogin", true)
            location.replace("profile.html")
            
        }else{
            const label = document.getElementById('password-error')
            label.classList.remove('hidden')
            label.innerText = "Incorrect Password!"
        }
        
    }else{
        new Swal({
            icon: "error",
            title: "User does not exist!",
            text: "Please Signup or use different email."
        }).then(() => {
            e.target.reset()
        })    
    }    
}

const validation = (inputEle) => {
    const inputLength = inputEle.value.trim().length;
    const labelEle = inputEle.nextElementSibling;

    if(inputEle.name === 'email'){
        if(inputLength === 0){
            labelEle.classList.remove('hidden')
            inputEle.classList.remove('border-gray-300')
            inputEle.classList.add('border-rose-500')
            labelEle.innerText = `${inputEle.name[0].toUpperCase()}${inputEle.name.slice(1)} is required`
            throw new Error(`${inputEle.name[0].toUpperCase()}${inputEle.name.slice(1)} is required`)
        }else if(!(inputLength > 1 && inputEle.value.trim().includes('@') && inputEle.value.trim().includes('.'))){
            labelEle.classList.remove('hidden')
            inputEle.classList.remove('border-gray-300')
            inputEle.classList.add('border-rose-500')
            labelEle.innerText = "Please enter correct email"
            throw new Error(`Please enter correct email`)
        }else{
            labelEle.classList.add('hidden')
            inputEle.classList.add('border-gray-300')
            inputEle.classList.remove('border-rose-500')
            labelEle.innerText = ""
        }
    }

    if(inputEle.name === 'password'){
        const labelEle = document.getElementById('password-error');
        if(inputLength === 0){
            labelEle.classList.remove('hidden')
            inputEle.parentElement.classList.remove('border-gray-300')
            inputEle.parentElement.classList.add('border-rose-500')
            labelEle.innerText = `${inputEle.name[0].toUpperCase()}${inputEle.name.slice(1)} is required`
            throw new Error(`${inputEle.name[0].toUpperCase()}${inputEle.name.slice(1)} is required`)
        }else if(inputLength < 8){
            labelEle.classList.remove('hidden')
            inputEle.parentElement.classList.remove('border-gray-300')
            inputEle.parentElement.classList.add('border-rose-500')
            labelEle.innerText = "Password must be at least 8 characters"
            throw new Error(`Password must be at least 8 characters`)
        }else{
            labelEle.classList.add('hidden')
            inputEle.parentElement.classList.add('border-gray-300')
            inputEle.parentElement.classList.remove('border-rose-500')
            labelEle.innerText = ""
        }
    }
}


const togglePassword = (btn) => {
    const passwordEle = document.getElementById('password');
    const type = passwordEle.type

    if(type == "text"){
        passwordEle.type = "password"
        btn.className = "ri-eye-line"
    }else{
        passwordEle.type = "text"
        btn.className = "ri-eye-off-line"
    }
}