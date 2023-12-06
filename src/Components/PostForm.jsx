import React, { useState } from 'react';
import Input from './UI/input/Input';
import Button from './UI/button/Button';

const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: '', description: '' });

  const addNewPost = (event) => {
    event.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
    };
    create(newPost);
    setPost({ title: '', description: '' });
  };

  return (
    <>
      <form className="form_post_create" onSubmit={addNewPost}>
        <Input
          value={post.title}
          type="text"
          placeholder="Заголовок поста"
          onChange={(event) => setPost({ ...post, title: event.target.value })}
        />
        <Input
          value={post.description}
          type="text"
          placeholder="Содержание поста"
          onChange={(event) => setPost({ ...post, description: event.target.value })}
        />
        <Button type="submit">Создать пост</Button>
      </form>
    </>
  );
};

export default PostForm;
