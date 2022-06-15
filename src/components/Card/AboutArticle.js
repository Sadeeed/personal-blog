import { Link } from "react-router-dom";
import { CalendarTime, Clock, Copyright } from "tabler-icons-react";

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
              Hugo, the world's fastest framework for building websites
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
        <p>
          Written in Go, Hugo is an open source static site generator available
          under the
          <Link
            className="link"
            to="https://github.com/gohugoio/hugo/blob/master/LICENSE"
            target="_blank"
            rel="noopener"
          >
            Apache Licence 2.0.
          </Link>
          Hugo supports TOML, YAML and JSON data file types, Markdown and HTML
          content files and uses shortcodes to add rich content. Other notable
          features are taxonomies, multilingual mode, image processing, custom
          output formats, HTML/CSS/JS minification and support for Sass SCSS
          workflows.
        </p>
        <p>Hugo makes use of a variety of open source projects including:</p>
        <ul>
          <li>
            <Link
              className="link"
              to="https://github.com/yuin/goldmark"
              target="_blank"
              rel="noopener"
            >
              https://github.com/yuin/goldmark
            </Link>
          </li>
          <li>
            <Link
              className="link"
              to="https://github.com/alecthomas/chroma"
              target="_blank"
              rel="noopener"
            >
              https://github.com/alecthomas/chroma
            </Link>
          </li>
          <li>
            <Link
              className="link"
              to="https://github.com/muesli/smartcrop"
              target="_blank"
              rel="noopener"
            >
              https://github.com/muesli/smartcrop
            </Link>
          </li>
          <li>
            <Link
              className="link"
              to="https://github.com/spf13/cobra"
              target="_blank"
              rel="noopener"
            >
              https://github.com/spf13/cobra
            </Link>
          </li>
          <li>
            <Link
              className="link"
              to="https://github.com/spf13/viper"
              target="_blank"
              rel="noopener"
            >
              https://github.com/spf13/viper
            </Link>
          </li>
        </ul>
        <p>
          Hugo is ideal for blogs, corporate websites, creative portfolios,
          online magazines, single page applications or even a website with
          thousands of pages.
        </p>
        <p>
          Hugo is for people who want to hand code their own website without
          worrying about setting up complicated runtimes, dependencies and
          databases.
        </p>
        <p>
          Websites built with Hugo are extremelly fast, secure and can be
          deployed anywhere including, AWS, GitHub Pages, Heroku, Netlify and
          any other hosting provider.
        </p>
        <p>
          Learn more and contribute on
          <Link
            className="link"
            to="https://github.com/gohugoio"
            target="_blank"
            rel="noopener"
          >
            GitHub
          </Link>
          .
        </p>
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
