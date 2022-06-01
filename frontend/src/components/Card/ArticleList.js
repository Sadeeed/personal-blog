import PostCard2 from "./PostCard2";

const ArticleList = (props) => {
  return (
    <section className="article-list">
      {props.article.map((post) => (
        <PostCard2
          key={post.id}
          title={post.title}
          author={post.author}
          subtitle={post.subtitle}
          created={post.created}
          slug={post.slug}
          data={post}
        />
      ))}
      {/* <PostCard2
        title="Markdown Syntax Guide"
        author="unknown"
        content="Sample article showcasing basic Markdown syntax and formatting for HTML elements."
        created="Mar 11, 2019"
      /> */}
      {/* <PostCard2
        title="Markdown Syntax Guide"
        author="unknown"
        content="Sample article showcasing basic Markdown syntax and formatting for HTML elements."
        created="Mar 11, 2019"
      />

      <PostCard2
        title="Markdown Syntax Guide"
        author="unknown"
        content="Sample article showcasing basic Markdown syntax and formatting for HTML elements."
        created="Mar 11, 2019"
      /> */}
    </section>
  );
};

export default ArticleList;
