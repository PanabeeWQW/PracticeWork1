import React from 'react';
import PostItem from './PostItem';

const PostList = ({ posts, title, remove }) => {

  if (!posts.length) {
    return (
      <h1 className='main_publication_title'>Постов пока что нету, но вы можете их добавить)</h1>
    )
  }

    return (
      <div>
        <h1 className='main_publication_title'>{title}</h1>
        {posts && posts.map((post, index) => (
          <PostItem remove={remove} number={index + 1} post={post} key={post.id}></PostItem>
        ))}
      </div>
    );
  }
  
  export default PostList;
  