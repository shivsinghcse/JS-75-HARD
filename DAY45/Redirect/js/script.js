const login = (e) => {
    e.preventDefault()
    const form = e.target
    const email = form.elements.email.value.trim()
    const password = form.elements.password.value.trim()

    if(email === 'singhshiv0402@gmail.com' && password === '1234'){
        Swal.fire({
            icon: 'success',
            title: 'Login Successfull!',
            text: 'Please wait, redirecting to profile page...'
        })
        
        form.reset()
        
        setTimeout(()=>{
            location.href = 'https://www.javascripttutorial.net/web-apis/javascript-filereader/'
        }, 3000)
    }else{
        Swal.fire({
            icon: 'error',
            title: 'Login failed!'
        })
        form.reset()
    }
}