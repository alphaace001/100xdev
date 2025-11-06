const express = require("express")
app = express()
function calculateSum(n){
    let ans = 0
    for(let i=0;i<n;i++){
        ans +=i
    }
    return ans
}

app.get("/",function(req,res){
    let value = req.query.n
    const sum = calculateSum(value)
    res.send(sum.toString())
})

app.listen(3000)
