import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthState } from '../../hooks'

const useDashboard = () => {
  const { authenticated } = useAuthState()
  const navTo = useNavigate()

  useEffect(() => {
    if (!authenticated) {
      navTo('/auth/login')
    }
  }, [])
}

export default useDashboard
