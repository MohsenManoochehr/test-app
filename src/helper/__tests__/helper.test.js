import { addToCart, removeFromCart } from "@/helper/helper";

describe("addToCart", () => {
  test("adds an item to the list", () => {
    const list = [{ id: 1 }];
    const item = { id: 2 };
    const result = addToCart(list, item);
    expect(result).toEqual([{ id: 1 }, { id: 2 }]);
    expect(result).not.toBe(list);
  });
});

describe("removeFromCart", () => {
  test("removes item by id from the list", () => {
    const list = [{ id: 1 }, { id: 2 }, { id: 3 }];
    const result = removeFromCart(list, 2);
    expect(result).toEqual([{ id: 1 }, { id: 3 }]);
    expect(result).not.toBe(list);
  });

  test("returns the same list if item id not found", () => {
    const list = [{ id: 1 }, { id: 2 }];
    const result = removeFromCart(list, 5);
    expect(result).toBe(list);
  });

  test("removes only the first occurrence of item", () => {
    const list = [{ id: 1 }, { id: 2 }, { id: 2 }];
    const result = removeFromCart(list, 2);
    expect(result).toEqual([{ id: 1 }, { id: 2 }]);
  });
});
