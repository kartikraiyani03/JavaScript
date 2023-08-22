// async function name()
// {
//     return 5;
// }

// name().then(()=>
// {
//     console.log("Promise Retrive")
// })


async function Pro()
{
    let p1 = new Promise((resolve,reject)=>
    {
        setTimeout(()=>
        {
            resolve("Resolve 1")
        },2000)
    })
    
    let p2 = new Promise((resolve,reject)=>
    {
        setTimeout(()=>
        {
            resolve("Resolve 2")
        },2000)
    })

    let pp1 = await p1
    let pp2 = await p2
    return [pp1,pp2]
}


console.log(Pro())

// p1().then(()=>
// {
//     console.log("P1 Retrive")
// })

// p2().then(()=>
// {
//     console.log("P2 Retrive")
// })