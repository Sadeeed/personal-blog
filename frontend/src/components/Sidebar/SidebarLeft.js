import {
  Archive,
  BrandGithub,
  BrandTwitter,
  Home,
  Login,
  Plus,
  Search,
  ToggleLeft,
  ToggleRight,
  User,
} from "tabler-icons-react";

import { Link, useLocation } from "react-router-dom";

import default_avatar from "../../assets/images/avatars/avatar_default.png";
import user_avatar from "../../assets/images/avatars/avatar_sadeed.jpg";

import menu_default from "../../assets/js/main.js";

function toggleDarkMode() {
  const elmt = document.documentElement;
  const current_theme = elmt.dataset.scheme;
  current_theme === "dark"
    ? setColorScheme(elmt, "light")
    : setColorScheme(elmt, "dark");
}

function setColorScheme(element, scheme) {
  element.dataset.scheme = scheme;
  localStorage.setItem("scheme", scheme);
}

const SidebarLeft = (props) => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <aside className="sidebar left-sidebar sticky ">
      <button
        className="hamburger hamburger--spin"
        type="button"
        id="toggle-menu"
        aria-label="Toggle Menu"
        onClick={menu_default}
      >
        <span className="hamburger-box">
          <span className="hamburger-inner" />
        </span>
      </button>
      <header>
        <figure className="site-avatar">
          <Link to="/">
            <img
              src={user_avatar}
              className="site-logo"
              loading="lazy"
              alt="Avatar"
              width={300}
              height={300}
            />
          </Link>
          <span className="emoji">🍥</span>
        </figure>
        <div className="site-meta">
          <h1 className="site-name">
            <Link to="/">Sadeed's Blog</Link>
          </h1>
          <h2 className="site-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h2>
        </div>
      </header>
      <ol className="social-menu">
        <li>
          <a
            href="https://github.com/Sadeeed"
            target="_blank"
            title="GitHub"
            rel="noreferrer"
          >
            <BrandGithub size={24} strokeWidth={2} />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/icesoop"
            target="_blank"
            title="Twitter"
            rel="noreferrer"
          >
            <BrandTwitter size={24} strokeWidth={2} />
          </a>
        </li>
      </ol>
      <ol className="menu" id="main-menu">
        <li className={path === "/" ? "current" : ""}>
          <Link to="/">
            <Home size={24} strokeWidth={2} />
            <span>Home</span>
          </Link>
        </li>
        <li className={path === "/about/" ? "current" : ""}>
          <Link to="/about/">
            <User size={24} strokeWidth={2} />
            <span>About</span>
          </Link>
        </li>
        <li className={path === "/archives/" ? "current" : ""}>
          <Link to="/archives/">
            <Archive size={24} strokeWidth={2} />
            <span>Archives</span>
          </Link>
        </li>
        <li className={path === "/search/" ? "current" : ""}>
          <Link to="/search/">
            <Search size={24} strokeWidth={2} />
            <span>Search</span>
          </Link>
        </li>
        <li className={path === "/login/" ? "current" : ""}>
          <Link to="/login/">
            <Login size={24} strokeWidth={2} />
            <span>Login</span>
          </Link>
        </li>
        <li className={path === "/n/" ? "current" : ""}>
          <Link to="/n/">
            <Plus size={24} strokeWidth={2} />
            <span>New</span>
          </Link>
        </li>
        <div className="menu-bottom-section">
          <li id="dark-mode-toggle" onClick={toggleDarkMode}>
            <ToggleLeft size={24} strokeWidth={2} />
            <ToggleRight size={24} strokeWidth={2} />
            <span>Dark Mode</span>
          </li>
        </div>
      </ol>
    </aside>
  );
};

export default SidebarLeft;
