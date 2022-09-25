import React from "react";
import styled from "styled-components";
import UserIcon from "./UserIcon";
import like from "../images/like.svg";

function PostBox() {
  return (
    <PostContainer>
      <PostTop>
        <PostTopLeft>
          <UserIcon />
          <PostedBy>
            <TextH4>User Name</TextH4>
            <TextH5>user.demo@email.com</TextH5>
            <TextH6>2h</TextH6>
          </PostedBy>
        </PostTopLeft>
        <PostMoreSvg
          viewBox="0 0 24 24"
          aria-hidden="true"
          class="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"
        >
          <g>
            <circle cx="5" cy="12" r="2"></circle>
            <circle cx="12" cy="12" r="2"></circle>
            <circle cx="19" cy="12" r="2"></circle>
          </g>
        </PostMoreSvg>
      </PostTop>
      <PostMiddle>
        <PostQuestion>
          <TextQuestion>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
            aperiam ipsa! Ut recusandae ducimus voluptatibus nisi. Explicabo,
            nihil facilis voluptas illum corrupti suscipit rem tempora. Cum
            ipsam quia est fugit.
          </TextQuestion>
        </PostQuestion>
        <PostOptions>
          <PostOption>
            <TextOption>hello</TextOption>
          </PostOption>
          <PostOption>
            <TextOption>hello</TextOption>
          </PostOption>
          <PostOption>
            <TextOption>hello</TextOption>
          </PostOption>
          <PostOption>
            <TextOption>hello</TextOption>
          </PostOption>
        </PostOptions>
        <PostMiddleInfo>
          <TextH6>3k voted | 23 hours left</TextH6>
        </PostMiddleInfo>
      </PostMiddle>
      <PostBottom>
        <PostBottomIcons>
          <PostBottomSvg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 13H14C14 14.1046 13.1046 15 12 15C10.8954 15 10 14.1046 10 13H8C8 15.2091 9.79086 17 12 17C14.2091 17 16 15.2091 16 13Z"
              fill="currentColor"
            />
            <path
              d="M10 10C10 10.5523 9.55228 11 9 11C8.44772 11 8 10.5523 8 10C8 9.44771 8.44772 9 9 9C9.55228 9 10 9.44771 10 10Z"
              fill="currentColor"
            />
            <path
              d="M15 11C15.5523 11 16 10.5523 16 10C16 9.44771 15.5523 9 15 9C14.4477 9 14 9.44771 14 10C14 10.5523 14.4477 11 15 11Z"
              fill="currentColor"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12Z"
              fill="currentColor"
            />
          </PostBottomSvg>
          <PostIconText>Like</PostIconText>
        </PostBottomIcons>
        <PostBottomIcons>
          <PostBottomSvg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 11C9.55228 11 10 10.5523 10 10C10 9.44772 9.55228 9 9 9C8.44772 9 8 9.44772 8 10C8 10.5523 8.44772 11 9 11Z"
              fill="currentColor"
            />
            <path
              d="M14 17C14 15.8954 13.1046 15 12 15C10.8954 15 10 15.8954 10 17H8C8 14.7909 9.79086 13 12 13C14.2091 13 16 14.7909 16 17H14Z"
              fill="currentColor"
            />
            <path
              d="M16 10C16 10.5523 15.5523 11 15 11C14.4477 11 14 10.5523 14 10C14 9.44772 14.4477 9 15 9C15.5523 9 16 9.44772 16 10Z"
              fill="currentColor"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12Z"
              fill="currentColor"
            />
          </PostBottomSvg>
          <PostIconText>Dislike</PostIconText>
        </PostBottomIcons>
        <PostBottomIcons>
          <PostBottomSvg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17 9H7V7H17V9Z" fill="currentColor" />
            <path d="M7 13H17V11H7V13Z" fill="currentColor" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2 18V2H22V18H16V22H14C11.7909 22 10 20.2091 10 18H2ZM12 16V18C12 19.1046 12.8954 20 14 20V16H20V4H4V16H12Z"
              fill="currentColor"
            />
          </PostBottomSvg>
          <PostIconText>Comment</PostIconText>
        </PostBottomIcons>
        <PostBottomIcons>
          <PostBottomSvg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 9C19.6569 9 21 7.65685 21 6C21 4.34315 19.6569 3 18 3C16.3431 3 15 4.34315 15 6C15 6.12549 15.0077 6.24919 15.0227 6.37063L8.08261 9.84066C7.54305 9.32015 6.80891 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15C6.80891 15 7.54305 14.6798 8.08261 14.1593L15.0227 17.6294C15.0077 17.7508 15 17.8745 15 18C15 19.6569 16.3431 21 18 21C19.6569 21 21 19.6569 21 18C21 16.3431 19.6569 15 18 15C17.1911 15 16.457 15.3202 15.9174 15.8407L8.97733 12.3706C8.99229 12.2492 9 12.1255 9 12C9 11.8745 8.99229 11.7508 8.97733 11.6294L15.9174 8.15934C16.457 8.67985 17.1911 9 18 9Z"
              fill="currentColor"
            />
          </PostBottomSvg>
          <PostIconText>Share</PostIconText>
        </PostBottomIcons>
      </PostBottom>
    </PostContainer>
  );
}

