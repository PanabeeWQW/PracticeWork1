import React from 'react';
import PostItem from './PostItem';

const PostList = ({post, title}) => {
    return (
        <div>
    <h1 className='main_publication_title'>{title}</h1>
      {post.map((post, index) => 
      <PostItem number={index + 1} post={post} key={post.id}></PostItem>
        )}
        </div>
    );
}

export default PostList;