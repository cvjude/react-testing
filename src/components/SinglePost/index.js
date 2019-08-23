import React from "react";
import propTypes from "prop-types";

const PostItem = props => {
  const { title, desc } = props;

  if (!title) return null;
  return (
    <div data-test="postComponent">
      <h2 data-test="postTitle">{title}</h2>
      <div data-test="postDescription">{desc}</div>
    </div>
  );
};

PostItem.propTypes = {
  title: propTypes.string,
  desc: propTypes.string
};

export default PostItem;
