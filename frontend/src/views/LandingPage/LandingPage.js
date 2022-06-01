import { useState } from "react";
import ArticleList from "../../components/Card/ArticleList";
import Footer from "../../components/Footer/Footer";
import SidebarLeft from "../../components/Sidebar/SidebarLeft";
import SidebarRight from "../../components/Sidebar/SidebarRight";

import { posts } from "../../assets/js/posts";

const LandingPage = () => {
  const [article, setArticle] = useState(posts);

  return (
    <div className="container main-container flex on-phone--column extended">
      <SidebarLeft />
      <main className="main full-width">
        <ArticleList article={article} />
        <Footer />
      </main>
      <SidebarRight />
    </div>
  );
};

export default LandingPage;
