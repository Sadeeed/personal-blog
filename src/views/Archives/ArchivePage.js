import ArticleCompactList from "../../components/Card/ArticleCompactList";
import ArticleTileList from "../../components/Card/ArticleTileList";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import SidebarLeft from "../../components/Sidebar/SidebarLeft";

const ArchivePage = (props) => {
  return (
    <div className="container main-container flex on-phone--column extended">
      <SidebarLeft />
      <main className="main full-width">
        <header>
          <h2 className="section-title">Categories</h2>
          <div className="subsection-list">
            <ArticleTileList />
          </div>
        </header>
        <div className="archives-group" id={2019}>
          <h2 className="archives-date section-title">
            <Link to="/archives/#2019">2019</Link>
          </h2>
          <ArticleCompactList />
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default ArchivePage;
