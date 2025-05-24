import styled from "styled-components";
import {Header3} from "../components/header/Header";
import {MainContainer, Container, Point, StrongText, Text, TextContainer} from "../pages/ProjectPage";
import PointImg from "../images/GreenPoint.png";
import LikelionIdtImg from "../images/LikelionIdt.png";
import PresentationImg from "../images/Presentation.png";
import ScoreImg from "../images/Score.png";



export default function DiaryPage() {
    return(
        <Div>
            <Header3/>
            <MainContainer>
                <TextContainer>
                    <Container>
                        <Point src={PointImg} alt="초록 포인트"/>
                        <StrongText>Diary</StrongText>
                    </Container>
                    <Text>2025 서경대학교 아이디어톤의 소감을 적는 곳 입니다. 여러분이 느꼈던 모든 것을 적어주세요!</Text>
                    <Text>이미지를 올리셔도 됩니다. 배치도 자유롭게 설정할 수 있어요! 방명록이라고 편하게 생각 부탁함~</Text>
                    <Button>방명록 쓰러가기</Button>
                </TextContainer>
                <div>
                    <YellowBox>
                        다들<br/>
                        사랑해요호<br/>
                        !!!!!!!
                    </YellowBox>
                    <LimeBox>
                        최강동아리멋사<br/>
                        그 중 서경대가 최강
                    </LimeBox>
                    <Img1 src={LikelionIdtImg} alt="아이디어톤 단체 사진"/>
                    <BlueBox>
                        <p>내가더더더</p>
                    </BlueBox>
                    <PinkBox>
                        글씨를 이렇게도 작게 쓸 수 있어요<br/>
                        그치만 이렇게 쓰면 안보이겠죠?<br/>
                        시원하게 씁시다<br/>
                        글씨를 이렇게도 작게 쓸 수 있어요<br/>
                        그치만 이렇게 쓰면 안보이겠죠?<br/>
                        시원하게 씁시다<br/>
                        글씨를 이렇게도 작게 쓸 수 있어요<br/>
                        그치만 이렇게 쓰면 안보이겠죠?<br/>
                        시원하게 씁시다
                    </PinkBox>
                    <Img2 src={PresentationImg} alt="발표중"/>
                    <PurpleBox>
                        여기 후기 쓰는 곳임<br/>
                        그래서 제 소감은요...<br/>
                        {"(이하생략"}
                    </PurpleBox>
                    <Img3 src={ScoreImg} alt="점수 집계 중"/>
                </div>
            </MainContainer>

        </Div>
    );
}

const Div = styled.div`
  width: 1920px;
  height: 4860px;
`;

const Button = styled.button`
    color: white;
    font-family: Pretendard;
    font-size: 40px;
    font-weight: bold;
    background: #00CE52;
    width: 360px;
    height: 120px;
    flex-shrink: 0;
    border: 2px solid #00CE52;
    border-radius: 15px;
    margin-top: 20px;
    cursor: pointer;
`;

const YellowBox = styled.div`
    width: 780px;
    height: 800px;
    flex-shrink: 0;
    background : #ffcd4e;
    border-radius: 15px;
    box-shadow: 15px 15px 15px 0px rgba(0, 0, 0, 0.20);
    margin: 150px 0px 0px 35px;
    font-size: 120px;
    font-weight: 900;
    z-index: -1;
    padding: 170px 100px 100px 100px;
`;


const LimeBox = styled.div`
    width: 800px;
    height: 400px;
    flex-shrink: 0;
    font-size: 80px;
    border-radius: 15px;
    background: #afd211;
    box-shadow: 15px 15px 15px 0px rgba(0, 0, 0, 0.20);
    transform: translate(92%, -150%);
    padding: 80px;
    font-weight: 900;
    line-height: 1.5;
`;

const Img1 = styled.img`
    transform: translate(55%, -35%);
    z-index: -1;
`;

const BlueBox = styled.div`
    width: 560px;
    height: 372.796px;
    transform: rotate(-6.485deg);
    flex-shrink: 0;
    border-radius: 15px;
    background: #5A5DFF;
    color: white;
    font-size:100px;
    font-weight: 900;
    padding: 120px 60px;
    box-shadow: 15px 15px 15px 0px rgba(0, 0, 0, 0.20);
    transform: rotate(-6.485deg) translate(40%, -165%) ;
`;

const PinkBox = styled.div`
    width: 522px;
    height: 537px;
    flex-shrink: 0;
    border-radius: 15px;
    background: #FF7984;
    color: white;
    font-size: 31px;
    font-weight: 500;
    line-height: 1.6;
    padding: 50px;
    box-shadow: 15px 15px 15px 0px rgba(0, 0, 0, 0.20);
    transform: translate(90%, -95%);
    z-index: -1;
`;

const Img2 = styled.img`
    transform: translate(20%, -110%);
`;

const PurpleBox = styled.div`
    width: 665px;
    height: 444px;
    flex-shrink: 0;
    color: white;
    font-size: 60px;
    font-weight: 700;
    padding: 80px;
    line-height: 1.5;
    border-radius: 15px;
    background: #593A6D;
    transform: translate(160%, -220%);
    box-shadow: 15px 15px 15px 0px rgba(0, 0, 0, 0.20);
`;

const Img3 = styled.img`
    transform: translate(35%, -84%);
`;