import { Link } from "react-router-dom";

function PaginationButtons() {
  return (
    <div>
      <div className="m-3">
        <div className="pagination">
          <span class="page-links">
            <Link class="btn btn-outline-light btn-sm mx-1" to="previous/">
              &larr;
            </Link>
            <Link class="btn btn-outline-light btn-sm" to="next/">
              &rarr;
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default PaginationButtons;
