let pro = new Promise((resolve,reject)=>
{
    console.log("Promise 1 Pending")
    setTimeout(()=>
    {
        resolve(100)
        console.log("Promise 1 Fullfilled")
    },2000)
})

pro.then((value)=>
{
    console.log("First Handler")
    console.log(value)
})

pro.then(()=>
{
    console.log("Second Handler")
})