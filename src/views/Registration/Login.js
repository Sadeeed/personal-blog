import React, { Component } from "react";
import Footer from "../../components/Footer/Footer";
import LoginForm from "../../components/Forms/LoginForm";
import SidebarLeft from "../../components/Sidebar/SidebarLeft";

class Login extends Component {
  state = {};

  render() {
    return (
      <div className="article-page">
        <div className="container main-container flex on-phone--column extended">
          <SidebarLeft />
          <main className="main full-width">
            <LoginForm />
            <Footer />
          </main>
        </div>
      </div>
    );
  }
}

export default Login;
