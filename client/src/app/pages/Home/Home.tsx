import styled from 'styled-components'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'

const Home = () => {
  return (
    <HOME>
      <Hero />
      <HowItWorks />
    </HOME>
  )
}

export default Home

const HOME = styled.div`
  width: 100vw;
  height: 200vh;
  background-color: rgb(0, 0, 0);
  display: grid;
  grid-template-rows: 95vh 95vh;
  place-items: center;
  text-align: center;
  position: relative;
  isolation: isolate;
`
