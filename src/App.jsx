import { useState } from "react";

import MainHeader from "./components/MainHeader";
import PostsList from "./components/PostsList";

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
 
  function hideModalHandler() {
    setModalIsVisible(false);
  }

  function showModalHandler() {
    setModalIsVisible(true);
  }

  return (
    <>
      <MainHeader onCreatePost={showModalHandler}/>
      <main>
        <PostsList isPosting={modalIsVisible} stopPosting={hideModalHandler}/>
      </main>
    </>
  );
}

export default App;
