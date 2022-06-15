import { Hash, Infinity, Search, Tag } from "tabler-icons-react";
import { Link } from "react-router-dom";

const SidebarRight = (props) => {
  return (
    <aside className="sidebar right-sidebar sticky">
      <form action="/search/" className="search-form widget">
        <p>
          <label>Search</label>
          <input name="keyword" required="" placeholder="Type something..." />
          <button title="Search">
            <Search size={24} strokeWidth={2} />
          </button>
        </p>
      </form>
      <section className="widget archives">
        <div className="widget-icon">
          <Infinity size={24} strokeWidth={2} />
        </div>
        <h2 className="widget-title section-title">Archives</h2>
        <div className="widget-archive--list">
          <div className="archives-year">
            <Link to="/"> 
              <span className="year">2019</span>
              <span className="count">5</span>
            </Link>
          </div>
        </div>
      </section>
      <section className="widget tagCloud">
        <div className="widget-icon">
          <Hash size={24} strokeWidth={2} />
        </div>
        <h2 className="widget-title section-title">Categories</h2>
        <div className="tagCloud-tags">
          <Link to="/" className="font_size_2">
            Test
          </Link>
          <Link to="/" className="font_size_1">
            syntax
          </Link>
          <Link to="/" className="font_size_1">
            Test with whitespaces
          </Link>
          <Link to="/" className="font_size_1">
            themes
          </Link>
        </div>
      </section>
      <section className="widget tagCloud">
        <div className="widget-icon">
          <Tag size={24} strokeWidth={2} />
        </div>
        <h2 className="widget-title section-title">Tags</h2>
        <div className="tagCloud-tags">
          <Link to="/" className="font_size_2">
            markdown
          </Link>
          <Link to="/" className="font_size_1">
            css
          </Link>
          <Link to="/" className="font_size_1">
            emoji
          </Link>
        </div>
      </section>
    </aside>
  );
};

export default SidebarRight;
