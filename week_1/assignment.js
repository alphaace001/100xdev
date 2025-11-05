

// create a counter in JS (count from 30 to 0)
// for(let i=30;i>=0;i--){
//     console.log(i)
// }

// calculate the time it takes between a setTimeout call and the inner function actually running
// let call_time
// function dummy(){
//     let call_time = Date()
//     console.log("Time to start" + current_time + "and time of call "+ call_time)
// }

// let current_time = Date()
// setTimeout(dummy,1000)

//  terminal clock
function print_time(){
    console.clear()
    console.log(Date())
}
setInterval(print_time,1000)