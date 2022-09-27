import styled from 'styled-components'

const Spinner = () => {
  return <SPINNER />
}

export default Spinner

const SPINNER = styled.div`
  height: 40px;
  width: 40px;
  aspect-ratio: 1 / 1;
  background-color: black;
  border-radius: 25px 20px 20px 20px;
  animation: spin 2s linear infinite, rainbow 3s linear infinite,
    wave 5s cubic-bezier(0.175, 0.885, 0.32, 1.275) infinite;
  @keyframes wave {
    0% {
      border-radius: 10px 30px 10px 30px;
    }
    20% {
      border-radius: 10px 30px 10px 30px;
    }
    40% {
      border-radius: 20px 20px 20px 20px;
    }
    60% {
      border-radius: 20px 20px 20px 20px;
    }
    80% {
      border-radius: 30px 10px 30px 10px;
    }
    100% {
      border-radius: 10px 30px 10px 30px;
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
