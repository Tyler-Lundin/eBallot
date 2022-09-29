import { useState } from 'react'

const useFriends = () => {
  const [isHidden, setIsHidden] = useState(false)

  const toggleHidden = () => setIsHidden((prev) => !prev)

  return {
    isHidden,
    toggleHidden,
  }
}

export default useFriends
