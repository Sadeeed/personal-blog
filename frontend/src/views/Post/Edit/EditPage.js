import { useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import rehypeSanitize from "rehype-sanitize";
import Footer from "../../../components/Footer/Footer";
import SidebarLeft from "../../../components/Sidebar/SidebarLeft";
import Button from "../../../components/Buttons/Button";
import { useLocation, useNavigate } from "react-router-dom";
import { editPost } from "../../../service/api.js";

const EditPage = (props) => {
  const location = useLocation();
  const article = location.state;
  const [title, setTitle] = useState(article.title);
  const [subtitle, setSubTitle] = useState(article.subtitle);
  const [value, setValue] = useState(article.content);

  const edit_link = `/e/${article.slug}`;
  const navigate = useNavigate();

  async function handleOnClick() {
    const updatedPost = {
      slug: article.slug,
      title: title,
      subtitle: subtitle,
      content: value,
    };

    await editPost(updatedPost, edit_link).then((res) => {
      if (res.status === 200) {
        navigate(-1);
      }
    });
  }

  return (
    <div className="container main-container flex on-phone--column extended">
      <SidebarLeft />
      <main className="main full-width">
        <div className="post-form">
          <input
            name="title"
            placeholder="Enter your post title"
            value={title}
            disabled
          ></input>
          <input
            name="subtitle"
            placeholder="Abstract"
            value={subtitle}
            onChange={(e) => {
              setSubTitle(e.target.value);
            }}
          ></input>
        </div>
        <MDEditor
          visiableDragbar={false}
          height={300}
          preview={"edit"}
          value={value}
          onChange={setValue}
          previewOptions={{
            rehypePlugins: [[rehypeSanitize]],
          }}
        />
        <Button
          buttonText="Submit"
          handleOnClick={handleOnClick}
          type="submit"
        />
        <Footer />
      </main>
    </div>
  );
};

export default EditPage;
