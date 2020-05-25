// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";
import dummyData from "../../dummy-data";

const CommentSection = props => {
  // Add state for the comments
  let [comments, setComments] = useState(props.comments);
  const [newComment, setNewComment] = useState('');

  const submitComment = (event) => {
    event.preventDefault();
  
    setComments(
      comments = [...comments, {
      username: 'Cody',
      text: newComment
    }]);
  
    setNewComment("");
  }

  const changeComment = (e) => {
    setNewComment(e.target.value);
  }
  
  return (
    <div>
      {comments.map((comment, index) =>
        <Comment comment = {comment} key ={index}/>
      )}
      <CommentInput />
    </div>
  );
};

export default CommentSection;
