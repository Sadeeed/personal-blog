import ArticleCompact from "./ArticleCompact";

const ArticleCompactList = (props) => {
    return (
        <div className={`${props.cname ? props.cname : ''} article-list--compact`}>
            <ArticleCompact/>
            <ArticleCompact/>
            <ArticleCompact/>
            <ArticleCompact/>
            <ArticleCompact/>
        </div>
    );
}
 
export default ArticleCompactList;