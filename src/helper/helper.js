export function addToCart(list, item) {
  return [...list, item];
}

export function removeFromCart(list, itemId) {
  const index = list.findIndex((i) => i.id === itemId);
  if (index === -1) return list;

  const newList = [...list];
  newList.splice(index, 1);
  return newList;
}
