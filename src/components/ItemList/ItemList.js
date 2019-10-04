import React from 'react';
import './ItemList.css';
import Item from '../Item/Item';

function ItemList(props) {
    const items = props.items;
    return (<div className="item-list">
        <div className="list-wrapper">
            {items.map((item, index) =>
                <Item key={index} item={item} index={index} onComplete={props.onComplete} onRemove={props.onRemove}></Item>
            )}
        </div>
    </div>)
}

export default ItemList;