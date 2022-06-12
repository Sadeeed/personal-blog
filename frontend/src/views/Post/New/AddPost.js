import { useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import rehypeSanitize from "rehype-sanitize";
import Footer from "../../../components/Footer/Footer";
import SidebarLeft from "../../../components/Sidebar/SidebarLeft";
import Button from "../../../components/Buttons/Button";
import { useLocation, useNavigate } from "react-router-dom";
import { addPost } from "../../../service/api.js";

const AddPost = (props) => {
  // const location = useLocation();
  // const article = location.state;
  const [title, setTitle] = useState();
  const [subtitle, setSubTitle] = useState();
  const [value, setValue] = useState();

  // const create_link = `/n/${article.slug}`
  const navigate = useNavigate();

  async function handleOnClick() {
    const post = {
      title: title,
      subtitle: subtitle,
      content: value,
    };
    await addPost(post).then((res) => {
      if (res.status == 200) {
        navigate("/");
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
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          ></input>
          <input
            name="subtitle"
            placeholder="Abstract"
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

export default AddPost;
