import React from "react";

const PostItem = (props) => {
    return(
        <div>
        <div className='post'>
        <div className="post_content">
          <h1 className='post_title'>{props.number}. {props.post.title}</h1>
            <p className='post_desciprion'>
              {props.post.description}
            </p>
          </div>
          <button className='post_delete'>Удалить</button>
      </div>
        </div>
    );
};

export default PostItem;