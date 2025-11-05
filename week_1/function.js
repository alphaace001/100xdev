// understanding function syntax
// function add_numbers(n1,n2){
//     // console.log(n1+n2)
//     return n1+n2
// }

// function pretty_print(n){
//     console.log(" The pretty print number is :",n)
// }

// let a = 1
// let b = 2

// c = pretty_print(add_numbers(a,b))

// passing a function as a parameter to another function (Callbacks)
// function add_numbers(n1,n2,fntocall){
//     let c=  n1+n2
//     fntocall(c)
// }

function pretty_print(n){
    console.log(" The pretty print number is :",n)
}

// c = add_numbers(1,2,pretty_print)


// setTimeout expects a function (callback), but your code calls pretty_print(4) immediately and passes its return value (undefined) to setTimeout.
// That triggers the ERR_INVALID_ARG_TYPE.
setTimeout(pretty_print,4,1*1000)