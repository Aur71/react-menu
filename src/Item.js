import React from 'react';

export const Item = ({ item }) => {
  const { category, desc, id, img, price, title } = item;

  return (
    <div className="item">
      <div className="img-container">
        <img src={img} alt={title} />
      </div>

      <div className="info-container">
        <div className="title-price">
          <h2>{title}</h2>
          <p className="price">$50</p>
        </div>
        <p className="info">{desc}</p>
      </div>
    </div>
  );
};
