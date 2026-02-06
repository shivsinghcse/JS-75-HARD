const createUser = (e) => {
    e.preventDefault()

    // checking validation
    const len = e.target.elements.length-1;
    for(let i=0; i<len; i++){
        validation(e.target.elements[i])
    }

    // signup code
    const form = e.target.elements;
    const fullname = form.fullname.value.trim()
    const email = form.email.value.trim()
    const password = form.password.value.trim()

    const payload = JSON.stringify({
        fullname,
        email,
        password
    })

    
    const isExistingUser = localStorage.getItem(email)

    if(isExistingUser === null){
        localStorage.setItem(email, payload)
        new Swal({
            icon: "success",
            title: "Signup Successfully!"
        })
    }else{
        new Swal({
            icon: "info",
            title: "User already exist!",
            text: "Please login or use different email."
        })
    }
    
    console.log(user);
    
}

const validation = (inputEle) => {
    const inputLength = inputEle.value.trim().length;
    const labelEle = inputEle.nextElementSibling;
    
    const parts = inputEle.value.trim().split(" ").length;

    if(inputEle.name === 'fullname'){
        if(inputLength === 0){
            labelEle.classList.remove('hidden')
            inputEle.classList.remove('border-gray-300')
            inputEle.classList.add('border-rose-500')
            labelEle.innerText = `${inputEle.name[0].toUpperCase()}${inputEle.name.slice(1)} is required`
            throw new Error(`${inputEle.name[0].toUpperCase()}${inputEle.name.slice(1)} is required`)
        }else if(parts < 2){
            labelEle.classList.remove('hidden')
            inputEle.classList.remove('border-gray-300')
            inputEle.classList.add('border-rose-500')
            labelEle.innerText = "Please enter your full name"
            throw new Error(`Please enter your full name`)
        }else{
            labelEle.classList.add('hidden')
            inputEle.classList.add('border-gray-300')
            inputEle.classList.remove('border-rose-500')
            labelEle.innerText = ""
        }
    }

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
        if(inputLength === 0){
            labelEle.classList.remove('hidden')
            inputEle.classList.remove('border-gray-300')
            inputEle.classList.add('border-rose-500')
            labelEle.innerText = `${inputEle.name[0].toUpperCase()}${inputEle.name.slice(1)} is required`
            throw new Error(`${inputEle.name[0].toUpperCase()}${inputEle.name.slice(1)} is required`)
        }else if(inputLength < 8){
            labelEle.classList.remove('hidden')
            inputEle.classList.remove('border-gray-300')
            inputEle.classList.add('border-rose-500')
            labelEle.innerText = "Password must be at least 8 characters"
            throw new Error(`Password must be at least 8 characters`)
        }else{
            labelEle.classList.add('hidden')
            inputEle.classList.add('border-gray-300')
            inputEle.classList.remove('border-rose-500')
            labelEle.innerText = ""
        }
    }

    if(inputEle.name === 'confirm-password'){
        const passwordEle = document.querySelector('#password')
        if(inputLength === 0){
            labelEle.classList.remove('hidden')
            inputEle.classList.remove('border-gray-300')
            inputEle.classList.add('border-rose-500')
            labelEle.innerText = `${inputEle.name[0].toUpperCase()}${inputEle.name.slice(1)} is required`
            throw new Error(`${inputEle.name[0].toUpperCase()}${inputEle.name.slice(1)} is required`)
        }else if(passwordEle.value.trim() !== inputEle.value.trim()){
            labelEle.classList.remove('hidden')
            inputEle.classList.remove('border-gray-300')
            inputEle.classList.add('border-rose-500')
            labelEle.innerText = "Incorrect Password!"
            throw new Error(`Incorrect Password!`)
        }else{
            labelEle.classList.add('hidden')
            inputEle.classList.add('border-gray-300')
            inputEle.classList.remove('border-rose-500')
            labelEle.innerText = ""
        }
    }

}