import React, { useState } from 'react';
import './styles/App.css';
import PostList from './Components/PostList';
import Button from './Components/UI/button/Button';
import Input from './Components/UI/input/Input';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', description: 'Description' },
    { id: 2, title: 'JavaScript2', description: 'Description' },
    { id: 3, title: 'JavaScript3', description: 'Description' },
  ]);

  const [post, setPost] = useState({ title: '', description: '' });

  const addNewPost = () => {
    setPosts([...posts, { ...post, id: Date.now() }]);
    setPost({ title: '', description: '' });
  };

  return (
    <div className="App">
      <div className="form_content">
        <form className="form_post_create">
          <Input
            value={post.title}
            type="text"
            placeholder="Post name"
            onChange={(event) => setPost({ ...post, title: event.target.value })}
          />
          <Input
            value={post.description}
            type="text"
            placeholder="Post description"
            onChange={(event) => setPost({ ...post, description: event.target.value })}
          />
        </form>

        <Button onClick={addNewPost}>Create post</Button>
      </div>
      <PostList post={posts} title="Publications about Frontend"></PostList>
    </div>
  );
}

export default App;
