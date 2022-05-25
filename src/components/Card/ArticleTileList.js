import ArticleTile from "./ArticleTile";
import bg from "../../assets/images/card-header.jpg";

const ArticleTileList = (props) => {
    return (
    <div className="article-list--tile">
        <ArticleTile title="Test" image={bg} />
        <ArticleTile title="Test" image={bg} />
        <ArticleTile title="Test" image={bg} />
        <ArticleTile title="Test" image={bg} />
    </div>
    );
}
 
export default ArticleTileList;