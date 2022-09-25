import React from "react";
import styled from "styled-components";

function Logo() {
  return (
    <SearchContainer>
      <SearchIcon
        viewBox="0 0 24 24"
        aria-hidden="true"
        class="r-1bwzh9t r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-4wgw6l r-f727ji r-bnwqim r-1plcrui r-lrvibr"
        fill="white"
      >
        <g>
          <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
        </g>
      </SearchIcon>
      <SearchInput placeholder="search..."></SearchInput>
    </SearchContainer>
  );
}

export default Logo;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  background-color: #1a1a1b;
  padding: 10px 20px;
  border-radius: 30px;
  margin-right: 1em;
  @media (max-width: 620px) {
    display: none;
  }
`;
const SearchIcon = styled.svg`
  fill: white !important;
  width: 25px;
`;
const SearchInput = styled.input`
  border: 0;
  outline: none;
  font-size: 17px;
  background-color: #1a1a1b;
  margin-left: 1em;
  color: white;
  caret-color: #b3fffa;
`;
