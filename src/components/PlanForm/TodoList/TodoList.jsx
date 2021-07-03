import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';

export default function TodoList(props) {
  const { getTodoList } = props;
  const [todoItem, setTodoItem] = useState([]);

  const addTodoItem = () => {
    setTodoItem(todoItem.concat({ value: null, id: `${Date.now()}`, isChecked: false }));
  };

  const removeItem = (item) => {
    setTodoItem(todoItem.filter((obj) => obj.id !== item));
  };

  const getValue = (itemId, newValue) => {
    const item = todoItem.find((obj) => obj.id === itemId);
    item.value = newValue;
  };

  useEffect(() => {
    getTodoList(todoItem);
  }, [todoItem]);

  return (
    <div className="todo-list form-item">
      <div className="wrap">
        待辦清單
        <svg className="add-todo pointer" onClick={addTodoItem} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M13.3547 22.5516C13.3547 23.3515 13.9909 24 14.7757 24C15.5605 24 16.1968 23.3515 16.1968 22.5516V16.6195H22.6058C23.3758 16.6195 24 15.9832 24 15.1984C24 14.4136 23.3758 13.7774 22.6058 13.7774H16.1968V7.44838C16.1968 6.64846 15.5605 6 14.7757 6C13.9909 6 13.3547 6.64846 13.3547 7.44838V13.7774H7.39424C6.62422 13.7774 6 14.4136 6 15.1984C6 15.9832 6.62422 16.6195 7.39424 16.6195H13.3547V22.5516Z" fill="#4C5760" fillOpacity="0.95" />
        </svg>
      </div>
      {todoItem.length >= 1 && (
        <div>
          {todoItem.map((obj) => (
            <TodoItem
              key={obj.id}
              value={obj.value}
              itemId={obj.id}
              removeItem={removeItem}
              getValue={getValue}
            />
          ))}
        </div>
      )}

    </div>
  );
}
