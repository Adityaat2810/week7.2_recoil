import React from 'react'
import { useRecoilValue } from 'recoil'
import { jobsAtom, messagingAtom, networkAtom, notificationAtom } from './atoms'
//never forget to wrap inside RecoilRoot

const App = () => {
  
  const networkNotifiactionCount = useRecoilValue(networkAtom)
  const jobsNotificationCount =useRecoilValue(jobsAtom)
  const messagingNotificationValue = useRecoilValue(messagingAtom)
  const notificationValue = useRecoilValue(notificationAtom)

  return (

    <div>



      <button>Home</button>
      <button>My Network {networkNotifiactionCount}</button>
      <button>Jobs {jobsNotificationCount}</button>
      <button>Messaging {messagingNotificationValue}</button>
      <button>Notification {notificationValue}</button>
      <button>Me</button>


    </div>
  )
}

export default App