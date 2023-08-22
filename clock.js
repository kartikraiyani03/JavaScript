setInterval(() => 
{
    let a = new Date().toLocaleTimeString()
    document.getElementById('t').innerHTML = a
}, 1000);
