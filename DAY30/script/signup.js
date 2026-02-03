const signup = (e) => {
    e.preventDefault();
    const form = e.target.elements;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value.trim();
    const confirmPassword = form.confirmPassword.value.trim();
    const terms = form.terms.checked;

    console.log(name, email, password, confirmPassword, terms);
}

const requiredValidation = (input) => {
    const length = input.value.length;
    if(length === 0){
        input.classList.add('border-red-500', 'focus:outline-red-500')    
    }else {
        input.classList.remove('border-red-500', 'focus:outline-red-500')
    }
}