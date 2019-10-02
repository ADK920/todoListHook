import React, { useState } from 'react'
import ItemList from '../ItemList/ItemList';

import './Todo.css';

function TodoList() {
    const newItem = () => {
        return { value: '', completed: false };
    }
    const [state, setState] = useState({ item: newItem(), items: [] });

    const handleChange = evt => {
        const item = { ...state.item };
        item.value = evt.target.value;
        setState({ ...state, item });
    };

    const onAdd = () => {
        const items = [...state.items];
        items.push(state.item);
        setState({ ...state, items, item: newItem() });
    };

    const onComplete = (e, index) => {
        const items = [...state.items];
        const item = { ...items[index] };
        item.completed = true;
        items[index] = item;
        setState({ ...state, items });
    };

    const onRemove = (e, index) => {
        const items = [...state.items];
        items.splice(index, 1);
        setState({ ...state, items });
    };

    const clearTodos = evt => {
        setState({ ...state, items: [] });
    };
    const item = state.item;
    const items = state.items;
    return (
        <div className='todo-list'>
            <h6>ToDo</h6>
            <span>{item.value}</span>
            <div>
                <button onClick={clearTodos}>Clear All</button>
            </div>
            <div className='item-adder'>
                <input value={item.value} onChange={handleChange}></input>
                <button onClick={onAdd} disabled={item.value.length === 0}>Add Todo</button>
            </div>
            <ItemList items={items} onComplete={onComplete} onRemove={onRemove}></ItemList>
        </div>
    );
}

export default TodoList;