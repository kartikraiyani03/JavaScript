let arr = [1,2,4,5,6,70]

let n = arr.forEach((element)=>
{
    console.log(element)
})

console.log(n)  // undefined




let m = arr.map((element)=> // Map
{
    console.log(element)
    return element
})
console.log(m)  // new array




let c = arr.filter((element)=> // Filter
{
    return element < 4
})

console.log(c)




let d = arr.reduce((element,element2)=> // Reduce
{
    return element+element2
})

console.log(d)

