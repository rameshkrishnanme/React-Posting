import { useEffect, useState } from "react";

import NewPost from "./NewPost.jsx";
import Post from "./Post.jsx";
import Modal from "./Modal.jsx";
import styles from "./PostsList.module.css";

function PostsList({ isPosting, stopPosting }) {
  //  fetch("http://localhost:8080/posts")
  //    .then((response) => response.json())
  //    .then((data) => {
  //      setPosts(data.posts);
  //    });
  const [posts, setPosts] = useState([]);
  const [isFecthing, setIsFetching] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      setIsFetching(true);
      const response = await fetch("http://localhost:8080/posts");
      const data = await response.json();
      setPosts(data.posts);
      setIsFetching(false);
    }
    fetchPosts();
  }, []);

  function addPostHandler(postData) {
    // setPosts([postData, ...posts]);
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
    }); // POST request to add a new post")
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
      {!isFecthing && posts.length === 0 && (
        <p className={styles.noposts}>No posts found. Start adding some!</p>
      )}
      {!isFecthing && posts.length > 0 && (
        <ul className={styles.posts}>
          {posts.map((post, index) => {
            return <Post key={index} author={post.author} body={post.body} />;
          })}
        </ul>
      )}
      {isFecthing && <p className={styles.noposts}>Loading Posts...</p>}
    </>
  );
}

export default PostsList;
