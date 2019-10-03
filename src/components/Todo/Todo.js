import React, { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList';

import './Todo.css';

function TodoList() {
    const newItem = () => {
        return { userId: 0, id: 2000, title: '', completed: false };
    }

    const [item, setItem] = useState(newItem());
    const [items, setItems] = useState([]);

    const handleChange = evt => {
        const updateItem = { ...item };
        updateItem.title = evt.target.value;
        setItem(updateItem);
    };

    const onAdd = () => {
        const addItems = [...items];
        addItems.push(item);
        setItems(items);
        setItem(newItem());
    };

    const onComplete = (e, index) => {
        const completeItems = [...items];
        const completedItem = { ...items[index] };
        completedItem.completed = true;
        completeItems[index] = item;
        setItems(completeItems);
    };

    const onRemove = (e, index) => {
        const removeItems = [...items];
        removeItems.splice(index, 1);
        setItems(removeItems);
    };

    const clearTodos = evt => {
        setItems([]);
    };

    const getTodos = evt => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then(res => setItems(res));
    }

    const content = (
        <div className='todo-list'>
            <h6>ToDo</h6>
            <div>
                <button onClick={getTodos}>Get more Todo!</button>
            </div>
            <div>
                <button onClick={clearTodos}>Clear All</button>
            </div>
            <div className='item-adder'>
                <input placeholder="Enter ToDo" value={item.title} onChange={handleChange}></input>
                <button onClick={onAdd} disabled={item.title.length === 0}>Add Todo</button>
            </div>
            <ItemList items={items} onComplete={onComplete} onRemove={onRemove}></ItemList>
        </div>
    );
    return content;
}

export default TodoList;