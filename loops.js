const arr = [1,2,3,4,5,60]

// From 
// For 
// For Each 
// For of 
// For in 

for(let i = 0; i < arr.length;i++)
{
    console.log(arr[i])
}
console.log("-----------------------")

arr.forEach((element)=>
{
    console.log(element)
})
console.log("-----------------------")

for(let i of arr)
{
    console.log(i)
}
console.log("-----------------------")

for(let j in arr)
{
    console.log(arr[j])
}

const str = "Kartik"
let a = Array.from(str)
console.log(a)
