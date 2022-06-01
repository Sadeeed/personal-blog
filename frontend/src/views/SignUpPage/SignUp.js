import React, { Component } from "react";
import Footer from "../../components/Footer/Footer";
import SignupForm from "../../components/Forms/SignupForm";
import SidebarLeft from "../../components/Sidebar/SidebarLeft";

class SignUp extends Component {
  state = {};

  render() {
    return (
      <div className="article-page">
        <div className="container main-container flex on-phone--column extended">
          <SidebarLeft />
          <main className="main full-width">
            <SignupForm />
            <Footer />
          </main>
        </div>
      </div>
    );
  }
}

export default SignUp;
