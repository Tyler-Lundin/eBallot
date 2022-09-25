import React from "react";
import styled from "styled-components";

function Logo() {
  return (
    <LogoContainer>
      <LogoH1>eBallot</LogoH1>
    </LogoContainer>
  );
}

export default Logo;

const LogoContainer = styled.div``;

const LogoH1 = styled.h1`
  font-size: 30px;
  font-family: monospace;
  color: #79b9b5;
  cursor: pointer;
  @media (max-width: 720px) {
    font-size: 23px;
  }
`;
