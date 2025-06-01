import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProjectPage from "../pages/ProjectPage";
import DiaryPage from "../pages/DiaryPage";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project" element={ <ProjectPage /> } />
        <Route path="/diary" element={ <DiaryPage /> } /> 
        {/* 향후 다른 페이지도 여기에 추가 가능 */}
      </Routes>
    </Router>
  );
}
// 프로젝트 페이지를 만들어서 클릭하면 그 페이지로 연결되도록
