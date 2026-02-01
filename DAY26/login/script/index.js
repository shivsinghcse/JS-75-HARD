const loginValidation = (e) => {
    e.preventDefault();

    const form = e.target; 
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    const status = document.getElementById('status');

    if(email === "singhshiv0204@gmail.com") {
        if(password === "Asdf@1234") {
            status.parentElement.style.display = "flex";
            status.textContent = "✅ Login Success!";
            result.classList.remove("result-failed");
            result.classList.add("result", "result-success");
            location.href = "https://www.youtube.com/"
        }else {
            status.parentElement.style.display = "flex";
            status.textContent = "❌ Incorrect password.";
            result.classList.remove("result-success");
            result.classList.add("result", "result-failed");
        }
    }else {
        status.parentElement.style.display = "flex";
        status.textContent = "🙁 User does not exist! Please signup first.";
        result.classList.remove("result-success");
        result.classList.add("result", "result-failed");
    }
}

const closeMsg = () => {
    const resultEle = document.getElementById('result');
    resultEle.style.display = "none";
}

