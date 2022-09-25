import React from "react";
import styled from "styled-components";
import userIcon from "../images/D_Si5pvVUAEb0Cd.jpg";

function UserIcon() {
  return (
    <UserIconContainer>
      <UserIconImage src={userIcon} alt="" />
    </UserIconContainer>
  );
}

export default UserIcon;

const UserIconContainer = styled.div`
  width: 40px;
  border-radius: 50%;
  cursor: pointer;
`;
const UserIconImage = styled.img`
  width: 100%;
  border-radius: inherit;
`;
