import styled from "styled-components";

export const ButtonDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 90px;
align-self: stretch;
`;

export const Button = styled.button`
width: 300px;
height: 150px;
flex-shrink: 0;
border-radius: 16px;
background: linear-gradient(180deg, #636363 0%, #1C1C1C 100%);
color: #FEFEFE;
text-align: center;
font-family: Pretendard;
font-size: 25px;
font-style: normal;
font-weight: 700;
line-height: normal;
margin: -10px;

  &:hover {
    background: #444;
  }
`;