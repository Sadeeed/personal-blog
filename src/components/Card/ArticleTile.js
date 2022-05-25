import { Link } from "react-router-dom";

const ArticleTile = (props) => {
    return (
        <article className="has-image">
        <Link to="/categories/test/">
          <div className="article-image">
            <img
              src={props.image}
              alt=""
              width={250}
              height={150}
            />
          </div>
          <div className="article-details">
            <h2 className="article-title">{props.title}</h2>
          </div>
        </Link>
      </article>
    );
}
 
export default ArticleTile;