import React, { useState, useEffect } from "react";

export const Goods = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Для теста, данные можно загружать из JSON-файла или API
    const fetchData = async () => {
      const response = await fetch("./products.json"); // Путь к вашему JSON
      const data = await response.json();
      setProducts(data);
    };

    fetchData();
  }, []);

  return (
    <div className="goods-container">
      <h1 id="goods">Товари</h1>
      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h2>{product.name}</h2>
            <p>{product.status}</p>
            <p>Ціна: {product.price} грн</p>
            <button className="buy-button">Купити</button>
          </div>
        ))}
      </div>
    </div>
  );
};
