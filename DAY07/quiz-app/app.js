const resultEle = document.getElementById("result");
resultEle.style.padding = "0.5rem 1rem";
resultEle.style.borderRadius = "0.4rem";


function rightAnswer(){
    resultEle.textContent = "Answer: ✅ Correct Answer!🚀"
    resultEle.style.backgroundColor = "#acedac";
}

function wrongAnswer(){
    resultEle.textContent = "Answer: ❌ Wrong Answer!"
    resultEle.style.backgroundColor = "#e9adad"
}