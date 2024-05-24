import React, { useMemo } from 'react'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { jobsAtom, messagingAtom, networkAtom, notificationAtom, totalNotificationSelector } from './atoms'
//never forget to wrap inside RecoilRoot

/**
 * Let say i wnat to render sum of all types of notifiaction
 * on the me button.
 */

/**
 *solved using selectors 
 */

const App = () => {
  
  const networkNotifiactionCount = useRecoilValue(networkAtom)
  const jobsNotificationCount =useRecoilValue(jobsAtom)
  const notificationValue = useRecoilValue(notificationAtom)

   const [messagingNotificationValue,setMessageAtomCount] =useRecoilState(messagingAtom)
  const totalCount = useRecoilState(totalNotificationSelector)

  return (

    <div>



      <button>Home</button>
      <button>My Network {networkNotifiactionCount}</button>
      <button>Jobs {jobsNotificationCount}</button>
       <button>Messaging {messagingNotificationValue}</button> 
      <button>Notification {notificationValue}</button>
      <button onClick={()=>{
        setMessageAtomCount(messagingNotificationValue+1)
      }}>Me ({totalCount})</button>


    </div>
  )
}

export default App