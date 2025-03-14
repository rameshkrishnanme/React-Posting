import { useState } from "react";

import NewPost from "./NewPost.jsx";
import Post from "./Post.jsx";
import Modal from "./Modal.jsx";
import styles from "./PostsList.module.css";

function PostsList({ isPosting, stopPosting }) {
  const [posts, setPosts] = useState([]);

  function addPostHandler(postData) {
    // setPosts([postData, ...posts]);
    setPosts((prevPosts) => {
      return [...prevPosts, postData];
    });
  }

  return (
    <>
      {isPosting && (
        <Modal onClose={stopPosting}>
          <NewPost onCancel={stopPosting} onAddPost={addPostHandler} />
        </Modal>
      )}
      <ul className={styles.posts}>
        {posts.map((post, index) => {
          return <Post key={index} author={post.author} body={post.body} />;
        })};
        
      </ul>
    </>
  );
}

export default PostsList;
