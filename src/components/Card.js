"use client";

import Image from "next/image";
import Link from "next/link";

function Card({ item, onAdd, onDelete, list }) {
  const { title, price, description, image, id } = item;

  const quantity = list.filter((i) => i.id === id).length;

  return (
    <div className="card">
      <Image src={image} width={300} height={300} alt="product" />
      <h3>
        <Link href={`/product/${id}`}>{title}</Link>
      </h3>
      <p>{description}</p>
      <b className="actions">
        {`$${price}`}
        <span>
          <strong>{quantity}</strong>
          <button onClick={() => onAdd(item)}>Add</button>
          <button onClick={() => onDelete(id)}>Delete</button>
        </span>
      </b>
    </div>
  );
}

export default Card;
