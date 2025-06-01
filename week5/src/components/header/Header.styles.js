import styled from "styled-components";
import { Link } from "react-router-dom";


export const HeaderWrapper = styled.header`
  padding: 20px 100px;
  margin: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.h1`
  color: #1c1c1c;
  text-align: center;
  font-size: 70px;
  font-family: "TT Travels Next Trl";
  font-style: normal;
  font-weight: 700;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 20px;
  font-size: 25px; 
`;

export const NavItem = styled(Link)`
  color: #a7a7a7;
  font-weight: 500;
  margin: 20px;
  cursor: pointer;

  &.active1 {
    color: black;
    font-weight: bold;
    border-bottom: 5px solid black;
  }
  &.active2 {
    color: black;
    font-weight: bold;
    border-bottom: 5px solid #FF6D79;
  }
  &.active3 {
    color: black;
    font-weight: bold;
    border-bottom: 5px solid #01D354;
  }
`;


export const Search = styled.div`
  width: 500px;
  height: 45px;
  border-radius: 100px;
  background: #1C1C1C;
  display: flex;
  transform: translate(-50%, 15%);

`;

export const Img = styled.img`
  width: 30px;
  height: 30px;
  margin: 8px;
  transform: translateX(15%);
`;


export const R = styled.button`
color: #1C1C1C;
font-family: "Pretendard";
font-size: 18px;
font-weight: bold;
font-style: normal;
line-height: normal;
border-radius: 60%;
width: 30px;
height: 30px;
background-color: white;
display: flex;
justify-content: center;
margin-top: 8px;
margin-right: 12px;
cursor: pointer;
`;

export const Input = styled.input`
  background-color: black;
  flex: 1;
  color:white;
  font-size: 20px;
  transform: scale(0.95);
`;