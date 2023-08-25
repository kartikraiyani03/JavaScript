let pro = new Promise(function(resolve,reject)
{
    resolve(43)
})


// 1st Way 
// let p = new Promise(function(resolve,reject)  
// {
//     setTimeout()(
//     {
        
//     })
// })


// 2nd Way 
// let q = new Promise((reolve,reject) =>
// {
//     setTimeout(()=>
//     {

//     })
//     resolve(ds)
// })

console.log("start")

setTimeout(()=>
{
    console.log("After 1 sec")
},1000)

console.log("end")

console.log(pro)