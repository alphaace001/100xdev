// callbacks lead to callback hell 

// setTimeout(function(){
//     console.log("hi there")

//     setTimeout(function(){
//         console.log("inside the second one")
//         setTimeout(function(){
//             console.log("inside the third one")
//         },3000)
//     },2000)
// },1000)


// function myTimeout(fn,duration){
//     setTimeout(fn,duration)
// }

// myTimeout(function(){
//     console.log("hi there")
// })

// using promises

// function myTimeout(duration){
//     let p = new Promise(function(resolve){
//         setTimeout(resolve,duration)
//     })
//     return p
// }

// myTimeout(1000).then(function(){
//     console.log("log the first thing")
// })

// async await syntactical sugar
function asyncfunction(){
    let p = new Promise(function(resolve){
        setTimeout(function(){
            console.log("hi there")
            resolve()
        },3000)
    })
    return p
}

async function main() {
    await asyncfunction()
    console.log("after calling")
}

main()
console.log("main thread")