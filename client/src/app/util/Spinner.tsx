import styled from 'styled-components'
// $m = multiplier
const Spinner = () => {
  return <SPINNER children={<SPINNER $m={0.9} children={<SPINNER $m={0.8} />} />} />
}

export default Spinner

const SPINNER = styled.div<{ $m?: number }>`
  height: ${({ $m }) => ($m ? $m * 240 : 240)}px;
  width: ${({ $m }) => ($m ? $m * 240 : 240)}px;
  aspect-ratio: 1 / 1;
  background-color: black;
  border-radius: 25px 20px 20px 20px;
  /* border: 10px solid white; */
  animation: spin ${({ $m }) => ($m ? $m * 3 : 3)}s cubic-bezier(0.175, 0.885, 0.32, 1.275) infinite,
    rainbow ${({ $m }) => ($m ? $m * 18 : 18)}s cubic-bezier(0.175, 0.885, 0.32, 1.275) infinite,
    wave ${({ $m }) => ($m ? $m * 3 : 3)}s cubic-bezier(0.175, 0.885, 0.32, 1.275) infinite;
  @keyframes wave {
    0% {
      border-radius: 10% 10%;
    }
    25% {
      border-radius: 30% 50%;
    }
    50% {
      border-radius: 70% 70%;
    }
    75% {
      border-radius: 50% 30%;
    }
    100% {
      border-radius: 10% 10%;
    }
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes rainbow {
    0% {
      background-color: lightcoral;
    }
    20% {
      background-color: darkorange;
    }
    40% {
      background-color: #40e075;
    }
    60% {
      background-color: skyblue;
    }
    80% {
      background-color: darkorchid;
    }
    100% {
      background-color: lightcoral;
    }
  }
`
