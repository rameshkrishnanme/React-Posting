import NewPost from "./NewPost.jsx";
import Post from "./Post.jsx";
import styles from "./PostsList.module.css";

function PostsList() {
  return (
    <>
      <NewPost />
      <ul className={styles.posts}>
        <Post author="Ramesh" body="react.js is awesome" />
        <Post author="Suresh" body="react.ts is better" />
        <Post author="Mahesh" body="react.js is awesome" />
      </ul>
    </>
  );
}

export default PostsList;
