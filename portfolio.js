const headcolor = (color) =>
{
    document.body.firstElementChild.style.background = color
}
const ulolor = (color) =>
{
    document.body.firstElementChild.firstElementChild.style.background = color
}
const li1color = (color) =>
{
    document.body.firstElementChild.firstElementChild.firstElementChild.style.background = color
}
const li2color = (color) =>
{
    document.body.firstElementChild.firstElementChild.firstElementChild.nextElementSibling.style.background = color
}
const li3color = (color) =>
{
    document.body.firstElementChild.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.style.background = color
}
const homecolor = (color) =>
{
    document.body.firstElementChild.firstElementChild.firstElementChild.fir.style.background = color
}


let b = document.body
console.log(b.firstElChild)
console.log(b.firstElementChildChild)
