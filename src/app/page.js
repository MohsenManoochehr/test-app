import HomePage from "@/templates/HomePage";

export default async function Home() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();
  return <HomePage products={products} />;
}
