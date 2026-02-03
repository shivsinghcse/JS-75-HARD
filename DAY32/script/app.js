const login = (e) => {
    e.preventDefault();
    const form = e.target.elements;
    const email = form.email.value.trim();
    const password = form.password.value.trim();
   
    console.log(email, password);
    if(email === 'singhshiv0402@gmail.com' && password === 'Asdf@1234'){
        alert("Login success!")
    }else {
        alert("Login failed!")
    }
}