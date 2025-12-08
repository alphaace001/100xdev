import axios from "axios"
import { atom, selector } from "recoil";
// way to define a atom with a default value through api i.e async data queries
export const notificaton = atom({
    key:"notificationAtom",
    default: selector({
        key:"notificationAtom/default",
        get : async () =>{
            const res = axios.get("https://some-server/notifications")
            return res.data
        }
    })
})

