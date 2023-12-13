import React, { useState, useEffect } from 'react';
import './styles/App.css';
import PostList from './Components/PostList';
import PostForm from './Components/PostForm';
import PostFilter from './Components/PostFilter';
import PostCreaterForm from './Components/PostCreaterForm/PostCreaterForm';
import Button from './Components/UI/button/Button';
import { usePosts } from './hooks/usePosts';
import axios from 'axios';

function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modal, setModal] = useState(false);

  useEffect(() => {
    fetchPosts();
  }, []);

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  async function fetchPosts() {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  }

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (postId) => {
    setPosts(posts.filter((post) => post.id !== postId));
  };

  return (
    <div className="App">
      <Button onClick={() => setModal(true)}>Создать пост</Button>
      <PostCreaterForm active={modal} setActive={setModal}>
        <PostForm create={createPost}></PostForm>
      </PostCreaterForm>
      <PostFilter filter={filter} setFilter={setFilter}></PostFilter>
      <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Публикации про Frontend"></PostList>
    </div>
  );
}

export default App;
