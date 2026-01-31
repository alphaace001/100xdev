import {Button} from "../components/Button"
import {Heading} from "../components/Heading"
import {Subheading} from "../components/SubHeading"
import {Inputbox} from "../components/Inputbox"
import { BottomWarning } from "../components/BottomWarning"

export  function Signin(){
    return <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                <Heading label={"Sign In"} />
                <Subheading subheading={"Enter your information to login"} />
                <Inputbox label={"Email"} placeholder={"test@gmail.com"} />
                <Inputbox label={"Password"} placeholder={"123456"} />
                <Button label={"Signin"} />
                <BottomWarning label={"Don't have an account"} buttonText={"Sign up"} to={"/signup"} />
            </div>
        </div>
    </div>
}