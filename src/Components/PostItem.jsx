import React from "react";
import Button from "./UI/button/Button";

const PostItem = (props) => {
  return (
    <div>
      <div className='post'>
        <div className="post_content">
          <h1 className='post_title'>{props.number}. {props.post.title}</h1>
          <p className='post_desciprion'>
            {props.post.description}
          </p>
        </div>
        <Button onClick={() => props.remove(props.post.id)} className='post_delete'>Удалить пост</Button>
      </div>
    </div>
  );
};

export default PostItem;

