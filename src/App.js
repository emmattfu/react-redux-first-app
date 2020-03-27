import React from "react";

import "./App.css";
import PostFrom from "./components/PostForm";
import Posts from "./components/Posts";
import FetchedPosts from "./components/FetchedPosts";

function App() {
  return (
    <div className="container pt-3">
      <PostFrom />

      <div className="row">
        <div className="col">
          <Posts />
        </div>
        <div className="col">
          <FetchedPosts />
        </div>
      </div>
    </div>
  );
}

export default App;
