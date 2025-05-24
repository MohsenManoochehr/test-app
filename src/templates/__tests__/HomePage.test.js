import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import HomePage from "@/templates/HomePage";

jest.mock("@/helper/helper", () => ({
  addToCart: (list, item) => [...list, item],
  removeFromCart: (list, itemId) => list.filter((i) => i.id !== itemId),
}));

jest.mock("@/components/Card", () => (props) => {
  const { item, onAdd, onDelete } = props;
  return (
    <div data-testid={`card-${item.id}`}>
      <span>{item.title}</span>
      <button onClick={() => onAdd(item)}>Add</button>
      <button onClick={() => onDelete(item.id)}>Delete</button>
    </div>
  );
});

jest.mock("@/components/TotalPrice", () => (props) => {
  const { list } = props;
  const total = list.reduce((sum, i) => sum + (i.price || 0), 0);
  return <div data-testid="total-price">Total: {total}</div>;
});

describe("HomePage", () => {
  const products = [
    { id: 1, title: "Product 1", price: 10 },
    { id: 2, title: "Product 2", price: 20 },
  ];

  test("renders product cards", () => {
    render(<HomePage products={products} />);
    expect(screen.getByText(/Product 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Product 2/i)).toBeInTheDocument();
  });

  test("adds and removes items from the cart", () => {
    render(<HomePage products={products} />);

    const addButtons = products.map((p) =>
      screen.getByTestId(`card-${p.id}`).querySelector("button")
    );
    const deleteButtons = products.map(
      (p) => screen.getByTestId(`card-${p.id}`).querySelectorAll("button")[1]
    );

    expect(screen.getByTestId("total-price")).toHaveTextContent("Total: 0");

    fireEvent.click(addButtons[0]);
    expect(screen.getByTestId("total-price")).toHaveTextContent("Total: 10");

    fireEvent.click(addButtons[1]);
    expect(screen.getByTestId("total-price")).toHaveTextContent("Total: 30");

    fireEvent.click(deleteButtons[0]);
    expect(screen.getByTestId("total-price")).toHaveTextContent("Total: 20");
  });
});
