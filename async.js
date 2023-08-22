async function planet()
{
    let earth = new Promise((resolve,reject)=>
    {
        setTimeout(() => 
        {
            resolve("Better Atmosphere")
        }, 2000);
    })

    let G = new Promise((resolve,reject)=>
    {
        setTimeout(() => 
        {
            resolve("Harmful Atmosphere")
        }, 7000);
    })

    // earth.then(alert)            // All Async Function Run Concurrnetly
    // G.then(alert)                // await always finish first ,all other wait

    console.log("Fetching Planet Earth Data...")
    let earthAt = await earth
    console.log("Planet Earth's Data Fetched")
    console.log("Fetching Planet G Data...")
    let GAt = await G
    console.log("Planet G's Data Fetched")

    return [earthAt,GAt]

}

let a = planet()
console.log(a)