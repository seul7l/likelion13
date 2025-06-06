import styled from "styled-components";
import Asics_Logo2 from "../images/Asics_Logo2.png";

export default function Footer() {
    return(
        <FooterWrapper>
            <Logo src={Asics_Logo2} alt="Asics Logo2" />
            <Section>
                <Section1>
                    <Text_m>고객상담실</Text_m>
                    <Text_l>080-929-3535 | 080-930-3535</Text_l>
                    <Text_s>운영시간 : 월~금 AM 10:00~PM 17:00</Text_s>
                    <Text_s>점심심시간 : PM 12:00~PM 13:00</Text_s>
                    <Text_s>*공휴일은 고객상담실 휴무입니다.</Text_s>
                </Section1>
                <hr/>
                <Section2>
                    <div>
                        <Text_m>고객센터</Text_m>
                        <Text_m>공지사항</Text_m>
                        <Text_m>1:1문의</Text_m>
                        <Text_m>주문조회</Text_m>
                        <Text_m>FAQ</Text_m>
                        <Text_m>사이즈 가이드</Text_m>
                    </div>
                    <div>
                        <Text_m>회사소개</Text_m>
                        <Text_m>About ASICS</Text_m>
                        <Text_m>Sustainability</Text_m>
                        <Text_m>Carbon Footprint</Text_m>
                        <Text_m>Move Her Mind</Text_m>

                    </div>
                    <div>
                        <Text_m>사이트맵</Text_m>
                        <Text_m>매장찾기</Text_m>
                    </div>
                </Section2>
                <hr/>
                <Section3>
                    <Text_m>이용약관</Text_m>
                    <Text_m>쿠키규정</Text_m>
                    <Text_m>개인정보처리방침</Text_m>
                    <Text_xs>(주) 아식스코리아 / 대표 : 김원무 </Text_xs>
                    <Text_xs>주소 : 서울특별시 중구 올지로5길 16 (삼화타워) 14F</Text_xs>
                    <Text_xs>대표 전화 : 02-3663-8335/ 고객 상담실 : 080-930:3535</Text_xs>
                    <Text_xs>사업자등록번호 : 109-86-10809</Text_xs>
                    <Text_xs>통신판매신고번호 : 2018-서울중구-0740</Text_xs>
                    <Text_xs>E-mail : customercare-kr@asics.com</Text_xs>
                    <Text_xs>사업자정보확인</Text_xs>
                    <Text_xs>ⓒ 2024 ASICS Korea</Text_xs>
                </Section3>
            </Section>
        </FooterWrapper>
    );
}

const FooterWrapper = styled.div`
    height: 350px;
    padding: 20px;
    background-color: #001F62;
    color: white;
    display: flex;
    flex-direction : row;
    gap:30px;
`;

const Logo = styled.img`
    height: 60px;

`;

const Section = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Section1 = styled.div`
    margin: 20px;
`;

const Section2 = styled.div`
    margin: 20px;
    display: flex;
    gap: 60px;
`;

const Section3 = styled.div`
    margin: 20px;
`;

const Text_s = styled.p`
    margin: 10px;
    font-size: small;
`;

const Text_m = styled.p`
    margin: 10px;
    font-size: medium;
    font-weight: 600;
`;

const Text_l = styled.p`
    margin: 0px -5px;
    font-size: large;
    font-weight: bold;
    transform: scaleX(0.9);
`;

const Text_xs = styled.p`
    margin: 5px 10px;
    font-size: small;
    font-weight: 200;
`;