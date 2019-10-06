import React, { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList';

import './Todo.css';

function TodoList() {
    const newItem = () => {
        return { userId: 0, id: -1, title: '', completed: false };
    }
    const [item, setItem] = useState(newItem());
    const [items, setItems] = useState([]);
    const [activeList, setActiveList] = useState(1);

    useEffect(() => {
        getTodos()
    }, [activeList]);

    const handleChange = evt => {
        const updateItem = { ...item };
        updateItem.title = evt.target.value;
        setItem(updateItem);
    };

    const onAdd = () => {
        const addItems = [...items];
        addItems.push(item);

        setItems(addItems);
        setItem(newItem());
    };

    const onComplete = (e, index) => {
        const completeItems = [...items];
        const completedItem = { ...completeItems[index] };
        completedItem.completed = true;
        completeItems[index] = completedItem;
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
            <h5>ToDo</h5>
            <div>
                <button onClick={getTodos}>Get more Todo!</button>
            </div>
            <div>
                <button onClick={clearTodos}>Clear All</button>
            </div>
            <div>Active List {activeList}</div>
            <div className="list-setter">
                <div>
                    <button onClick={() => setActiveList(1)}>List 1</button>
                </div>
                <div>
                    <button onClick={() => setActiveList(2)}>List 2</button>
                </div>
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