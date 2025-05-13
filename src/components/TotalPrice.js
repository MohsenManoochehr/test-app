"use client";

function TotalPrice({ list }) {
  const total = list.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  return <div className="total">${total}</div>;
}

export default TotalPrice;
