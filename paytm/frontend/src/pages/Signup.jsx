import { useState } from "react"
import axios from "axios"
import {Button} from "../components/Button"
import {Heading} from "../components/Heading"
import {Subheading} from "../components/SubHeading"
import {Inputbox} from "../components/Inputbox"
import { BottomWarning } from "../components/BottomWarning"
import { useNavigate } from "react-router-dom"

export  function Signup(){
    const [firstname,setFirstname] = useState("")
    const [lastname,setLastname] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate()

    return <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                <Heading label={"Sign up"} />
                <Subheading subheading={"Enter your information to create an account"} />
                <Inputbox onChange= {e =>{setFirstname(e.target.value)}} label={"First Name"} placeholder={"John"} />
                <Inputbox onChange = {e =>{setLastname(e.target.value)}} label={"Last Name"} placeholder={"Doe"} />
                <Inputbox onChange={e => {setEmail(e.target.value)}} label={"Email"} placeholder={"test@gmail.com"} />
                <Inputbox onChange = {e => {setPassword(e.target.value)}}label={"Password"} placeholder={"123456"} />
                <Button onClick = {async ()=>{
                    const response = await axios.post("http://localhost:3000/api/v1/user/signup",{
                        username: firstname+lastname,
                        email:email,
                        password: password
                    })
                    localStorage.setItem("token",response.data.token)
                    navigate("/dashboard")
                }} label={"Signup"} />
                <BottomWarning label={"Already have an account"} buttonText={"Sign in"} to={"/signin"} />
            </div>
        </div>
    </div>
}