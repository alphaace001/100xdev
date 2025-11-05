let arr = [1, 2, 3, 4, 5, 6, 6, 7, 8, 9]
let obj = [{
    username: "a",
    age: 1
}, {
    username: "b",
    age: 2
}, {
    username: "c",
    age: 3
}
]

// iteration in object
for (let i=0;i<obj.length;i++){
    if (obj[i]["age"]>2){
        console.log(obj[i]["username"])
    }
}


// print biggest number in a array

// let max = arr.length
// for (let i=1;i<arr.length;i++){
//     if(arr[i]>max){
//         max = arr[i]
//     }
// }
// console.log("the max number is:",max)

// program to print all even numbers in a array

// console.log(arr.length)
// for (let i=0;i<arr.length;i++){
//     if (arr[i]%2 === 0) {console.log(arr[i]) }
// }