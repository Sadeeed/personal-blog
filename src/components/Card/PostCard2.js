import { Link } from "react-router-dom";
import { CalendarTime, Clock } from "tabler-icons-react";
import c1 from "../../assets/images/card-header.jpg";

const PostCard2 = (props) => {

  const post_link = `/p/${props.slug}/`

  return (
    <article className="has-image">
      <header className="article-header">
        <div className="article-image">
          <Link to={post_link} state={props.data}>
            <img src={c1} alt="alt text" width={800} height={534} />
          </Link>
        </div>
        <div className="article-details">
          <header className="article-category">
            <Link to="/categories/themes/">themes</Link>
            <Link to="/categories/syntax/">syntax</Link>
          </header>
          <div className="article-title-wrapper">
            <h2 className="article-title">
              <Link to={post_link} state={props.data}>{props.title}</Link>
            </h2>
            <h3 className="article-subtitle">
                {props.subtitle}
            </h3>
          </div>
          <footer className="article-time">
            <div>
              <CalendarTime size={24} strokeWidth={2} />
              <time className="article-time--published">{props.created}</time>
            </div>
            <div>
              <Clock size={24} strokeWidth={2} />
              <time className="article-time--reading">3 minute read</time>
            </div>
          </footer>
        </div>
      </header>
    </article>
  );
};

export default PostCard2;
