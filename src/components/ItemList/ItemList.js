import React, { Component } from 'react';
import './ItemList.css';

class ItemList extends Component {
    render() {
        const items = this.props.items;
        return (<div className="item-list">
            <div className="list-wrapper">
                {items.map((item, index) =>
                    <div className={`list-item complete-${item.completed}`}  key={index}>{item.value}
                        <button onClick={e => this.props.onRemove(e, index)}>Remove</button>
                        <button onClick={e => this.props.onComplete(e, index)}>Complete</button>
                    </div>)}
            </div>
        </div>)
    }
}

export default ItemList;