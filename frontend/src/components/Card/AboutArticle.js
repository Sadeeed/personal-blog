import { Link } from "react-router-dom";
import { CalendarTime, Clock, Copyright } from "tabler-icons-react";
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { about } from "../../assets/js/posts.js";

const AboutArticle = (props) => {
  return (
    <article className="main-article">
      <header className="article-header">
        <div className="article-details">
          <div className="article-title-wrapper">
            <h2 className="article-title">
              <Link to="/about/">About</Link>
            </h2>
            <h3 className="article-subtitle">
              Hi, I am Sadeed a computer engineering student with a keen
              interest in web development.
            </h3>
          </div>
          <footer className="article-time">
            <div>
              <CalendarTime size={24} strokeWidth={2} />
              <time className="article-time--published">Feb 28, 2019</time>
            </div>
            <div>
              <Clock size={24} strokeWidth={2} />
              <time className="article-time--reading">1 minute read</time>
            </div>
          </footer>
        </div>
      </header>
      <section className="article-content">
        <ReactMarkdown children={about} remarkPlugins={[remarkGfm]} />
      </section>
      <footer className="article-footer">
        <section className="article-copyright">
          <Copyright size={24} strokeWidth={2} />
          <span>CC BY-NC-ND</span>
        </section>
        <section className="article-lastmod">
          <Clock size={24} strokeWidth={2} />
          <span>Last updated on Oct 09, 2020 00:00 UTC</span>
        </section>
      </footer>
    </article>
  );
};

export default AboutArticle;
