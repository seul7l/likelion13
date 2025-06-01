import {Header} from "../components/header/Header";
import FeedbackButtons from "../components/homepage/FeedbackButton";
import FeedbackCards from "../components/homepage/FeedbackCard";
import styled from "styled-components";
import ideathonImg from "../images/ideathon.png";
import bgImg from "../images/Union.svg"

export default function HomePage() {
  return (
    <Div>
      <Header/>
      <MainContainer>
        <Section>
          <TopText>저번주에 진행되었던 아이디어톤, 모두 어떠셨나요?</TopText>
          <StrongText>여러분들의 생생한 후기가 궁금합니다!</StrongText>
           <FeedbackButtons />
        </Section>
        <ImageSection>
          <TextBlock>
            <BackgroundImage src={bgImg} alt="배경"/>
            <Box>
              <HighlightTextBlock>
                <HighlightText>How was your Ideathon?</HighlightText>
                <HighlightText>Please share your opinion !</HighlightText>
                <br/>
                <Text>진짜 언젠가 이런 후기 올릴 수 있는 사이트를 디자인 해보면 좋겠다는</Text>
                <Text>생각이 만들다보니 드네요. 프론트엔드 모두 화이팅!</Text>
            </HighlightTextBlock>
            </Box>
          </TextBlock>
          <Image src={ideathonImg} alt="Ideathon" />
        </ImageSection>
        <FeedbackCards />
      </MainContainer>
    </Div>
  );
}

const Div = styled.div`
  width: 1920px;
  height: 2530px;
`;

const MainContainer = styled.div`
  padding: 80px 100px;
  background: #fff;
`;

const Section = styled.div`
  text-align: center;
`;

const TopText = styled.p`
  color: #1c1c1c;
  text-align: center;
  font-family: Pretendard;
  font-size: 25px;
  font-style: normal;
  font-weight: 500;
`;

const StrongText = styled.p`
  color: #1c1c1c;
  text-align: center;
  font-family: Pretendard;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  margin: 10px 0 36px;
`;

const ImageSection = styled.div`
  margin: 80px -100px 80px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  flex-wrap: wrap;
`;

const TextBlock = styled.div`
  max-width: 700px;
  height: 700px;
  display: flex;
  z-index: 0;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const BackgroundImage = styled.img`
  position: absolute;
  top: 50px;
  left: 10px;
  width: 600px;
  object-fit: cover;
  z-index: -1;
  border-radius: 20px;
  pointer-events: none; /* 이미지 클릭 안 되게 */
`;

const HighlightTextBlock = styled.div`
  margin-bottom: 27px;
`;

const Box = styled.div`
  margin-left: 50px;
  transform: translateX(50px);
`;

const HighlightText = styled.p`
  border-radius: 10px;
  margin-left: 35px;
  color: #1c1c1c;
  font-family: Pretendard;
  font-size: 45px;
  font-style: normal;
  font-weight: 900;
`;

const Image = styled.img`
  width: 1000px;
  max-width: 100%;
  border-radius: 70px 0px 0px 70px;
`;

const Text = styled.p`
  color: #1c1c1c;
  text-align: start;
  font-family: Pretendard;
  font-size: 21px;
  font-style: normal;
  font-weight: 500;
  margin: 10px 0 0 35px;
`;
