import styled from "styled-components";
import Home from "./pages/Home";

//useRoutes was giving some kind of error. I'm initially making app without routes
//later any one of us can handle it
// import { useRoutes } from 'react-router-dom'

function App() {
  return (
    <APP>
      <Home />
    </APP>
  );
}

export default App;

const APP = styled.div``;

