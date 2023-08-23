// let a = document.getElementsByClassName('fb')[0]

// a.onclick = () =>
// {
//     let b = document.getElementsByClassName('fb')[0]
//     b.innerHTML = "Welcome"
// } 

// document.getElementsByClassName("fb").addEventListner("click",function()
// {
//     let doc = "www.facebook.com"
// })

// let a = document.getElementById('b')
// setInterval( () =>
// {
//    a.classList = 'bulb'
// },300)

setInterval(()=>
{
    document.getElementById('b').classList.toggle('bulb')
},100)

