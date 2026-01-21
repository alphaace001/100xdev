const express = require("express")
const router = express.Router()

const {authmiddleware} = require("../middleware/auth")
const {Account, User} = require("../db")
const { default: mongoose } = require("mongoose")
module.exports = router

router.get("/balance",authmiddleware,async(req,res)=>{
    data = await Account.findOne({
        userID:req.userID
    })
    res.status(200).json({
        message:data.balance
    })
})

router.post("/transfer",authmiddleware,async(req,res)=>{
    try{
        const session = await mongoose.startSession()
        
        session.startTransaction()
        const {amount,to} = req.body
        console.log(typeof(amount))
        const account = await Account.findOne({userID:req.userID}).session(session)

        if(!account || account.balance < amount){
            await session.abortTransaction()
            res.json({
                message:"Insufficient balance"
            })
            return
        }

        const toAccount = await Account.findOne({userID:to}).session(session)
        console.log(toAccount)
        if (!toAccount){
            await session.abortTransaction()
            res.json({
                message:"Invalid to account"
            })
            return
        }

        await Account.updateOne({userID:req.userID}, {$inc:{balance: -amount}}).session(session)
        await Account.updateOne({userID:to}, {$inc:{balance:amount}}).session(session)

        await session.commitTransaction()
        res.json({
            message:"Transfer successful"
        })
    }catch(e){
        console.log(e)
    }
})