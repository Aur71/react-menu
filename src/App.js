import React from 'react';
import { useState, useEffect, useCallback } from 'react';
import { Item } from './Item';
import data from './data';
import items from './data';

const allCategories = ['All', ...new Set(items.map((item) => item.category))];

const App = () => {
  const [menu, setMenu] = useState(data);

  const categoryFilter = (category) => {
    setMenu(data);
    if (category === 'All') {
      setMenu(data);
    }

    const newMenu = data.filter((item) => {
      if (item.category === category) {
        return item;
      }
    });
    setMenu(newMenu);
  };

  return (
    <main>
      <header>
        <h1>Our Menu</h1>
        <div className="underline"></div>
      </header>

      <section className="btn-container">
        {allCategories.map((item, index) => {
          return (
            <button
              key={index}
              className="btn"
              onClick={() => categoryFilter(item)}
            >
              {item}
            </button>
          );
        })}
      </section>

      <section className="list-container">
        {menu.map((item) => {
          return <Item key={item.id} item={item} />;
        })}
      </section>
    </main>
  );
};

export default App;
