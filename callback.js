// console.log("start")

// setTimeout(function()
// {
//     console.log("Execute")
// },300)

// console.log("end")   
//  Asynchronous = Process scheduled if it take much time 
//  Synchronous = Process Wait even if it take much time 

function call(src,callback)
{
    let script = document.createElement('script')
    script.src = src

    script.onload = function()
    {
        alert("Script Loaded")
        callback(null,src)
    }

    script.onerror = function()
    {
        console.log("Error ")
        callback(new Error("Errore Found"))
    }

    document.body.appendChild(script)
}

function hello(error,src)
{
    alert("hello" +src)
    if(error)
    {
        console.log(error)
        return
    }
}

function good(src)
{
    alert("Good Morning")
}

call("https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js",good)

call("https://cdn.deli.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js",hello)