import Image from "next/image";

function Card({ item }) {
  const { title, price, description, image } = item;
  return (
    <div className="card">
      <Image src={image} width={300} height={300} alt="product" />
      <h3>{title}</h3>
      <p>{description}</p>
      <b>{price}</b>
    </div>
  );
}

export default Card;
