import classes from './NewPost.module.css';
import { useState } from 'react';

function NewPost(props) {

  const [enteredText, setEnteredText] = useState('');
  
 

  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={props.onBodyChange}/>
      </p>
      <p>{enteredText}</p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={props.onAuthorChange}/>
      </p>
    </form>
  );
}

export default NewPost;