// function four(){
//     return new Promise((resolve, reject) => {
//         if(4 !== 4)
//             resolve("four")
//         else
//             reject("error")
//     })
// }

// console.log("one");

// setTimeout(()=>{
//     console.log("two");
// }, 5000)

// console.log("three");

// // setInterval(()=>{
// //     console.log("four");
// // }, 3000)

// // const x = four()
// // console.log(x);

// four()
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// })
// console.log("five");


const checkUser = () => {
    return new Promise((resolve, reject) => {
        const isLogin = false

        if(isLogin)
        {
            return resolve("Login Success")
        }
        else
        {
            return reject("Login failed!!")
        }
    })
}

async function main() {
    try{
        const result = await checkUser()
        console.log(result);
    }
    catch(err)
    {
        console.log("Error :", err);
    }
}

main()