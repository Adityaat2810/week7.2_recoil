import React, { useMemo } from 'react'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { jobsAtom, messagingAtom, networkAtom, notificationAtom } from './atoms'
//never forget to wrap inside RecoilRoot

/**
 * Let say i wnat to render sum of all types of notifiaction
 * on the me button.
 */

/**
 * 1 st method solved using useMemo to memoize 
 */

const App = () => {
  
  const networkNotifiactionCount = useRecoilValue(networkAtom)
  const jobsNotificationCount =useRecoilValue(jobsAtom)
  const notificationValue = useRecoilValue(notificationAtom)

   const [messagingNotificationValue,setMessageAtomCount] =useRecoilState(messagingAtom)

   const totalNotifiicationCount = useMemo(()=>{
    return networkNotifiactionCount+ jobsNotificationCount +notificationValue+messagingNotificationValue;
   },[networkNotifiactionCount,jobsNotificationCount,notificationValue,messagingNotificationValue])
  return (

    <div>



      <button>Home</button>
      <button>My Network {networkNotifiactionCount}</button>
      <button>Jobs {jobsNotificationCount}</button>
       <button>Messaging {messagingNotificationValue}</button> 
      <button>Notification {notificationValue}</button>
      <button onClick={()=>{
        setMessageAtomCount(messagingNotificationValue+1)
      }}>Me ({totalNotifiicationCount})</button>


    </div>
  )
}

export default App