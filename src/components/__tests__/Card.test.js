import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Card from "@/components/Card";

jest.mock("next/image", () => (props) => {
  return <img {...props} alt={props.alt} />;
});

jest.mock("next/link", () => {
  return ({ children, href }) => <a href={href}>{children}</a>;
});

describe("Card Component", () => {
  const item = {
    id: 1,
    title: "Test Product",
    price: 25,
    description: "A great product",
    image: "/test-image.jpg",
  };

  const defaultList = [{ id: 1 }, { id: 2 }];

  test("renders product info correctly", () => {
    render(
      <Card
        item={item}
        list={defaultList}
        onAdd={() => {}}
        onDelete={() => {}}
      />
    );

    expect(screen.getByRole("img")).toHaveAttribute("src", "/test-image.jpg");
    expect(screen.getByRole("img")).toHaveAttribute("alt", "product");
    expect(screen.getByText("Test Product")).toBeInTheDocument();
    expect(screen.getByText("A great product")).toBeInTheDocument();
    expect(screen.getByText("$25")).toBeInTheDocument();
  });

  test("shows correct quantity based on list", () => {
    render(
      <Card
        item={item}
        list={defaultList}
        onAdd={() => {}}
        onDelete={() => {}}
      />
    );
    expect(screen.getByText("1")).toBeInTheDocument();
  });

  test("calls onAdd and onDelete handlers on button clicks", () => {
    const onAddMock = jest.fn();
    const onDeleteMock = jest.fn();

    render(
      <Card
        item={item}
        list={defaultList}
        onAdd={onAddMock}
        onDelete={onDeleteMock}
      />
    );

    fireEvent.click(screen.getByText("Add"));
    expect(onAddMock).toHaveBeenCalledWith(item);

    fireEvent.click(screen.getByText("Delete"));
    expect(onDeleteMock).toHaveBeenCalledWith(item.id);
  });
});
