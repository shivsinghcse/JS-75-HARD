const login = () => {
    const password = document.getElementById('password');
    if(password.value === "Asdf@1234"){
        alert("Login success!");
        password.value = "";
    }else {
        alert("Login failed!!")
        password.value = "";
    }
}