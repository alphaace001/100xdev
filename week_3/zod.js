const express = require("express")
const zod = require("zod")
const app = express()

const schema = zod.array(zod.number())
app.use(express.json())

// {
//     email: string => zod.email
//     password: atleast 8 letters
//     country: "IN" or "US"
// }

// can use coercion for little lenient check
// const schema = zod.coerce.string()
// schema.parse(12) ==> "12"

const complexSchema = z.object({
  email: zod.string().email(),      
  password: zod.string().min(8),       
  country: zod.literal("US").or(z.literal("IN")), 
});


app.post("/health-checkup",function(req,res){
    const kidneys = req.body.kidneys
    const response = schema.safeParse(kidneys)
    if(!response.success){
        res.status(411).json({
            msg:"wrong input"
        })
        return
    }
    res.send({
        response
    })
})


app.listen(3000)