import { Hash } from "tabler-icons-react";

const SidebarRightPost = (props) => {
  return (
    <aside className="sidebar right-sidebar sticky">
      <section className="widget archives">
        <div className="widget-icon">
          <Hash size={24} strokeWidth={2} />
        </div>
        <h2 className="widget-title section-title">Table of contents</h2>
        <div className="widget--toc">
          <nav id="TableOfContents">
            <ol>
              <li>
                <a href="#mane-refeci-capiebant-unda-mulcebat">
                  Mane refeci capiebant unda mulcebat
                </a>
              </li>
            </ol>
          </nav>
        </div>
      </section>
    </aside>
  );
};

export default SidebarRightPost;
