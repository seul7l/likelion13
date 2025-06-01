import { HeaderWrapper, Logo, Nav, NavItem, Search, Img, R, Input} from "./Header.styles";
import SearchImg from "../../images/search.png"
import { useLocation } from "react-router-dom";


export function Header() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <HeaderWrapper>
      <Logo>IDT</Logo>

      {(path === '/project') && (
        <Search>
          <Img src={SearchImg} alt="돋보기" />
          <Input placeholder="키워드를 입력하세요." />
          <div>
            <R>→</R>
          </div>
        </Search>
      )}

      <Nav>
        <NavItem to="/" className={path === '/' ? 'active1' : ''}>About</NavItem>
        <NavItem to="/project" className={path === '/project' ? 'active2' : ''}>Project</NavItem>
        <NavItem to="/diary" className={path === '/diary' ? 'active3' : ''}>Diary</NavItem>
        <NavItem>QnA</NavItem>
      </Nav>
    </HeaderWrapper>
  );
}