import { Link } from "react-router-dom";

function Header(props) {
    return (
      <header className="p-3 text-white">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <Link
                  to="/"
                  className="nav-link px-2 text-secondary"
                >
                  Home
                </Link>
              </li>
              {/* <li>
                <a href="/admin" className="nav-link px-2 text-white">
                  Admin
                </a>
              </li> */}
            </ul>
            <div className="text-end">
              <b>
              </b>
              <Link
                role="button"
                to="/dashboard"
                className="btn btn-outline-light me-2"
              >
                Dashboard
              </Link>
              {/* <Link
                role="button"
                to="new/"
                className="btn btn-outline-light me-2"
              >
                New Post
              </Link>
              <Link
                role="button"
                to="logout/"
                className="btn btn-outline-light me-2"
              >
                Logout
              </Link>
              <Link
                role="button"
                to="login/"
                className="btn btn-outline-light me-2"
              >
                Login
              </Link> */}
              <Link
                role="button"
                to="/register"
                className="btn btn-outline-light me-2"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </header>
    );
}

export default Header;