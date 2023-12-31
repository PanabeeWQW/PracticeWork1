import React from 'react';
import Input from './UI/input/Input';
import Select from './UI/select/Select'

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
        <Input
        value={filter.query}
        placeholder={"Поиск поста по названию"}
        onChange={e => setFilter({...filter, query: e.target.value})}
      />
      <Select
        value={filter.sort}
        onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
        options={[
          { value: 'title', name: 'По названию' },
          { value: 'body', name: 'По содержанию' },
        ]}
        defaultValue="Сортировка по"
      />
        </div>
    );
}

export default PostFilter;