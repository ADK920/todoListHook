import React from 'react';

function Item(props) {
    const index = props.index;
    const item = props.item;
    return (<div className={'list-item'} key={index}>
        <div className={`list-item-description complete-${item.completed}`}>{item.title}</div>
        <button onClick={e => props.onRemove(e, index)}>Remove</button>
        <button onClick={e => props.onComplete(e, index)}>Complete</button>
    </div>);
}

export default Item;