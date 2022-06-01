import { useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import rehypeSanitize from "rehype-sanitize";
import Footer from "../../components/Footer/Footer";
import SidebarLeft from "../../components/Sidebar/SidebarLeft";
import Button from "../../components/Buttons/Button";
import { useLocation } from "react-router-dom";

const EditPage = (props) => {
  const location = useLocation();
  const article = location.state;
  const [value, setValue] = useState(article.subtitle);

  function handleOnClick() {
    alert(value);
  }

  return (
    <div className="container main-container flex on-phone--column extended">
      <SidebarLeft />
      <main className="main full-width">
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
