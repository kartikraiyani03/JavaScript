let p1 = new Promise((resolve,reject)=>
{
    setTimeout(()=>
    {
        // resolve("Promise 1 Executed")
        reject("Promise 1 Reject")
    },1000)
})

let p2 = new Promise((resolve,reject)=>
{
    setTimeout(()=>
    {
        resolve("Promise 2 Executed")
    },2000)
})

let p3 = new Promise((resolve,reject)=>
{
    setTimeout(()=>
    {
        resolve("Promise 3 Executed")
    },3000)
})

// p1.then((value)=>
// {
//     console.log(value)
// })

// p2.then((value)=>
// {
//     console.log(value)
// })

// p3.then((value)=>
// {
//     console.log(value)
// })

// let arr = Promise.all([p1,p2,p3])            // API 1
// let arr = Promise.allSettled([p1,p2,p3])     // API 2
// let arr = Promise.race([p1,p2,p3]            // API 3
// let arr = Promise.any([p1,p2,p3])            // API 4

arr.then((value)=>
{
    console.log(value)
})