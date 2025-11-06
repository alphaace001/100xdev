// simple callbacks : a function that is passed as arguement to another function
function square(n){
    return n*n
}

function cube(n){
    return n*n*n
}

function both(n,fntocall){
    return fntocall(n)
}

a = both(4,square)
console.log(a)