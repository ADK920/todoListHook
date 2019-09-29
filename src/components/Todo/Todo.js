import React, { Component } from 'react'
import ItemList from '../ItemList/ItemList';

import './Todo.css';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.onAdd = this.onAdd.bind(this);
        this.onComplete = this.onComplete.bind(this);
        this.onRemove = this.onRemove.bind(this);
        this.state = { item: this.newItem, items: [] };
    }

    handleChange(e) {
        const item = { ...this.state.item };
        item.value = e.target.value;
        this.setState({ item });
    }

    onAdd() {
        const items = [...this.state.items];
        items.push({ ...this.state.item });
        this.setState({ item: this.newItem, items });
    }

    onComplete(e, index) {
        const items = [...this.state.items];
        console.log('complete');
    }

    onRemove(e, index) {
        const items = this.state.items.slice();
        items.splice(index, 1);
        this.setState({ items });
    }

    get newItem() {
        return { value: '', completed: false };
    }

    render() {
        const item = this.state.item;
        const items = this.state.items;
        return (
            <div className='todo-list'>
                <h6>ToDo</h6>
                <div className='item-adder'>
                    <input value={item.value} onChange={this.handleChange}></input>
                    <button onClick={this.onAdd}>Add Todo</button>
                </div>
                <ItemList items={items} onRemove={this.onRemove}></ItemList>
            </div>
        );
    }
}

export default TodoList;