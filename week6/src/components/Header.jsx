import styled from "styled-components";
import Asics_Logo from "../images/Asics_Logo.png"


export default function Header() {
    return(
        <>
            <HeaderWrapper>
                <Left>
                    <Logo src={Asics_Logo} alt="Asics Logo" />
                    <Menu>
                        <Item>Men</Item>
                        <Item>Women</Item>
                        <Item>Sports</Item>
                        <Item>Sportstyle</Item>
                        <Item>#RUN</Item>
                        <Item>Outlet</Item>
                    </Menu>
                </Left>
                <Right>
                    <Input placeholder="멀티 실내운동 슈즈 총집합"/>
                    <Item2>로그인/회원가입</Item2>
                    <Item2>고객센터</Item2>
                    <Item2>|</Item2>
                    <Item2>장바구니</Item2>
                </Right>
            </HeaderWrapper>
            <hr/>
        </>
    );
}

const Left = styled.div`
    display:flex;
    align-items: center;
`;

const Right = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    margin-right: 20px;
`;

const HeaderWrapper = styled.div`
    display:flex;   
    justify-content: space-between;
`;

const Logo = styled.img`
    height: 40px;
    margin: 15px 50px;
`;

const Menu = styled.div`
    display:flex;
    gap: 50px;
    
`;

const Item = styled.div`
    font-size: 15px; 
    color: #042369;
    font-weight: 700;
`;

const Input = styled.input`
    width: 230px;
    height: 30px;
    margin: 15px;
    border-radius: 30px;
    padding: 10px 20px;
    border: 1px solid #042369;
`;

const Item2 = styled.div`
    font-size: 12px; 
    color: #042369;
    font-weight: 700;
`;