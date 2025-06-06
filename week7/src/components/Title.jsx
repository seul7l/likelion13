import styled from "styled-components";
import TitleImg from "../images/FOOTWEAR.png";

export default function Title() {
    return(
        <TitleWrapper>
            <Path>{"홈 > Women > 신발"}</Path>
            <Text>신발</Text>
            <Img $background={TitleImg}/>
        </TitleWrapper>
    );
}

const TitleWrapper = styled.div`
    width: 1500px;
    height: 400px;
`;


const Path = styled.div`
    color:gray;  
    margin-left: 30px;
`;

const Text = styled.h1`
    display: flex;
    justify-content: center;
    margin: 50px 0px;
    font-weight: 800;
    color: #042369;
`;

const Img = styled.div`
  width: 1500px;
  height: 250px;
  background-image: url(${props => props.$background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
