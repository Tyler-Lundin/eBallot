import styled, { createGlobalStyle } from 'styled-components'
import Nav from './features/nav/mobile/Nav'
import NavDesktop from './features/nav/desktop/NavDesktop'
import { useApp } from './useApp'

const GLOBAL_STYLE = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    min-width: 100vw;
    min-height: 100vh;
  }
  * {
    margin: 0;
    padding: 0;
  }
`

function App() {
  const { routes, isOnMobile } = useApp()
  return (
    <APP>
      <GLOBAL_STYLE />
      {isOnMobile && <Nav />}
      {!isOnMobile && <NavDesktop />}
      {routes}
    </APP>
  )
}

export default App

const APP = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgb(90, 90, 90);
`
