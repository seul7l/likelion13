import styled from "styled-components";
import {Header2} from "../components/header/Header";
import PointImg from "../images/PinkPoint.png";
import Idt1 from "../images/idt1.png";
import Idt2 from "../images/idt2.png";
import Idt3 from "../images/idt3.png";
import Idt4 from "../images/idt4.png";
import Idt5 from "../images/idt5.png";
import Idt6 from "../images/idt6.png";
import Idt7 from "../images/idt7.png";
import Idt8 from "../images/idt8.png";


export default function ProjectPage() {
    return(
        <Div>
            <Header2/>
            <MainContainer>
                <TextContainer>
                    <Container>
                        <Point src={PointImg} alt="분홍 포인트"/>
                        <StrongText>Project</StrongText>
                    </Container>
                    <Text>2025 서경대학교 아이디어톤의 프로젝트 파일입니다. 클릭하여 상세한 정보를 확인하세요!</Text>
                    <Text>모아 놓으니 더 예쁘네요. 다들 너무 수고하셨습니다!</Text>
                </TextContainer>
                    <Idts>
                        <IdtImg src={Idt1} alt="1팀"/>
                        <IdtImg src={Idt2} alt="2팀"/>
                        <IdtImg src={Idt3} alt="3팀"/>
                        <IdtImg src={Idt4} alt="4팀"/>
                        <IdtImg src={Idt5} alt="5팀"/>
                        <IdtImg src={Idt6} alt="6팀"/>
                        <IdtImg src={Idt7} alt="7팀"/>
                        <IdtImg src={Idt8} alt="8팀"/>
                    </Idts>
            </MainContainer>

        </Div>
    );
}

const Div = styled.div`
  width: 1920px;
  height: 2530px;
`;

export const TextContainer = styled.div`
    margin-left:40px;
`;

export const MainContainer = styled.div`
  padding: 80px 100px 50px 100px;
  background: #fff;

`;

export const Container = styled.div`
  background: #fff;
  display:flex;
  gap: 20px;
  margin-bottom: 30px;
`;

export const Point = styled.img`
    width:60px;
`;

export const StrongText = styled.p`
  color: #1c1c1c;
  font-family: Pretendard;
  font-size: 50px;
  font-weight: bold;
`;

export const Text = styled.div`
    color: gray;
    font-family: Pretendard;
    font-size: 30px;
    font-weight: 500;
`;
const Idts = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
`;

const IdtImg = styled.img`
    width: 800px;
    border-radius: 25px;
    margin: 30px;
`;