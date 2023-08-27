let p1 =  new Promise((resolve,reject)=>
{
    console.log("----Process 1 Pending-----")
    setTimeout(()=>
    {
        resolve(true)
    },3000)
})
// console.log(p1)


let p2 =  new Promise((resolve,reject)=>
{
    console.log("----Process 2 Pending-----")
    setTimeout(()=>
    {
        reject(new Error("I am an Error"))
    },3000)
})
// console.log(p2)


p1.then((value)=>
{
    console.log(value)
},(error)=>
{
    console.log(error)
})

p2.then((value)=>
{
    console.log(valuse)
},(error)=>
{
    console.log("We got Error in Process 2")
})


