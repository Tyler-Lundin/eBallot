import { useAppDispatch, useAuthState, useNavState } from '../../../hooks'
import { toggleNav } from '../navSlice'

const useNavMenu = () => {
  const { isOpen } = useNavState()
  const dispatch = useAppDispatch()
  const closeNav = () => dispatch(toggleNav(false))
  const { authenticated } = useAuthState()

  const loggedOutLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/auth/login', label: 'Login' },
    { to: '/auth/register', label: 'Register' },
  ]

  const loggedInLinks = [
    { to: '/dashboard', label: 'Home' },
    { to: '/profile', label: 'My Profile' },
    { to: '/auth/logout', label: 'Logout' },
  ]
  const links = authenticated ? loggedInLinks : loggedOutLinks

  return {
    isOpen,
    closeNav,
    links,
  }
}

export default useNavMenu
