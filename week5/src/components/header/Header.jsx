import { HeaderWrapper, Logo, Nav, NavItem, Search, Img, R, Input } from "./Header.styles";
import SearchImg from "../../images/search.png";
//import OneImg from "../../images/one.svg";

export function Header() {
  return (
    <HeaderWrapper>
      <Logo>IDT</Logo>
      <Nav>
        <NavItem className="active" to="/">About</NavItem>
        <NavItem to="/project">Project</NavItem>
        <NavItem to="/diary">Diary</NavItem>
        <NavItem>QnA</NavItem>
      </Nav>
    </HeaderWrapper>
  );
}

export function Header2() {
  return (
    <HeaderWrapper>
      <Logo>IDT</Logo>
      <Search>
        <Img src={SearchImg} alt="돋보기"/>
        <Input placeholder="키워드를 입력하세요."/>
        <div>
          <R>→</R>
        </div> 
      </Search>
      <Nav>
        <NavItem to="/">About</NavItem>
        <NavItem className="active2" to="/project">Project</NavItem>
        <NavItem to="/diary">Diary</NavItem>
        <NavItem>QnA</NavItem>
      </Nav>
    </HeaderWrapper>
  );
}

export function Header3() {
  return (
    <HeaderWrapper>
      <Logo>IDT</Logo>
      <Nav>
        <NavItem to="/">About</NavItem>
        <NavItem to="/project">Project</NavItem>
        <NavItem className="active3" to="/diary">Diary</NavItem>
        <NavItem>QnA</NavItem>
      </Nav>
    </HeaderWrapper>
  );
}