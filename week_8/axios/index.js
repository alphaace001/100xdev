const axios = requrie("axios")

// fetch method 1
function main(){
    fetch("https://sum-server.100xdevs.com/todos")
    .then(async(response)=>{
        const json = await response.json()
        console.log(json.todos)
    })
}
// fetch method 2
async function main(){
    const response = await fetch("https://sum-server.100xdevs.com/todos",{
        method:"GET",
        body:{
            username:"data"
        },
        headers:{
            "Authorization":"Bearer 123"
        }
    })
    const data = await response.json()
    console.log(data.todos)
}

// axios method
async function main(){
    const response = await axios.get("https://sum-server.100xdevs.com/todos")
    console.log(response.data.todos)
}

main()