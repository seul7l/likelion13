import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FootwearPage from "./pages/FootwearPage";
import RootLayout from "./Layouts/RootLayout";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootLayout/>}>
            <Route index element={<FootwearPage />} />
        </Route>
      </Routes>
    </Router>
  );
}