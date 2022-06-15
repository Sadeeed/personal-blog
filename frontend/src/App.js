import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./assets/css/css2.css";
import "./assets/css/style.css";
import AboutPage from "./views/About/AboutPage";
import ArchivePage from "./views/Archives/ArchivePage";
import LandingPage from "./views/LandingPage/LandingPage";
import PostPage from "./views/Post/PostPage";
import SearchPage from "./views/Search/SearchPage";
import SignUp from "./views/Registration/SignUp";
import Dashboard from "./views/Dashboard/Dashboard";
import { useEffect } from "react";
import Login from "./views/Registration/Login";
import AddPost from "./views/Post/New/AddPost";
import EditPage from "./views/Post/Edit/EditPage";

function App() {
  useEffect(() => {
    const current_theme = localStorage.getItem("scheme");
    if (current_theme === "light") {
      document.documentElement.dataset.scheme = "light";
    } else {
      localStorage.setItem("scheme", "dark");
    }
  });

  return (
    <Routes>
      <Route index element={<LandingPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/archives" element={<ArchivePage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/p/:slug" element={<PostPage />} />
      <Route path="/e/:slug" element={<EditPage />} />
      <Route path="/n" element={<AddPost />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      {/* <Route path="/dashboard" element={<Dashboard />} /> */}
    </Routes>
  );
}

export default App;
