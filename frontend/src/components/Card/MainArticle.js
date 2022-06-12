import { Link, useLocation } from "react-router-dom";
import { CalendarTime, Clock, Copyright } from "tabler-icons-react";
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import c1 from "../../assets/images/card-header.jpg";

const MainArticle = (props) => {
  function ApproximateReadingTime(text) {
    const wpm = 225;
    const words = text.trim().split(/\s+/).length;
    const time = Math.ceil(words / wpm);
    return time;
  }

  const location = useLocation();
  const path = location.pathname;

  return (
    <article className="has-image main-article">
      <header className="article-header">
        <div className="article-image">
          <Link to={path} state={props.data}>
            <img src={c1} alt="" width={800} height={533} />
          </Link>
        </div>
        <div className="article-details">
          <header className="article-category">
            <Link
              to="/categories/test/"
              style={{ backgroundColor: "#2a9d8f", color: "#fff" }}
            >
              Test
            </Link>
            <Link to="/categories/test-with-whitespaces/">
              Test with whitespaces
            </Link>
          </header>
          <div className="article-title-wrapper">
            <h2 className="article-title">
              <Link to={path} state={props.data}>
                {props.title}
              </Link>
            </h2>
            <h3 className="article-subtitle">{props.subtitle}</h3>
          </div>
          <footer className="article-time">
            <div>
              <CalendarTime size={24} strokeWidth={2} />
              <time className="article-time--published">{props.published}</time>
            </div>
            <div>
              <Clock size={24} strokeWidth={2} />
              <time className="article-time--reading">
                {ApproximateReadingTime(props.content)} minute read
              </time>
            </div>
          </footer>
        </div>
      </header>
      <section className="article-content">
        <ReactMarkdown children={props.content} remarkPlugins={[remarkGfm]} />
        {/* <h1>Hello World</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fermentum
          ligula et lacinia vestibulum. Quisque nec libero elit. Curabitur
          rhoncus finibus ipsum, ac pharetra nunc fringilla ac. Etiam eget enim
          et arcu ornare scelerisque ut quis dolor. Mauris vitae euismod ipsum,
          quis dictum tortor. Integer accumsan, metus et consectetur
          scelerisque, leo odio malesuada lorem, a tempor lectus leo eu enim.
          Nullam consectetur cursus turpis, id placerat dolor vulputate in.{" "}
        </p>
        <h2>Another Paragraph</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fermentum
          ligula et lacinia vestibulum. Quisque nec libero elit. Curabitur
          rhoncus finibus ipsum, ac pharetra nunc fringilla ac. Etiam eget enim
          et arcu ornare scelerisque ut quis dolor. Mauris vitae euismod ipsum,
          quis dictum tortor. Integer accumsan, metus et consectetur
          scelerisque, leo odio malesuada lorem, a tempor lectus leo eu enim.
          Nullam consectetur cursus turpis, id placerat dolor vulputate in.
  </p> */}
      </section>
      <footer className="article-footer">
        <section className="article-tags">
          <Link to="/tags/markdown/">markdown</Link>
          <Link to="/tags/text/">text</Link>
          <Link to="/tags/tag-with-whitespaces/">tag with whitespaces</Link>
        </section>
        <section className="article-copyright">
          <Copyright size={24} strokeWidth={2} />
          <span>Licensed under CC BY-NC-SA 4.0</span>
        </section>
      </footer>
    </article>
  );
};

export default MainArticle;
