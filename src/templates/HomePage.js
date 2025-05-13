import Card from "@/components/Card";

async function HomePage() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();
  return (
    <article className="HomePage">
      <h1>This is a fake store, mocking a test using: Jest & Cypress.</h1>
      <section>
        {products?.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </section>
    </article>
  );
}

export default HomePage;
