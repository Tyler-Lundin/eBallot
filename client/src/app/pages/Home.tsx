import React from "react";
import styled from "styled-components";
import Logo from "../components/Logo";
import PostBox from "../components/PostBox";
import PostInput from "../components/PostInput";
import Search from "../components/Search";
import UserIcon from "../components/UserIcon";

function Home() {
  return (
    <HomeContainer>
      <HomeTop>
        <Logo />
        <HomeTopRight>
          <Search />
          <UserIcon />
        </HomeTopRight>
      </HomeTop>
      <HomeBottom>
        <HomeBottomLeft>
          <PostInput />
          <PostBox />
          <PostBox />
          <PostBox />
          <PostBox />
          <PostBox />
          <PostBox />
          <PostBox />
          <PostBox />
          <PostBox />
          <PostBox />
          <PostBox />
        </HomeBottomLeft>
        <HomeBottomRight>
          <HomeBottomFeed></HomeBottomFeed>
          <HomeBottomFeed></HomeBottomFeed>
        </HomeBottomRight>
      </HomeBottom>
    </HomeContainer>
  );

export default Home;

const HomeContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #030303;
  color: white;
  padding-bottom: 20px;
`;

const HomeTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 10px;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  overflow-y: hidden;
  position: sticky;
  top: 0;
  z-index: 999;
  background: black;
  @media (max-width: 720px) {
    padding: 5px 10px;
  }
`;
const HomeTopRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const HomeBottom = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  min-height: 90vh;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding-top: 20px;
`;
const HomeBottomLeft = styled.div`
  width: 70%;
  min-height: 90vh;
  overflow-y: auto;
  padding-right: 10px;
  @media (max-width: 930px) {
    width: 98%;
    margin: 0 auto;
    padding-right: 0px;
  }
`;
const HomeBottomFeed = styled.div`
  min-height: 40vh;
  width: 100%;
  background-color: #1a1a1b;
  border-radius: 14px;
  padding: 10px;
  margin-bottom: 10px;
`;
const HomeBottomRight = styled.div`
  width: 30%;
  min-height: 100vh;
  overflow-y: hidden;
  position: sticky;
  top: -500px;
  padding-left: 10px;
  @media (max-width: 930px) {
    display: none;
  }
`;
