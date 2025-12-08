import { RecoilRoot, useRecoilValue, useRecoilState } from 'recoil'
import {networkAtom, jobsAtom,messagingAtom,notificationsAtom,totalNotificationSelector} from "./atom.js"
import { notificationAtom } from './atom_async.js'
import { useMemo } from 'react'

function App() {
  return(
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  )
}

function MainApp(){
    const networkNotificationCount = useRecoilValue(networkAtom)
    const jobsNotificationCount = useRecoilValue(jobsAtom)
    const [messagingNotificationCount, setMessagingAtomCount] = useRecoilState(messagingAtom)
    const notificationCount = useRecoilValue(notificationsAtom)
    const totaNotificationCount = useRecoilValue(totalNotificationSelector)

    // const Addition = useMemo(()=>{
    //   return networkNotificationCount + jobsNotificationCount + messagingNotificationCount + notificationCount
    // },[networkNotificationCount, jobsNotificationCount, messagingNotificationCount, notificationCount])
    
    return (
      <>
        <button>Home</button>

        <button>My network ({networkNotificationCount>=100?"99+":networkNotificationCount})</button>
        <button>Jobs ({jobsNotificationCount})</button>
        <button>Messaging ({messagingNotificationCount})</button>
        <button>Notification ({notificationCount})</button>

        {/* <button onClick={() => setMessagingAtomCount(messagingNotificationCount+1)}>Me</button> */}
        <button>Me ({totaNotificationCount})</button>

      </>
    )
  }

export default App
