// const test = () => {
//     // sessionStorage.setItem('name', 'ashu')
//     // alert(sessionStorage.getItem('name'))
//     // sessionStorage.removeItem('name')
//     sessionStorage.clear()  

// }

window.onload = () => {
    showAdd()
}

const showAdd = () => {
    const isShown = sessionStorage.getItem('isShown')
    
    if(isShown === null){
        new Swal({
            icon: "info",
            title: "Great Deal offer",
            text: "20% off on every product"
        })
        sessionStorage.setItem('isShown', 'true')
    }
    
}

const test = () => {
    const student = JSON.stringify({
        name: "Ajeet",
        roll: 12,
        subject: "math"
    })

    console.log(student);
    console.log(student.name); // undefined
    console.log(JSON.parse(student).roll);
    console.log(student.subject);
}