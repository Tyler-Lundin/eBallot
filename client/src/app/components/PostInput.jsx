import React from "react";
import styled from "styled-components";
import UserIcon from "./UserIcon";

function PostInput() {
  return (
    <PostInputContainer>
      <UserIcon />
      <StartPoll placeholder="Start ballot" />
    </PostInputContainer>
  );
}

export default PostInput;

const PostInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1a1a1b;
  padding: 8px 20px;
  border-radius: 14px;
  margin-bottom: 30px;
`;

const StartPoll = styled.input`
  border: 0;
  outline: none;
  font-size: 20px;
  background-color: #1a1a1b;
  margin-left: 1em;
  color: white;
  caret-color: #b3fffa;
  width: 100%;
`;
