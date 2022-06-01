import React, { Component } from "react";
import { Link } from "react-router-dom";

class PostCard extends Component {
  state = {};
  render() {
    return (
      <div className="card m-3 bg-nord text-nord-main">
        <div className="card-body">
          <h2 className="card-title">{this.props.title}</h2>
          <p className="card-text text-nord-muted h6">
            {this.props.author} | {this.props.created}
          </p>
          <p className="card-text">{this.props.content}</p>
          <Link to="/post" className="btn btn-nord">
            Read More →
          </Link>
        </div>
      </div>
    );
  }
}

export default PostCard;
