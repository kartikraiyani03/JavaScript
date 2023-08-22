setTimeout(()=>
{
    console.log("Fetching..")
},1000)

try
{
    console.log(asdfghjkllkjhgfdsdfghjk)  // Handle Error
}
catch(error)
{
    console.log(error)
}


try
{
    setTimeout(()=>
    {
        console.log(ASDCFVBCDSAD)  // Can't able to handle Error
    })
}
catch(error)
{
    console.log(error)
}

try
{
    setTimeout(()=>
    {
        try
        {
            console.log(ASDCFVBCDSAD)  // Handle Error
        }
        catch(error)
        {
            console.log(error)
        }
    })
}
catch(error)
{
    console.log(error)
}
setTimeout(()=>
{
    console.log("Fetching...")
},2000)
setTimeout(()=>
{
    console.log("Fetching....")
},3000)
setTimeout(()=>
{
    console.log("Fetching.....")
},4000)
setTimeout(()=>
{
    console.log("Fetching......")
},5000)


try
{
    console.log(something)
    throw new Error("Throwing an Error")
}
catch(error)
{
    console.log(error.name)
    console.log(error.message)
    console.log(error.stack)
}
finally
{
    console.log("Finally Clause") // Always Run even thre is error in try and also catch
}
