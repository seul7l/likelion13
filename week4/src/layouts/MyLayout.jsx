import React from "react";
import styled from "styled-components";
import { Link } from "react-router";
import UserInfo from "../UserInfo";

function MyLayout() {
  return (
    <Mypage>
      <h1>내 정보</h1>
      <MyInfo>
        <Img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDA1MTNfMjM2%2FMDAxNzE1NTk2NTk3MDM4.t9z3l3QZcacuuvKHMfQ5Ey50w4cRYA-NoRVy_0Y8Aesg.cgUaZgvP3UIuUlRgxwIwKaddW6oH7TMMZFyq63gFXqQg.JPEG%2Fchannels4_profile.jpg&type=sc960_832" alt="프로필 사진"></Img>
        <p>이름: {UserInfo.name}</p>
        <p>나이: {UserInfo.age}</p>
        <p>email: {UserInfo.email}</p>
      </MyInfo>
    <ChangeButton to="/account/edit">수정하기</ChangeButton>
    </Mypage>
    
  );
}



const Img = styled.img`
  width:100px
`;

const Mypage = styled.div`
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
`;

const MyInfo = styled.div``;

const ChangeButton = styled(Link)`
    background: darkgray;
    font-size: 1rem;
    font-weight: 600;
    color: white;
    padding: 0.5rem 1rem;
    text-decoration: none;
    border-radius: 4px;
    display: inline-block;
`;





export default MyLayout;
