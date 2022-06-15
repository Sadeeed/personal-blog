function Footer(props) {
  return (
    <footer className="site-footer">
      <section className="copyright">© 2021 - 2022 Sadeed</section>
      <section className="powerby">
        Based on{" "}
        <a href="https://gohugo.io/" target="_blank" rel="noreferrer">
          Hugo
        </a>{" "}
        Theme{" "}
        <b>
          <a
            href="https://github.com/CaiJimmy/hugo-theme-stack"
            target="_blank"
            rel="noreferrer"
            data-version="3.11.0"
          >
            Stack
          </a>
        </b>{" "}
        <br/>
        Ported by{" "}
        <a href="https://github.com/Sadeeed" target="_blank" rel="noreferrer">
          Sadeed
        </a>
      </section>
    </footer>
  );
}

export default Footer;
