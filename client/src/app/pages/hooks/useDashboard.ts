import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useAuthentication from './useAuthentication'

const useDashboard = () => {
  const { authenticated } = useAuthentication() // redirect to login if not authenticated also returns authenticated boolean
  const navTo = useNavigate()

  const [isActive, setIsActive] = useState({
    ANNOUNCEMENT_BANNER: true,
    WELCOME_MESSAGE: true,
    FRIENDS_LIST: true,
  })

  const toggleActive = (key: string) => {
    setIsActive((prevState) => ({
      ...prevState,
      [key]: !prevState[key as keyof typeof prevState],
    }))
  }

  return {
    isActive,
    toggleActive,
  }
}

export default useDashboard
