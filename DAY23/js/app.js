const toggle = (button) => {
    const image = document.getElementById("image");
    
    if(image.style.display === "block"){
        image.style.display = "none";
        button.textContent = "Show";
    }else{
        image.style.display = "block";
        button.textContent = "Hide";
    }
    
}

const togglePassword = (button) => {
    const password = document.getElementById('password');
    if(password.type === "password") {
        password.type = "text";
        button.textContent = "Hide password";
    }else {
        password.type = "password";
        button.textContent = "Show password";
    }


}