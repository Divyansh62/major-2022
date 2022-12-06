import React from "react";
import { useSelector } from "react-redux";

function ImagesPosts(props) {
  const { post } = useSelector((state) => state.posts);
  return (
    <div>
      <img
        alt=""
        src={
          post.selectedFile ||
          "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
        }
      />
    </div>
  );
}

export default ImagesPosts;
