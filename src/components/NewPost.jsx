import classes from "./NewPost.module.css";
import { useState } from "react";

function NewPost(props) {
  const [enteredText, setEnteredText] = useState([]);
  const [enteredAuthor, setEnteredAuthor] = useState([]);

  function bodyChangeHandler(event) {
    setEnteredText(event.target.value);
  }
  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  function addPostHandler(event) {
    event.preventDefault();
    const postData = {
      body: enteredText,
      author: enteredAuthor,
    };
    props.onAddPost(postData);
    props.onCancel();
  }

  return (
    <form className={classes.form} onSubmit={addPostHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={bodyChangeHandler} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={authorChangeHandler} />
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Post</button>
      </p>
    </form>
  );
}

export default NewPost;
