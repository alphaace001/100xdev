const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post('/signup', async(req, res) => {
    const username = req.body.username
    const password = req.body.password
    try{
        await User.create({
            username:username,
            password:password
        })
        res.json({
            message:"User created successfully"
        })
    }catch(error){
        res.json({
            message:"Failed to signup"
        })
    }
});

router.post("/signin",async (req,res)=>{
    const username = req.body.username
    const password = req.body.password

    const data = await User.findOne({username, password})
    if (data){
        res.json({
            token: jwt.sign({username},secret)
        })
    }else{
        res.json({
            message:"Invalid username or password"
        })
    }

})

router.get('/courses', async(req, res) => {
    try{
        const data = await Course.find({})
        res.json({
            courses:data
        })
    }catch(error){
        res.json({
            message:"Failed to get all courses"
        })
    }
});

router.post('/courses/:title', userMiddleware, async(req, res) => {
    // Implement course purchase logic
    const title = req.params.title
    console.log(title)
    try{
        const data = await Course.findOne({ title:title })
        await User.updateOne({
            username:req.headers.username
            },{$push:{purchased_courses:data._id}});
        res.send({
            message:"Successfully purchased the course"
        })
    }
    catch(error){
        res.json({
            message:"Purchase was not successful"
        })
    }
});
router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    // Implement fetching purchased courses logic
    const data = await User.findOne({ username : req.headers.username})
    const courses = await Course.find({
        _id : {
            "$in": data.purchased_courses
        }
    })
    res.json({
        courses:courses
    })
});

module.exports = router