import React, { useMemo, useState } from 'react';
import './styles/App.css';
import PostList from './Components/PostList';
import PostForm from './Components/PostForm';
import PostFilter from './Components/PostFilter';
import PostCreaterForm from './Components/PostCreaterForm/PostCreaterForm';
import Button from './Components/UI/button/Button';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'в', description: '1' },
    { id: 2, title: 'б', description: '2' },
    { id: 3, title: 'а', description: '3' },
  ]);

  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);

  const sortedPosts = useMemo(() => {
    console.log('Функция отработала');
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts;
  },[filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo( () => {
    return sortedPosts.filter(posts => posts.title.toLowerCase().includes(filter.query.toLowerCase()))
  }, [filter.query, sortedPosts])

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false)
  };

  const removePost = (postId) => {
    setPosts(posts.filter(post => post.id !== postId));
  };

  return (
    <div className="App">
      <Button onClick={() => setModal(true)}>
        Создать пост
      </Button>
      <PostCreaterForm active = {modal} setActive={setModal}>
        <PostForm create={createPost}></PostForm>
      </PostCreaterForm>
      <PostFilter filter={filter} setFilter={setFilter}></PostFilter>
      <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Публикации про Frontend"></PostList>
    </div>
  );
}

export default App;
