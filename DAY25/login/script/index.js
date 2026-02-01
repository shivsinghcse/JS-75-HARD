const loginValidation = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    const result = document.getElementById('result');

    if(email === "singhshiv0204@gmail.com") {
        if(password === "Asdf@1234") {
            result.textContent = "✅ Login Success!";
            result.classList.remove("result-failed");
            result.classList.add("result", "result-success");
        }else {
            result.textContent = "❌ Incorrect password.";
            result.classList.remove("result-success");
            result.classList.add("result", "result-failed");
        }
    }else {
        result.textContent = "🙁 User does not exist! Please signup first.";
        result.classList.remove("result-success");
        result.classList.add("result", "result-failed");
    }
}

