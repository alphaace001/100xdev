// arrow functions
// function sum(a,b){
//     return a+b
// }

// const sum = (a,b) =>{return a+b}

// map(arr,function)
const arr = [1,2,3,4,5]

// function transform(i){return i*2}
// const ans = arr.map(transform)
// console.log(ans)

// filter function
const ans = arr.filter((i)=>{
    if (i%2 == 0){ return true}
    return false
})
console.log(ans)
