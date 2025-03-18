import { useState } from "react";
import { Outlet } from "react-router-dom";
import MainHeader from "../components/MainHeader";
import PostsList from "../components/PostsList";

function Posts() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function hideModalHandler() {
    setModalIsVisible(false);
  }

  function showModalHandler() {
    setModalIsVisible(true);
  }

  return (
    <>
      {/* <MainHeader onCreatePost={showModalHandler}/>
      <main>
        <PostsList isPosting={modalIsVisible} stopPosting={hideModalHandler}/>
      </main> */}
      <Outlet />
      <main>
        <PostsList />
      </main>
    </>
  );
}

export default Posts;
