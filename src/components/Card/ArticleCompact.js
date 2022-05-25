import c1 from "../../assets/images/card-header.jpg";
import { Link } from "react-router-dom";

const ArticleCompact = (props) => {
  return (
    <article>
      <Link to="/p/markdown-syntax-guide/">
        <div className="article-details">
          <h2 className="article-title">Markdown Syntax Guide</h2>
          <footer className="article-time">
            <time dateTime="2019-03-11T00:00:00Z">Mar 11, 2019</time>
          </footer>
        </div>
        <div className="article-image">
          <img
            src={c1}
            alt="Markdown Syntax Guide"
            loading="lazy"
            width={120}
            height={120}
          />
        </div>
      </Link>
    </article>
  );
};

export default ArticleCompact;
