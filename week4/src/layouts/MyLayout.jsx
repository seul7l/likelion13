import styled from "styled-components";
import { Outlet } from "react-router";

function MyLayout() {
  return (
    <Layout>
      <Outlet/>
    </Layout>   
  );
}


const Layout = styled.div`
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
`;

export default MyLayout;