const getColor = (e) => {
    e.preventDefault();
    const colorEle = document.getElementById('color');
    const color = colorEle.value.toLowerCase();
    
    if(color === "red") {
        console.log("STOP");
    }else if(color === "yellow") {
        console.log("READY");
    }else if(color === "green") {
        console.log("GO");
    }else {
        console.log("Incorrect color!!");
    }
}