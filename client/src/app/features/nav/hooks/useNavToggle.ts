import { useDispatch } from 'react-redux'
import { toggleNav } from '../navSlice'

const useNavToggle = () => {
  const dispatch = useDispatch()
  const openNav = () => dispatch(toggleNav(true))
  return {
    openNav,
  }
}

export default useNavToggle
