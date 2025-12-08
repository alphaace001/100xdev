import {atom, atomFamily, selectorFamily} from "recoil"
import {TODOS} from "./todos"

export const todosAtomFamily = atomFamily({
    key:"todosAtomFamily",
    default: id =>{
        return TODOS.find(X =>X.id == id)
    }
})

export const todosAtomfamilyasync = atomFamily({
    key :"todosAtomfamilyasync",
    default : selectorFamily ({
        key : "todoselectorfamily",
        get : function (id){
            return async function({get}) {
                const res = axios.get(`https://some-server/todo?id=${id}`)
                return res.data.todo
            }
        }
    })
})