import MainArticle from "../../components/Card/MainArticle";
import SidebarLeft from "../../components/Sidebar/SidebarLeft";
import Footer from "../../components/Footer/Footer";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { deletePost } from "../../service/api";
// import SidebarRightPost from "../../components/Sidebar/SidebarRightPost";

const PostPage = (props) => {
  const location = useLocation();
  const article = location.state;

  const edit_link = `/e/${article.slug}`
  const delete_link = `/d/${article.slug}`

  const navigate = useNavigate()

  async function handleDelete() {
    await deletePost(article, delete_link).then((res) => {
      if (res.data.deletedCount > 0) {
        navigate('/')
      }
    });
  }

  return (
    <div className="article-page">
      <div className="container main-container flex on-phone--column extended">
        <SidebarLeft />
        <main className="main full-width">
          <MainArticle
            data={article}
            title={article.title}
            subtitle={article.subtitle}
            published={article.created}
            content={article.content}
          />
          <Link className="edit-button" to={edit_link} state={article}>Edit</Link>
          <button className="delete-button" onClick={handleDelete}>Delete</button>
          <Footer />
        </main>
        {/* <SidebarRightPost/> */}
      </div>
    </div>
  );
};

export default PostPage;
