import {useState} from "react";


import NewPost from "./NewPost.jsx";
import Post from "./Post.jsx";

import styles from "./PostsList.module.css";

function PostsList() {

  const [enteredText, setEnteredText] = useState([]);
  const [enteredAuthor, setEnteredAuthor] = useState([]);

  function bodyChangeHandler(event) {
    setEnteredText(event.target.value); 
  }  
  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  return (
    <>
      <NewPost onAuthorChange={authorChangeHandler} onBodyChange={bodyChangeHandler} />
      <ul className={styles.posts}>
        <Post author={enteredAuthor} body={enteredText} />
        <Post author="Suresh" body="react.ts is better" />
        <Post author="Mahesh" body="react.js is awesome" />
      </ul>
    </>
  );
}

export default PostsList;
