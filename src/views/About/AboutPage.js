import AboutArticle from "../../components/Card/AboutArticle";
import Footer from "../../components/Footer/Footer";
import SidebarLeft from "../../components/Sidebar/SidebarLeft";

const AboutPage = (props) => {
  return (
    <div className="article-page">
      <div className="container main-container flex on-phone--column extended">
        <SidebarLeft />
        <main className="main full-width">
          <AboutArticle />
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default AboutPage;
