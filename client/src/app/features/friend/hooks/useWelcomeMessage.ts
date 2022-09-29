import { useState } from 'react'
import { useUser } from '../../../hooks'

const useWelcomeMessage = () => {
  const user = useUser()
  const numReq = user.requests.length
  const [isHidden, setIsHidden] = useState(false)

  const toggleHidden = () => setIsHidden((prev) => !prev)

  return {
    welcomeMessage: `Welcome ${user.username}!`,
    numReq: numReq,
    toggleHidden,
    isHidden,
    // TODO: numNewReactions: not sure how I am going to implement this as I hadn't planned for it
    // TODO: numMsgs: user.messages.length
  }
}

export default useWelcomeMessage
