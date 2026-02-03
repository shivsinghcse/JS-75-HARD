const signup = (e) => {
    e.preventDefault();
    const form = e.target.elements;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value.trim();
    const confirmPassword = form.confirmPassword.value.trim();
    const terms = form.terms.checked;
    const isNameInputRequired = requiredValidation(form.name) ? true : false;
    const isEmailInputRequired = requiredValidation(form.email) ? true : false;
    const isPasswordInputRequired = requiredValidation(form.password) ? true : false;
    const isConfirmPasswordInputRequired = requiredValidation(form.confirmPassword) ? true : false;
    
    if(!isNameInputRequired && !isEmailInputRequired && !isPasswordInputRequired && !isConfirmPasswordInputRequired){
        console.log(name, email, password, confirmPassword, terms);

        if(password !== confirmPassword){
            form.confirmPassword.nextElementSibling.innerText = "Incorrect Password!"
            form.confirmPassword.nextElementSibling.classList.remove('hidden')
        }
    }

}

const requiredValidation = (input) => {
    const length = input.value.length;
    const hint = input.nextElementSibling;
    if(length === 0){
        input.classList.remove('border-[#bbb]', 'focus:outline-[#564DE6]')
        input.classList.add('border-red-500', 'focus:outline-red-500', 'placeholder-red-500')
        hint.classList.remove('hidden')
        return true;
    }
    else {
        input.classList.remove('border-red-500', 'focus:outline-red-500', 'placeholder-red-500')
        input.classList.add('border-[#bbb]', 'focus:outline-[#564DE6]')
        hint.classList.add('hidden')
    }



} 

const resetValidation = (input) => {
    const length = input.value.length;
    const hint = input.nextElementSibling;
    
    if(length !== 0){
        input.classList.remove('focus:outline-red-500')
        input.classList.add('focus:outline-[#564DE6]')
        hint.classList.add('hidden')
    }else{
        input.classList.remove('focus:outline-[#564DE6]')
        input.classList.add('focus:outline-red-500')
        hint.classList.remove('hidden')
    }
}