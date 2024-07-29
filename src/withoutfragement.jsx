import React from 'react';

class ItemList extends React.Component {
  render() {
    const items = ['Item 1', 'Item 2', 'Item 3']; 

    return (
      <div>
        <h2>List of Items</h2>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ItemList;
