import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthState } from '../../hooks'

const useAuthentication = () => {
  const { authenticated } = useAuthState()
  const navTo = useNavigate()
  useEffect(() => {
    navTo(authenticated ? '/dashboard' : '/auth/login')
  }, [authenticated])
  return { authenticated }
}

export default useAuthentication
