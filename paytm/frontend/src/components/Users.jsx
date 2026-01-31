import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { Button } from "./Button"


export const Users = () =>{

    const [users,setUsers] = useState([])
    const [filter,setFilter] = useState("")

    useEffect(()=>{
        const fetchUsers = async () => {
            const response = await axios.get("http://localhost:3000/api/v1/user/bulk?filter="+filter, {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token")
                }
            })
            setUsers(response.data.user)
        }
        fetchUsers()
    }, [filter])

    return <div>
        <div className="font-bold mt-6 text-lg">
            Users
        </div>
        <div onChange={(e)=>{
            setFilter(e.target.value)
        }} className="my-2">
            <input type="text" placeholder="Search users..." className="w-full px-2 py-1 border rounded border-slate-200"></input>
        </div>
        <div>
            {users.map(user => <User key={user._id} user = {user}/>)}
        </div>
    </div>
}

function User({user}){
    const navigate = useNavigate()
    return <div className="flex justify-between">
        <div className="flex">
            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-xl">
                    {user.username[0].toUpperCase()}
                </div>
            </div>
            <div className="flex flex-col justify-center h-full">
                <div>{user.username}</div>
            </div>
        </div>

        <div className="flex flex-col justify-center h-full">
            <Button onClick={(e) =>{
                navigate("/send?id=" + user._id + "&name=" + user.username)
            }} label={"Send Money"} />
        </div>
    </div>
}