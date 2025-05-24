import React from "react";
import { render, screen } from "@testing-library/react";
import TotalPrice from "@/components/TotalPrice";

describe("TotalPrice Component", () => {
  test("calculates and displays total price correctly", () => {
    const list = [
      { id: 1, price: 10 },
      { id: 2, price: 15.5 },
      { id: 3, price: 4.99 },
    ];

    render(<TotalPrice list={list} />);

    expect(screen.getByText("$30.49")).toBeInTheDocument();
  });

  test("displays $0.00 if list is empty", () => {
    render(<TotalPrice list={[]} />);
    expect(screen.getByText("$0.00")).toBeInTheDocument();
  });

  test("handles prices with decimals correctly", () => {
    const list = [
      { id: 1, price: 10.123 },
      { id: 2, price: 20.456 },
    ];

    render(<TotalPrice list={list} />);

    expect(screen.getByText("$30.58")).toBeInTheDocument();
  });
});
