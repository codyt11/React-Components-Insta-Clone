//Complete the necessary code in this file
// import useState
import React, {useState} from "react";
import Post from "./Post";
import "./Posts.css";
import Data from "../../dummy-data";


// import data 

const PostsPage = () => {
  // set up state for your data
  const [data, setData] = useState(Data);
  return (
    <div className="posts-container-wrapper">
      {data.map((item, index) => 
        <Post post = {item} key ={index}/> 
      )}
    </div>
  );
};

export default PostsPage;
