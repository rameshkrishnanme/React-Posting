import classes from "./NewPost.module.css";
import { useState } from "react";
import Modal from "../components/Modal";
import { Link, Form, redirect } from "react-router-dom";

function NewPost() {
  // const [enteredText, setEnteredText] = useState([]);
  // const [enteredAuthor, setEnteredAuthor] = useState([]);

  // function bodyChangeHandler(event) {
  //   setEnteredText(event.target.value);
  // }
  // function authorChangeHandler(event) {
  //   setEnteredAuthor(event.target.value);
  // }

  // function addPostHandler(event) {
  //   event.preventDefault();
  //   const postData = {
  //     body: enteredText,
  //     author: enteredAuthor,
  //   };
  // }

  return (
    <Modal>
      <Form method="post" className={classes.form}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" name="body" required rows={3} />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" name="author" required />
        </p>
        <p className={classes.actions}>
          <Link type="button" to="/">
            Cancel
          </Link>
          <button type="submit">Submit</button>
        </p>
      </Form>
    </Modal>
  );
}

export default NewPost;

export async function action({request}) {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData);
  console.log(postData)
  await fetch("http://localhost:8080/posts", {
    method: "POST",
    body: JSON.stringify(postData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return redirect('/');
}
