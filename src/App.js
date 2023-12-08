import React, { useMemo, useState } from 'react';
import './styles/App.css';
import PostList from './Components/PostList';
import PostForm from './Components/PostForm';
import PostFilter from './Components/PostFilter';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'в', description: '1' },
    { id: 2, title: 'б', description: '2' },
    { id: 3, title: 'а', description: '3' },
  ]);

  const [filter, setFilter] = useState({sort: '', query: ''});

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
  };

  const removePost = (postId) => {
    setPosts(posts.filter(post => post.id !== postId));
  };

  return (
    <div className="App">
      <PostForm create={createPost}></PostForm>
      <PostFilter filter={filter} setFilter={setFilter}></PostFilter>
      {sortedAndSearchedPosts.length
      ?
      <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Публикации про Frontend"></PostList>
      :
      <h1 className='main_publication_title'>Постов пока что нету, но вы можете их добавить)</h1>
      }
    </div>
  );
}

export default App;
