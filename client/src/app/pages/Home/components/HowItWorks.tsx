import styled from 'styled-components'

const HowItWorks = () => {
  return (
    <HOW_IT_WORKS>
      <SCROLL_DOWN>
        <DOWNARROW />
      </SCROLL_DOWN>
    </HOW_IT_WORKS>
  )
}

export default HowItWorks

const HOW_IT_WORKS = styled.div`
  width: 100vw;
  height: 100%;
  background-color: white;
  padding: 10px;
  box-sizing: border-box;
`

const SCROLL_DOWN = styled.div`
  display: grid;
  place-items: center;
  cursor: pointer;
  width: 75px;
  height: 75px;
  border: 1px solid white;
  border-radius: 50%;
  transform: translateX(-50%) translateY(-170%);
  position: absolute;
  left: 50%;
  animation: pingPong 2s infinite cubic-bezier(0.445, 0.05, 0.55, 0.95), fadeIn 4s forwards;
  @keyframes pingPong {
    0% {
      transform: translateX(-50%) translateY(-150%);
    }
    50% {
      transform: translateX(-50%) translateY(-200%);
    }
    100% {
      transform: translateX(-50%) translateY(-150%);
    }
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

const DOWNARROW = styled.div`
  width: 8px;
  height: 30px;
  ::before,
  ::after {
    content: '';
    position: absolute;
    width: 8px;
    height: 40px;
    background-color: white;
  }
  ::before {
    transform: translateX(90%) rotate(45deg);
    border-radius: 5px 5px 0 0;
  }
  ::after {
    transform: translateX(-190%) rotate(-45deg);
    border-radius: 5px 5px 0 0;
  }
`
