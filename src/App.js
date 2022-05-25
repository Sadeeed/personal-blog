import { Routes, Route } from "react-router-dom";
import "./assets/css/css2.css";
import "./assets/css/style.css";
import AboutPage from "./views/About/AboutPage";
import ArchivePage from "./views/Archives/ArchivePage";
import EditPage from "./views/Edit/EditPage";
import LandingPage from "./views/LandingPage/LandingPage";
import PostPage from "./views/Post/PostPage";
import SearchPage from "./views/Search/SearchPage";
import SignUp from "./views/SignUpPage/SignUp"
import Dashboard from "./views/Dashboard/Dashboard"

function App() {
  return (
    <Routes>
      <Route index element={<LandingPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/archives" element={<ArchivePage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/p/:slug" element={<PostPage />} />
      <Route path="/e/:slug" element={<EditPage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
