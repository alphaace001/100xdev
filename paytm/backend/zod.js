const z = require("zod")

const Signup = z.object({
    email : z.email(),
    username : z.string(),
    password : z.string()
})

const Signin = z.object({
    email: z.email(),
    password: z.string()
})

const UpdateUser = z.object({
    email: z.email().optional(),
    username:z.string().optional(),
    password : z.string().min(3).optional()
})

module.exports = {
    Signup, Signin, UpdateUser
}