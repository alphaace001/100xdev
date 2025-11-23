const {Router} = require("express")
const adminMiddleware = require("../middleware/admin")
const {Admin, Course} = require("../db")
const router = Router()

router.post('/signup', (req, res) => {
    const username = req.body.username
    const password = req.body.password

    Admin.create({
        username:username,
        password:password
    })
    .then(function(){
        res.json({
            message:"User created successfully"
        })
    })
    .catch(function(){
        res.json({
            message:"Some error occured while signup, user not created"
        })
    })
});

router.post('/courses', adminMiddleware, async(req, res) => {
    const title = req.body.title
    const description = req.body.description
    const price = req.body.price
    const imagelink = req.body.imagelink
    try {
        data = await Course.create({title,description,imagelink,price})
        res.json({
            messages:"Course created succesfully",
            couserid:data._id
        })
    } catch(error) {
        res.json({
            message:"Failed to create course"
        })
    }
});

router.get('/courses', adminMiddleware, async(req, res) => {
    const allcourses = await Course.find({})
    res.json({
        courses:allcourses
    })
});

module.exports = router;