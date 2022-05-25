import Footer from "../../components/Footer/Footer";
import SidebarLeft from "../../components/Sidebar/SidebarLeft";
import ArticleCompactList from "../../components/Card/ArticleCompactList";
import { Search } from "tabler-icons-react";

const SearchPage = (props) => {
  return (
    <div className="container main-container flex on-phone--column extended">
      <SidebarLeft />
      <main className="main full-width">
        <form
          action="/search/"
          className="search-form"
        //   data-json="http://localhost:1313/search/index.json"
        >
          <p>
            <label>Search</label>
            <input name="keyword" placeholder="Type something..." />
          </p>
          <button title="Search">
            <Search size={24} strokeWidth={2} />
          </button>
        </form>
        <div className="search-result">
          <h3 className="search-result--title section-title">
            1 pages (0.003 seconds)
          </h3>
          <ArticleCompactList cname="search-result--list" />
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default SearchPage;
