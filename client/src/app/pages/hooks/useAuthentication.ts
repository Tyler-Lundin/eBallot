import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthState } from '../../hooks'

const useAuthentication = () => {
  const { authenticated } = useAuthState()
  const navTo = useNavigate()
  useEffect(() => {
    if (authenticated) navTo('/dashboard')
  }, [authenticated])
}

export default useAuthentication
