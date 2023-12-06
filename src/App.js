import React, { useMemo, useState } from 'react';
import './styles/App.css';
import PostList from './Components/PostList';
import PostForm from './Components/PostForm';
import Select from './Components/UI/select/Select';
import Input from './Components/UI/input/Input';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'в', description: '1' },
    { id: 2, title: 'б', description: '2' },
    { id: 3, title: 'а', description: '3' },
  ]);

  const [selectedSort, setSelectedSort] = useState('');
  const [searchQuary, setSearchQuery] = useState('');

  const sortedPosts = useMemo(() => {
    console.log('Функция отработала');
    if (selectedSort) {
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
    }
    return posts;
  },[selectedSort, posts]);

  const sortedAndSearchedPosts = useMemo( () => {
    return sortedPosts.filter(posts => posts.title.toLowerCase().includes(searchQuary.toLowerCase()))
  }, [searchQuary, sortedPosts])

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (postId) => {
    setPosts(posts.filter(post => post.id !== postId));
  };

  const sortPosts = (sort) => {
    setSelectedSort(sort);
  }

  return (
    <div className="App">
      <PostForm create={createPost}></PostForm>
      <Input
        value={searchQuary}
        placeholder={"Поиск"}
        onChange={e => setSearchQuery(e.target.value)}
      ></Input>
      <Select
        value={selectedSort}
        onChange={sortPosts}
        options={[
          { value: 'title', name: 'По названию' },
          { value: 'description', name: 'По содержанию' },
        ]}
        defaultValue="Сортировка по"
      />
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
