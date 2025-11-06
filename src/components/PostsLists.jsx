import React, { useEffect } from "react";
import Post from "./Post";
import classes from "./PostsLists.module.css";
import NewPost from "./NewPost";
import { useState } from "react";
import Modal from "./Modal";

function PostsLists({ isPosting, onStopPosting, postData }) {
  const [posts, setPosts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setIsFetching(true);
      const response = await fetch("http://localhost:8080/posts");
      const res = await response.json();
      setPosts(res.posts);
      setIsFetching(false);
    }

    fetchData();
  }, []);

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      )}
      {!isFetching && posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={post.body} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
      {!isFetching && posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>No posts yet!</h2>
        </div>
      )}

      {isFetching && (
        <div style={{ textAlign: "center", color: "white" }}>
          <p>Loading!</p>
        </div>
      )}
    </>
  );
}

export default PostsLists;
