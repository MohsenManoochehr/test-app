"use client";

import Card from "@/components/Card";
import TotalPrice from "@/components/TotalPrice";
import { useState } from "react";
import { addToCart, removeFromCart } from "@/helper/helper";

function HomePage({ products }) {
  const [list, setList] = useState([]);

  const handleAdd = (item) => {
    setList((prev) => addToCart(prev, item));
  };

  const handleDelete = (itemId) => {
    setList((prev) => removeFromCart(prev, itemId));
  };

  return (
    <>
      <article className="HomePage">
        <h1>This is a fake store, mocking a test using: Jest & Cypress.</h1>
        <section>
          {products?.map((item) => (
            <Card
              key={item.id}
              item={item}
              list={list}
              onAdd={handleAdd}
              onDelete={handleDelete}
            />
          ))}
        </section>
      </article>
      <TotalPrice list={list} />
    </>
  );
}

export default HomePage;