export default PostBox;

const PostContainer = styled.div`
  background-color: #1a1a1b;
  margin-top: 1em;
  padding: 20px;
  border-radius: 14px;
  cursor: pointer;
`;
const PostTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const PostedBy = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 290px;
  flex-wrap: wrap;
  padding-left: 1em;
  @media (max-width: 550px) {
    width: 220px;
    padding-left: 0em;
  }
  @media (max-width: 380px) {
    width: auto;
  }
`;
const TextH5 = styled.h5`
  color: grey;
  font-size: 16px;
  margin-left: 10px;
  @media (max-width: 550px) {
    margin-left: 0px;
  }
  @media (max-width: 380px) {
    font-size: 12px;
  }
`;
const TextH6 = styled.h6`
  color: grey;
  font-size: 14px;
  @media (max-width: 550px) {
    margin-left: 10px;
  }
  @media (max-width: 380px) {
    font-size: 12px;
  }
`;
const TextH4 = styled.h4``;
const PostMoreSvg = styled.svg`
  fill: white;
  width: 28px;
  cursor: pointer;
`;
const PostTopLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const PostMiddle = styled.div``;
const PostQuestion = styled.div`
  padding-left: 60px;
  @media (max-width: 550px) {
    padding-left: 22px;
  }
  @media (max-width: 380px) {
    padding-left: 10px;
  }
`;
const TextQuestion = styled.h4`
  font-size: 15px;
  @media (max-width: 480px) {
    font-size: 12px;
  }
`;
const PostOptions = styled.div`
  padding: 0 20px;
  @media (max-width: 380px) {
    padding: 0 0px;
  }
`;
const PostMiddleInfo = styled.div`
  padding: 0 40px;
  @media (max-width: 380px) {
    padding: 0 10px;
  }
`;

const PostOption = styled.div`
  border: 1px solid #ffff;
  padding: 10px 20px;
  border-radius: 14px;
  margin-top: 15px;
  cursor: pointer;
`;
const TextOption = styled.h5``;
const PostIconText = styled.h5``;
const PostBottom = styled.div`
  padding: 20px 40px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  @media (max-width: 420px) {
    padding: 20px 0;
  }
`;
const PostBottomSvg = styled.svg`
  color: white;
  cursor: pointer;
  @media (max-width: 720px) {
    widht: 24px;
    height: 24px;
  }
  @media (max-width: 480px) {
    widht: 20px;
    height: 20px;
  }
`;
const PostBottomIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-right: 10%;
  cursor: pointer;
  @media (max-width: 330px) {
    margin-right: 5%;
  }
`;
